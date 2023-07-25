import { mockExportCustomerToken } from '../mocks/generate-customer-token';

export const generateCustomerTokenResolver = {
    resolve: () => {
        return mockExportCustomerToken;
    },
};
