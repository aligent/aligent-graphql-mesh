import {
    BatchWriteItemCommand,
    DeleteItemCommand,
    DynamoDBClient,
    GetItemCommand,
    PutItemCommand,
    QueryCommandOutput,
    QueryCommand,
} from '@aws-sdk/client-dynamodb';
import { Inject, Injectable, forwardRef, CONTEXT } from 'graphql-modules';
import { chunk } from 'lodash';
import {
    BatchRemoveItems,
    BatchWriteItemResponse,
    GetUserAuthResponse,
    RemoveUserAuthResponse,
    UpdateUserAuthResponse,
} from '../types/index';
import { ModuleConfig } from '../index';
import { ModuleConfigToken } from '../providers';
import { getHashedRefreshToken } from '../utils';
import { BatchWriteItemCommandOutput } from '@aws-sdk/client-dynamodb/dist-types/commands/BatchWriteItemCommand';

const BATCH_WRITE_LIMIT = 25;

@Injectable({
    global: true,
})
export class AuthService {
    protected client: DynamoDBClient;

    constructor(
        @Inject(forwardRef(() => ModuleConfigToken)) protected config: ModuleConfig,
        // eslint-disable-next-line no-unused-vars
        @Inject(CONTEXT) private context: GraphQLModules.GlobalContext
    ) {
        this.client = new DynamoDBClient({
            region: this.config.dynamoDbRegion,
            credentials: {
                accessKeyId: this.config.dynamoDbAccessKeyId,
                secretAccessKey: this.config.dynamoDbSecretAccessKey,
            },
        });
    }

    async getUserAuth(userId: string | number, refreshToken: string): GetUserAuthResponse {
        const hashedRefreshToken = getHashedRefreshToken(refreshToken);

        const command = new GetItemCommand({
            TableName: this.config.dynamoDbAuthTable,
            Key: {
                customer_id: {
                    S: String(userId),
                },
                refresh_token_hash: {
                    S: hashedRefreshToken,
                },
            },
        });
        const response = await this.client.send(command).catch((e) => e);

        if (response instanceof Error) {
            console.error(response);
        }

        return response;
    }

    async updateUserAuth(
        userId: string | number,
        refreshToken: string,
        refreshTokenTTl: number | string
    ): UpdateUserAuthResponse {
        const hashedRefreshToken = getHashedRefreshToken(refreshToken);

        const command = new PutItemCommand({
            TableName: this.config.dynamoDbAuthTable,
            Item: {
                customer_id: {
                    S: String(userId),
                },
                refresh_token_hash: {
                    S: hashedRefreshToken,
                },
                ttl: {
                    S: String(refreshTokenTTl),
                },
            },
        });

        const response = await this.client.send(command).catch((e) => e);

        if (response instanceof Error) {
            console.error(response);
        }

        return response;
    }

    async removeUserAuth(userId: string | number, refreshToken: string): RemoveUserAuthResponse {
        const hashedRefreshToken = getHashedRefreshToken(refreshToken);

        const command = new DeleteItemCommand({
            TableName: this.config.dynamoDbAuthTable,
            Key: {
                customer_id: {
                    S: String(userId),
                },
                refresh_token_hash: {
                    S: hashedRefreshToken,
                },
            },
            ConditionExpression: 'attribute_exists(refresh_token_hash)',
            ReturnValues: 'ALL_OLD',
        });

        const response = await this.client.send(command).catch((e) => e);

        if (response instanceof Error) {
            console.error(response);
        }

        return response;
    }

    async removeAllUserAuthItems(userId: string | number): Promise<{ success: boolean }> {
        const scanItemsResponse = await this.getAllAuthItemsById(userId);

        if (scanItemsResponse instanceof Error) {
            console.error(scanItemsResponse);
            return { success: false };
        }

        if (!scanItemsResponse?.Items?.length) return { success: true };

        const items = scanItemsResponse.Items.reduce((carry, item) => {
            if (!item.refresh_token_hash?.S) return carry;
            return [
                ...carry,
                {
                    DeleteRequest: {
                        Key: {
                            customer_id: {
                                S: String(userId),
                            },
                            refresh_token_hash: {
                                S: item.refresh_token_hash.S,
                            },
                        },
                    },
                },
            ];
        }, [] as BatchRemoveItems);

        /* Creates and array of arrays where each array items holds a max of 25 auth items.
           e.g. [[{}, {}, {}, ...], [{}, {}, {}, ...], ...]

           25 is the maximum number of items we can pass to the BatchWriteItem method. Using this
           we can loop over each array of items passing them to "BatchWriteItemCommand"
       */
        const batchItemChunks = chunk(items, BATCH_WRITE_LIMIT);

        const responses: BatchWriteItemResponse[] = [];
        for (const batchItemChunk of batchItemChunks) {
            const deleteCommand = new BatchWriteItemCommand({
                RequestItems: {
                    [this.config.dynamoDbAuthTable]: batchItemChunk,
                },
            });

            const response: BatchWriteItemCommandOutput & Error = await this.client
                .send(deleteCommand)
                .catch((e) => e);

            responses.push(response);
        }

        if (responses.some((response) => response instanceof Error)) {
            responses.forEach((error) => {
                console.error(error);
            });

            return { success: false };
        }

        return { success: true };
    }

    async getAllAuthItemsById(userId: string | number): Promise<QueryCommandOutput | Error> {
        const queryInput = new QueryCommand({
            TableName: this.config.dynamoDbAuthTable,
            KeyConditionExpression: `customer_id = :partitionKeyValue`,
            ExpressionAttributeValues: {
                ':partitionKeyValue': { S: String(userId) },
            },
        });

        const queryResults = await this.client.send(queryInput).catch((e) => e as Error);

        if (queryResults instanceof Error) {
            console.error(queryResults);
        }

        return queryResults;
    }
}
