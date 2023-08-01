import { productsMock } from '../mocks/products';
import { getBcProductGraphql } from '../requests/bc-graphql-calls';

export const productsResolver = {
    resolve: async (_root, _args, context, _info) => {
        if (!context.headers.customerImpersonationToken) {
            throw new Error('No token generated in mesh plugin');
        }

        // This is a sample of how to grab the customerImpersonationToken from headers
        const getProduct = await getBcProductGraphql(
            'WH01',
            context.headers.customerImpersonationToken
        );
        return productsMock;
    },
};
