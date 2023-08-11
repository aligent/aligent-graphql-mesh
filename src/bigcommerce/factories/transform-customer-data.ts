import { Customer } from '../../meshrc/.mesh';
import { BcAddressRest } from '../types';
import { getTransformedCustomerAddresses } from './helpers/transform-customer-addresses';
import { BC_Customer } from '@mesh/external/BigCommerceGraphqlApi';

export const transformCustomer = (bcCustomer: BC_Customer, bcAddresses: BcAddressRest[]): Customer => {
    const { firstName, lastName, email } = bcCustomer;

    return {
        addresses: getTransformedCustomerAddresses(bcAddresses),
        email,
        firstname: firstName,
        lastname: lastName,
        is_subscribed: false, // BC SF api doesnt have this, may need to get from https://api.bigcommerce.com/stores/{store_hash}/v3/customers/subscribers
        allow_remote_shopping_assistance: false,
        // wishlists: getTransformedWishlists(bcCustomer.wishlists),
        wishlist: {
            visibility: 'PRIVATE',
        },
        // TF does new need reviews
        reviews: {
            items: [],
            page_info: {
                current_page: null,
                page_size: null,
                total_pages: null,
            },
        },
    };
};
