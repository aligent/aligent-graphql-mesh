import { Customer } from '../../meshrc/.mesh';
import { BcAddressRest } from '../types';
import { getTransformedCustomerAddresses } from './helpers/transform-customer-addresses';
import { BC_Customer } from '@mesh/external/BigCommerceGraphqlApi';
import { getTransformedWishlists } from './helpers/transform-wishlists';

export const transformCustomer = (
    bcCustomer: BC_Customer,
    bcAddresses: BcAddressRest[],
    isSubscriber: boolean
): Customer => {
    const { firstName, lastName, email } = bcCustomer;
    return {
        addresses: getTransformedCustomerAddresses(bcAddresses),
        email,
        firstname: firstName,
        lastname: lastName,
        is_subscribed: isSubscriber,
        allow_remote_shopping_assistance: false, // Cant see equivalent BC value
        wishlists: getTransformedWishlists(bcCustomer.wishlists),
        wishlist: {
            // Types say wishlist is deprecated, but is required and needs to have visibility
            visibility: 'PUBLIC',
        },
        reviews: { // Types require this be here
            items: [],
            page_info: {
                current_page: null,
                page_size: null,
                total_pages: null,
            },
        },
    };
};
