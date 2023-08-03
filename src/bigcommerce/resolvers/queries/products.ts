import { Products, QueryResolvers } from '../../../meshrc/.mesh';
import { CustomContext } from '../../types';
import { productsMock } from '../mocks/products';
//import { getBcProductGraphql } from '../requests/bc-graphql-calls';

export const productsResolver: QueryResolvers<CustomContext>['products'] = {
    resolve: async (_root, _args, _context, _info) => {
        //const customerImpersonationToken = await context.cache.get('customerImpersonationToken');

        // This is a sample of how to grab the customerImpersonationToken from headers
        //const bcProduct = await getBcProductGraphql('WH01', customerImpersonationToken);
        return productsMock as unknown as Products;
    },
};
