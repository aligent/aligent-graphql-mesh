import { BC_Customer, Customer, QueryResolvers } from '../../../meshrc/.mesh';
import { getDecodedMeshToken } from '../../../utils/tokens';
import { logAndThrowError } from '../../../utils/error-handling';
import { getBcCustomer } from '../../apis/graphql/customer';
/* istanbul ignore next */
export const customerResolver: QueryResolvers['customer'] = {
    resolve: async (_root, _args, context, _info) => {
        const customerImpersonationToken = await context.cache.get('customerImpersonationToken');

        if (context.headers['mesh-token']) {
            const { bc_customer_id } = getDecodedMeshToken(context.headers['mesh-token']);
            const bcCustomer = await getBcCustomer(customerImpersonationToken, bc_customer_id);
            //Sample for using the cust imp token with the bc user id from mesh-token

            return transformCustomer(bcCustomer);
        } else {
            return logAndThrowError(new Error(`Failed to send mesh-token`));
        }
    },
};

export const transformCustomer = (bcCustomer: BC_Customer): Customer => {
    return {
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

// query getCustomer($isWishlistEnabled: Boolean!) {
//     customer {
//         addresses {
//             id
//             firstname
//             lastname
//             company
//             street
//             city
//             region {
//                 region_code
//                 region_id
//                 region
//             }
//             postcode
//             country_code
//             telephone
//             default_billing
//             default_shipping
//         }
//         firstname
//         lastname
//         email
//         is_subscribed
//         wishlists @include(if: $isWishlistEnabled) {
//             ...Wishlist
//         }
//         allow_remote_shopping_assistance
//     }
// }"
