import {
    DeleteItemCommand,
    DynamoDBClient,
    GetItemCommand,
    PutItemCommand,
} from '@aws-sdk/client-dynamodb';
import { Inject, Injectable, forwardRef, CONTEXT } from 'graphql-modules';
import {
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
}
