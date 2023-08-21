import { QueryResolvers } from '@mesh';
import { getBcCustomer } from '../../apis/graphql/customer';
import { transformCustomer } from '../../factories/transform-customer-data';
import { getAllCustomerAddresses, getSubscriberByEmail } from '../../apis/rest/customer';
import { getBcCustomerIdFromMeshToken } from '../../../utils/tokens';

export const customerResolver: QueryResolvers['customer'] = {
    resolve: async (_root, _args, context, _info) => {
        const bcCustomerId = getBcCustomerIdFromMeshToken(context.headers.authorization);
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;

        const [bcCustomer, bcAddresses] = await Promise.all([
            getBcCustomer(bcCustomerId, customerImpersonationToken),
            getAllCustomerAddresses(bcCustomerId),
        ]);

        const subscriber = await getSubscriberByEmail(encodeURIComponent(bcCustomer.email));
        const isSubscriber = !!subscriber;

        return transformCustomer(bcCustomer, bcAddresses, isSubscriber);
    },
};
