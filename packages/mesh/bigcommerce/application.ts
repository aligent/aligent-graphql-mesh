import { Module, createApplication } from 'graphql-modules';
import { createBigCommerceModule } from '@aligent/bigcommerce-graphql-module';
import { createOroCommerceModule } from '@aligent/orocommerce-graphql-module';

const modules: Module[] = [];

if (process.env.MODE == 'ORO') {
    modules.push(
        createOroCommerceModule({
            storeUrl: process.env.ORO_STORE_URL as string,
            clientId: process.env.ORO_CLIENT_ID as string,
            clientSecret: process.env.ORO_CLIENT_SECRET as string,
        })
    );
} else {
    modules.push(
        createBigCommerceModule({
            graphqlEndpoint: process.env.BC_GRAPHQL_API as string,
            authToken: process.env.X_AUTH_TOKEN as string,
            jwtPrivateKey: process.env.JWT_PRIVATE_KEY as string,
            clientSecret: process.env.BC_CLIENT_SECRET as string,
            clientId: process.env.BC_CLIENT_ID as string,
            storeHash: process.env.STORE_HASH as string,
        })
    );
}

export default createApplication({ modules });
