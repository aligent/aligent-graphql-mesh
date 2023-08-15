import { QueryResolvers } from '@mesh';
import { getDecodedMeshToken } from '../../../utils/tokens';
import { getBcCustomer } from '../../apis/graphql/customer';
import { transformCustomer } from '../../factories/transform-customer-data';
import { getAllCustomerAddresses, getSubscriberByEmail } from '../../apis/rest/customer';

export const customerResolver: QueryResolvers['customer'] = {
    resolve: async (_root, _args, context, _info) => {
        const { bc_customer_id } = getDecodedMeshToken(context.headers.authorization);

        const [bcCustomer, bcAddresses] = await Promise.all([
            getBcCustomer(bc_customer_id),
            getAllCustomerAddresses(bc_customer_id),
        ]);

        console.log(bcAddresses);

        const subscriber = await getSubscriberByEmail(encodeURIComponent(bcCustomer.email));
        const isSubscriber = !!subscriber;

        return transformCustomer(bcCustomer, bcAddresses, isSubscriber);
    },
};
