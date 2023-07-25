import { mockCustomer } from '../mocks/customer';

export const customerResolver = {
    resolve: () => {
        return mockCustomer;
    },
};
