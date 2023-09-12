import { QueryResolvers } from '@aligent/bigcommerce-resolvers';
import { getBcCustomer } from '../../apis/graphql/customer';
import {
    getCustomerAttributesFromFormFields,
    transformBcCustomer,
} from '../../factories/transform-customer-data';
import { getAllCustomerAddresses, getCustomerFormFields } from '../../apis/rest/customer';
import { getBcCustomerIdFromMeshToken } from '../../utils';
import { getSubscriberByEmail } from '../../apis/rest/subscriber';
import { getOrders } from '../../apis/rest/order';
import { BCOrder } from '../../types';

export const customerResolver: QueryResolvers['customer'] = {
    resolve: async (_root, _args, context, _info) => {
        const bcCustomerId = getBcCustomerIdFromMeshToken(context.headers.authorization);
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;

        const [bcCustomer, bcAddresses, bcOrders, bcFormFields] = await Promise.all([
            getBcCustomer(bcCustomerId, customerImpersonationToken),
            getAllCustomerAddresses(bcCustomerId),
            getAllOrders(bcCustomerId),
            getCustomerFormFields(bcCustomerId),
        ]);

        const subscriber = await getSubscriberByEmail(bcCustomer.email);
        const isSubscriber = !!subscriber;

        /* Retrieved custom customer properties defined in the admin.
         * NOTE: Make sure to add new customer properties coming from the admin to schema.json
         * */
        const customerAttributesFromFormFields = getCustomerAttributesFromFormFields(bcFormFields);

        return {
            ...transformBcCustomer(bcCustomer, bcAddresses, isSubscriber, bcOrders),
            ...customerAttributesFromFormFields,
        };
    },
};

const getAllOrders = async (bcCustomerId: number): Promise<BCOrder[]> => {
    const bcOrders: BCOrder[] = [];
    for await (const bcOrder of getOrders(bcCustomerId)) {
        bcOrders.push(bcOrder);
    }

    return bcOrders;
};
