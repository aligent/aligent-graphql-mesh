import { MutationResolvers } from '@mesh';
import { transformCustomerData } from '../../factories/transform-customers-data';
import { createCustomer } from '../../apis/rest/customer';
import { logAndThrowError } from '../../../utils/error-handling/error-handling';

export const createCustomerResolver: MutationResolvers['createCustomer'] = {
    resolve: async (_root, args, _context, _info) => {
        if (
            !args.input.email ||
            !args.input.firstname ||
            !args.input.lastname ||
            !args.input.password
        ) {
            logAndThrowError('Missing email or firstname or lastname or password');
        } else {
            const bcCustomer = await createCustomer(
                args.input.email,
                args.input.firstname,
                args.input.lastname,
                args.input.password
            );

            return {
                customer: transformCustomerData(bcCustomer),
            };
        }
        return null;
    },
};
