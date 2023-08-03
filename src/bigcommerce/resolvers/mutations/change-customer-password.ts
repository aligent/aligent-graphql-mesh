import { Customer, MutationResolvers } from "../../../meshrc/.mesh";
import { CustomContext } from "../../types";
import { mockChangeCustomerPassword } from "../mocks/change-customer-password";

export const changeCustomerPasswordResolver: MutationResolvers<CustomContext>['changeCustomerPassword']= {
    resolve: (_root, _args, _context, _info) => {
        return (mockChangeCustomerPassword as unknown) as Customer;
    },
};
