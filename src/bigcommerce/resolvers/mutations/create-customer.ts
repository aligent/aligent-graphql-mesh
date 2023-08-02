import { mockCreateCustomer } from '../mocks/create-customer';

export const createCustomerResolver = {
    resolve: () => {
        return mockCreateCustomer;
    },
};
