import { QueryResolvers } from '@aligent/bigcommerce-resolvers';
import { BcCustomer } from '../../types';
import { getCustomersByEmail } from '../../apis/rest/customer';

export const isEmailAvailableResolver: QueryResolvers['isEmailAvailable'] = {
    resolve: async (_root, args, _context, _info) => {
        const is_email_available = await getCustomersByEmail(args.email).then(isEmailAvailable);
        return {
            is_email_available,
        };
    },
};

const isEmailAvailable = (bcCustomers?: BcCustomer[]): boolean => {
    return bcCustomers === undefined || bcCustomers.length <= 0;
};
