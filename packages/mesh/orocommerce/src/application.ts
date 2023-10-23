import { createApplication } from 'graphql-modules';
import { createOroCommerceModule } from '@aligent/orocommerce-graphql-module';

export default createApplication({
    modules: [
        createOroCommerceModule({
            storeUrl: process.env.ORO_STORE_URL as string,
            clientId: process.env.ORO_CLIENT_ID as string,
            clientSecret: process.env.ORO_CLIENT_SECRET as string,
        }),
    ],
});
