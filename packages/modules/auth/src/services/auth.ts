import {
    BatchWriteItemCommand,
    DeleteItemCommand,
    DynamoDBClient,
    GetItemCommand,
    PutItemCommand,
    QueryCommandOutput,
    QueryCommand,
} from '@aws-sdk/client-dynamodb';
import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { chunk } from 'lodash';
import {
    BatchRemoveItems,
    BatchWriteItemResponse,
    CustomerId,
    GetUserAuthResponse,
    RemoveUserAuthResponse,
    UpdateUserAuthResponse,
} from '../types/index';
import { ModuleConfig } from '../index';
import { ModuleConfigToken } from '../providers';
import { getHashedRefreshToken } from '../utils';
import { BatchWriteItemCommandOutput } from '@aws-sdk/client-dynamodb/dist-types/commands/BatchWriteItemCommand';

const BATCH_WRITE_LIMIT = 25;

/**
 * Repository service for user authentication details
 */
@Injectable({
    global: true,
})
export class AuthService {
    protected client: DynamoDBClient;

    constructor(@Inject(forwardRef(() => ModuleConfigToken)) protected config: ModuleConfig) {
        this.client = new DynamoDBClient({
            region: this.config.dynamoDbRegion,
            /* Note: Credentials are not required as long as "AWS_ACCESS_KEY_ID" and
             * "AWS_SECRET_ACCESS_KEY" variables are defined in the ".env" file.
             * This sdk will pick them up from ".env" being calling "process.env" */
        });
    }

    /**
     * Get an existing user authentication session
     *
     * @param customerId
     * @param refreshToken
     * @returns
     */
    async getUserAuth(customerId: CustomerId, refreshToken: string): GetUserAuthResponse {
        const hashedRefreshToken = getHashedRefreshToken(refreshToken);

        const command = new GetItemCommand({
            TableName: this.config.dynamoDbAuthTable,
            Key: {
                customer_id: {
                    S: String(customerId),
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

    /**
     * Upsert a user authentication session with a time to live
     *
     * @param customerId
     * @param refreshToken
     * @param refreshTokenTTl
     * @returns
     */
    async updateUserAuth(
        customerId: CustomerId,
        refreshToken: string,
        refreshTokenTTl: number | string
    ): UpdateUserAuthResponse {
        const hashedRefreshToken = getHashedRefreshToken(refreshToken);

        const command = new PutItemCommand({
            TableName: this.config.dynamoDbAuthTable,
            Item: {
                customer_id: {
                    S: String(customerId),
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

    /**
     * Remove a user authentication session
     *
     * @param customerId
     * @param refreshToken
     * @returns
     */
    async removeUserAuth(customerId: CustomerId, refreshToken: string): RemoveUserAuthResponse {
        const hashedRefreshToken = getHashedRefreshToken(refreshToken);

        const command = new DeleteItemCommand({
            TableName: this.config.dynamoDbAuthTable,
            Key: {
                customer_id: {
                    S: String(customerId),
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

    /**
     * Remove all user authentication sessions for one customer
     *
     * @param customerId
     * @returns
     */
    async removeAllUserAuthItems(customerId: CustomerId): Promise<{ success: boolean }> {
        const queryItemsResponse = await this.queryAuthItemsById(customerId);

        if (queryItemsResponse instanceof Error) {
            console.error(queryItemsResponse);
            return { success: false };
        }

        if (!queryItemsResponse?.Items?.length) return { success: true };

        const items = queryItemsResponse.Items.reduce((carry, item) => {
            if (!item.refresh_token_hash?.S) return carry;
            return [
                ...carry,
                {
                    DeleteRequest: {
                        Key: {
                            customer_id: {
                                S: String(customerId),
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

    /**
     * Get all user authentication sessions for a given user id
     *
     * @param customerId
     * @returns
     */
    async queryAuthItemsById(customerId: CustomerId): Promise<QueryCommandOutput | Error> {
        const queryInput = new QueryCommand({
            TableName: this.config.dynamoDbAuthTable,
            KeyConditionExpression: `customer_id = :partitionKeyValue`,
            ExpressionAttributeValues: {
                ':partitionKeyValue': { S: String(customerId) },
            },
        });

        const queryResults = await this.client.send(queryInput).catch((e) => e as Error);

        if (queryResults instanceof Error) {
            console.error(queryResults);
        }

        return queryResults;
    }
}
