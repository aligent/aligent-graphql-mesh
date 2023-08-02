import { QueryResolvers } from '../../../meshrc/.mesh';
import { getBcCustomer } from '../requests/bc-graphql-calls';

export const customerResolver: QueryResolvers['customer'] = {
    resolve: async (_root, _args, context, _info) => {
        if (!context.headers.customerImpersonationToken) {
            throw new Error('No token generated in mesh plugin');
        }

        const customer = await getBcCustomer(
            context.headers.customerImpersonationToken,
            context.headers['x-bc-customer-id']
        );

        return {
            email: customer.email,
        };
    },
};
