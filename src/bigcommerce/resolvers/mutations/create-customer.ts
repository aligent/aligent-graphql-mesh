import { MutationResolvers } from '../../../meshrc/.mesh';
import { createAcReadyCustomer } from '../../factories/transform-customers-data';
import { createCustomer } from '../requests/bc-rest-calls';

export const createCustomerResolver: MutationResolvers['createCustomer'] = {
    resolve: async (_root, args, _context, _info) => {
        if (
            !args.input.email ||
            !args.input.firstname ||
            !args.input.lastname ||
            !args.input.password
        ) {
            throw new Error('Missing email or firstname or lastname or password');
        }

        const bcCustomer = await createCustomer(
            args.input.email,
            args.input.firstname,
            args.input.lastname,
            args.input.password
        );

        return {
            customer: createAcReadyCustomer(bcCustomer),
        };
    },
};
