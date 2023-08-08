import { BC_Customer, Customer } from "../../meshrc/.mesh";
import { BcAddress } from "../types";
import { getTransformedCustomerAddresses } from "./helpers/transform-customer-addresses";

export const transformCustomer = (bcCustomer: BC_Customer, bcAddresses: BcAddress[]): Customer => {
    return {
        addresses: getTransformedCustomerAddresses(bcAddresses),
        email: bcCustomer.email,
        is_subscribed: false,
        wishlists: [
            {
                id: '302',
                sharing_code: '5UpdY',
                items_v2: {
                    items: [],
                },
                visibility: 'PRIVATE',
            },
        ],
        reviews: {
            items: [],
            page_info: {
                current_page: null,
                page_size: null,
                total_pages: null,
            },
        },
        wishlist: {
            visibility: 'PRIVATE',
        },
        allow_remote_shopping_assistance: false,
    };
};

