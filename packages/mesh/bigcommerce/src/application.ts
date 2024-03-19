import { createApplication } from 'graphql-modules';
import { createBigCommerceModule } from '@aligent/bigcommerce-graphql-module';
import { createAuthModule } from '@aligent/auth-module';

export default createApplication({
    modules: [
        createBigCommerceModule({
            graphqlEndpoint: process.env.BC_GRAPHQL_API as string,
            authToken: process.env.X_AUTH_TOKEN as string,
            jwtPrivateKey: process.env.JWT_PRIVATE_KEY as string,
            clientSecret: process.env.BC_CLIENT_SECRET as string,
            clientId: process.env.BC_CLIENT_ID as string,
            storeHash: process.env.STORE_HASH as string,
        }),
        createAuthModule({
            dynamoDbRegion: process.env.DYNAMO_DB__REGION as string,
            dynamoDbAccessKeyId: process.env.DYNAMO_DB__ACCESS_KEY_ID as string,
            dynamoDbSecretAccessKey: process.env.DYNAMO_DB__SECRET_ACCESS_KEY as string,
            dynamoDbTableName: process.env.DYNAMO_DB__TABLE_NAME as string,
        }),
    ],
});
