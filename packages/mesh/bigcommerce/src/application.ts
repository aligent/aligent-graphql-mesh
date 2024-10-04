import { createApplication } from 'graphql-modules';
import { createBigCommerceModule } from '@aligent/bigcommerce-graphql-module';

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
    ],
});
