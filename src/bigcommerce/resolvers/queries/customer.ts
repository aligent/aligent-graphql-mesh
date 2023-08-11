import { QueryResolvers } from '@mesh';
import { getDecodedMeshToken } from '../../../utils/tokens';
import { logAndThrowError } from '../../../utils/error-handling';
import { getBcCustomer } from '../../apis/graphql/customer';
import { transformCustomer } from '../../factories/transform-customer-data';
import { getAllCustomerAddresses } from '../../apis/rest/customer';

/* istanbul ignore next */
export const customerResolver: QueryResolvers['customer'] = {
    resolve: async (_root, _args, context, _info) => {
        //  const customerImpersonationToken = await context.cache.get('customerImpersonationToken');
        try {
            const { bc_customer_id } = getDecodedMeshToken(context.headers.authorization);

            const [bcCustomer, bcAddresses] = await Promise.all([
                getBcCustomer(bc_customer_id),
                getAllCustomerAddresses(bc_customer_id),
            ]);
            console.log(bcCustomer);
            console.log(bcAddresses);

            return transformCustomer(bcCustomer, bcAddresses);
        } catch {
            return logAndThrowError(new Error(`Failed to send mesh-token`));
        }
    },
};
