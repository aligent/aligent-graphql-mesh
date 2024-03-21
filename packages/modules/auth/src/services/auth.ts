import {
    BatchWriteItemCommand,
    DeleteItemCommand,
    DynamoDBClient,
    GetItemCommand,
    PutItemCommand,
    ScanCommand,
    ScanCommandOutput,
} from '@aws-sdk/client-dynamodb';
import { Inject, Injectable, forwardRef, CONTEXT } from 'graphql-modules';
import {
    BatchRemoveItems,
    GetUserAuthResponse,
    RemoveUserAuthResponse,
    UpdateUserAuthResponse,
} from '../types/index';
import { ModuleConfig } from '../index';
import { ModuleConfigToken } from '../providers';
import { getHashedRefreshToken } from '../utils';

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

        const deleteCommand = new BatchWriteItemCommand({
            RequestItems: {
                [this.config.dynamoDbAuthTable]: items,
            },
        });

        const response = await this.client.send(deleteCommand).catch((e) => e);

        if (response instanceof Error) {
            console.error(response);
            return { success: false };
        }

        return { success: true };
    }

    async getAllAuthItemsById(userId: string | number): Promise<ScanCommandOutput | Error> {
        const scanInput = new ScanCommand({
            TableName: this.config.dynamoDbAuthTable,
            FilterExpression: `customer_id = :partitionKeyValue`,
            ExpressionAttributeValues: {
                ':partitionKeyValue': { S: String(userId) },
            },
        });

        const scanResults = await this.client.send(scanInput).catch((e) => e as Error);

        if (scanResults instanceof Error) {
            console.error(scanResults);
        }

        return scanResults;
    }
}
