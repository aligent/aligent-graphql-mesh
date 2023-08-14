import { QueryResolvers } from '@mesh';
import { getDecodedMeshToken } from '../../../utils/tokens';
import { getBcCustomer } from '../../apis/graphql/customer';
import { transformCustomer } from '../../factories/transform-customer-data';
import { getAllCustomerAddresses, getSubscriberByEmail } from '../../apis/rest/customer';

/* istanbul ignore file */
export const customerResolver: QueryResolvers['customer'] = {
    resolve: async (_root, _args, context, _info) => {
        //  const customerImpersonationToken = await context.cache.get('customerImpersonationToken');

        const { bc_customer_id } = getDecodedMeshToken(context.headers.authorization);

        const [bcCustomer, bcAddresses] = await Promise.all([
            getBcCustomer(bc_customer_id),
            getAllCustomerAddresses(bc_customer_id),
        ]);

        // Testing revealed email with symbols like '+' caused search via email to not work
        const subscriber = await getSubscriberByEmail(encodeURIComponent(bcCustomer.email));
        const isSubscriber = !!subscriber;

        // console.log(bcCustomer);
        // console.log(bcAddresses);

        const response = transformCustomer(bcCustomer, bcAddresses, isSubscriber);
       console.log(JSON.stringify(response));

        return response;
    },
};
