import { BcCustomer } from '../types';
import { Customer } from '../../meshrc/.mesh';

export const transformCustomerData = (bcCustomer: BcCustomer): Customer => {
    return {
        id: bcCustomer.id,
        // all data below is to satisfy TS, FE only needs id
        allow_remote_shopping_assistance: true,
        reviews: {
            items: [],
            page_info: {
                current_page: null,
                page_size: null,
                total_pages: null,
            },
        },
        wishlists: [],
        wishlist: {
            visibility: 'PRIVATE',
        },
    };
};
