import { CustomerUser } from '../../types/customer-user';

export const getTransformedCreateCustomerData = (
    email: string,
    firstname: string,
    lastname: string,
    password: string
): CustomerUser => {
    const transformedCustomer: CustomerUser = {
        id: '0',
        type: 'customerusers',
        attributes: {
            email,
            firstName: firstname,
            lastName: lastname,
            password,
        },
    };

    return transformedCustomer;
};
