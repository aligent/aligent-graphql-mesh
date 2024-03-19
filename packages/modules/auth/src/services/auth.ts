import { DynamoDBClient, GetItemCommand } from '@aws-sdk/client-dynamodb';
import { ModuleConfigToken } from '../providers';
import { Inject, Injectable, forwardRef, CONTEXT } from 'graphql-modules';
import { ModuleConfig } from '@aligent/auth-module';

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

    async getUserAuth(userId: string | number, refreshToken: string) {
        const command = new GetItemCommand({
            TableName: 'authentication-table',
            Key: {
                customer_id: {
                    S: String(userId),
                },
                refresh_token_hash: {
                    S: refreshToken,
                },
            },
        });
        const response = await this.client.send(command);

        return response;
    }

    async updateUserAuth(userId: string | number, refreshToken: string) {
        const command = new GetItemCommand({
            TableName: 'authentication-table',
            Key: {
                customer_id: {
                    S: String(userId),
                },
                refresh_token_hash: {
                    S: 'dfgreagearg',
                },
            },
        });
        const response = await this.client.send(command);

        return response;
    }

    async removeUserAuth(userId: string | number, refreshToken: string) {
        const command = new GetItemCommand({
            TableName: 'authentication-table',
            Key: {
                customer_id: {
                    S: String(userId),
                },
                refresh_token_hash: {
                    S: 'dfgreagearg',
                },
            },
        });
        const response = await this.client.send(command);

        return response;
    }
}
