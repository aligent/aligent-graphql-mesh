import { mockChangeCustomerPassword } from "../mocks/change-customer-password";

export const changeCustomerPasswordResolver = {
    resolve: () => {
        return mockChangeCustomerPassword;
    },
};
