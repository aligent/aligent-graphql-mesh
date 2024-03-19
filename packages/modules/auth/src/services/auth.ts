import {
    DeleteItemCommand,
    DynamoDBClient,
    GetItemCommand,
    PutItemCommand,
} from '@aws-sdk/client-dynamodb';
import { Inject, Injectable, forwardRef, CONTEXT } from 'graphql-modules';
import {
    GetUserAuthResponse,
    ModuleConfig,
    RemoveUserAuthResponse,
    UpdateUserAuthResponse,
} from '../../';
import { ModuleConfigToken } from '../providers';

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
        const command = new GetItemCommand({
            TableName: this.config.dynamoDbTableName,
            Key: {
                customer_id: {
                    S: String(userId),
                },
                refresh_token_hash: {
                    S: refreshToken,
                },
            },
        });
        const response = await this.client
            .send(command)
            .then((res) => {
                console.dir(res);
                return res;
            })
            .catch((e) => e);

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
        const command = new PutItemCommand({
            TableName: this.config.dynamoDbTableName,
            Item: {
                customer_id: {
                    S: String(userId),
                },
                refresh_token_hash: {
                    S: refreshToken,
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
        const command = new DeleteItemCommand({
            TableName: this.config.dynamoDbTableName,
            Key: {
                customer_id: {
                    S: String(userId),
                },
                refresh_token_hash: {
                    S: refreshToken,
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
