import { createAcReadyCustomer } from '../../factories/transform-customers-data';
import { mockCreateCustomer } from '../mocks/create-customer';
import { createCustomer } from '../requests/bc-rest-calls';

export const createCustomerResolver = {
    resolve: async (_root, args, _context, _info) => {
        console.log(args);

        const bcCustomer = await createCustomer(
            args.input.email,
            args.input.firstname,
            args.input.lastname,
            args.input.password
        );

        return createAcReadyCustomer(bcCustomer);
    },
};
