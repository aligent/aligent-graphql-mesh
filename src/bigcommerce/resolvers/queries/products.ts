import { Products, QueryResolvers } from '../../../meshrc/.mesh';
import { productsMock } from '../mocks/products';

export const productsResolver: QueryResolvers['products'] = {
    resolve: async (_root, _args, context, _info) => {
        if (!context.headers.customerImpersonationToken) {
            throw new Error('No token generated in mesh plugin');
        }

        // This is a sample of how to grab the customerImpersonationToken from headers
        // const getProduct = await getBcProductGraphql(
        //     'WH01',
        //     context.headers.customerImpersonationToken
        // );
        return productsMock as unknown as Products;
    },
};
