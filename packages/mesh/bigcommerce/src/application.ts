import { createApplication, Scope } from 'graphql-modules';
import { createBigCommerceModule, ClientLoginService } from '@aligent/bigcommerce-graphql-module';
import { createAuthModule, LoginService } from '@aligent/auth-module';

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
            dynamoDbAuthTable: process.env.DYNAMO_DB_AUTH_TABLE as string,
            extendRefreshTokenExpiryInMinutes: 43200 | (30 * 24 * 60), // The time in minutes an extended user session should end in - optional
            nonExtendRefreshTokenExpiryInMinutes: 15, // The time in minutes a non-extended user session should end in - optional
            accessTokenExpiryInMinutes: 10, // The time in minutes an access token is valid for - optional
        }),
    ],
    // This works when both Auth and BigCommerce modules don't define the loginServices in the
    // there local providers.
    // providers: [
    //     {
    //         useClass: ClientLoginService,
    //         provide: LoginService,
    //         scope: Scope.Singleton,
    //         global: true,
    //     },
    // ],
});
