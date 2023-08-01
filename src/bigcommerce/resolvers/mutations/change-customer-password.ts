import { MutationResolvers } from "../../../meshrc/.mesh";
import { mockChangeCustomerPassword } from "../mocks/change-customer-password";

export const changeCustomerPasswordResolver: MutationResolvers['changeCustomerPassword']= {
    resolve: (_root, _args, _context, _info) => {
        return mockChangeCustomerPassword;
    },
};
