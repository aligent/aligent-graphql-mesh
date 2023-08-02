import { mockUpdateCustomer } from '../mocks/update-customer';

export const updateCustomerResolver = {
    resolve: () => {
        return mockUpdateCustomer;
    },
};
