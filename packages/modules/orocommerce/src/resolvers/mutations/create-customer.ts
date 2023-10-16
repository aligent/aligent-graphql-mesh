import { Customer, MutationResolvers } from '@aligent/orocommerce-resolvers';
import { CustomerClient } from '../../apis/rest/customer';
import { CustomerUser } from '../../types';
import { logAndThrowError } from '@aligent/utils';
import { getTransformedCreateCustomerData } from '../../transformers/customers/customer-transformer';

export const createCustomerMutation: MutationResolvers['createCustomer'] = {
    resolve: async (_root, args, context, _info) => {
        const { email, firstname, lastname, password } = args.input;

        if (!email || !firstname || !lastname || !password) {
            return logAndThrowError('Did not receive email or firstname or lastname or password');
        }

        const transformedCreateCustomerData = getTransformedCreateCustomerData(
            email,
            firstname,
            lastname,
            password
        );

        const customerClient: CustomerClient = context.injector.get(CustomerClient);

        const oroCustomer = await customerClient.createCustomerUser(transformedCreateCustomerData);

        return {
            customer: transformCustomerData(oroCustomer),
        };
    },
};

export const transformCustomerData = (customer: CustomerUser): Customer => {
    return {
        id: parseInt(customer.id)
    };
};
