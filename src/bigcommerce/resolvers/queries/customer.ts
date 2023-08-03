import { QueryResolvers } from '../../../meshrc/.mesh';
import { getDecodedMeshToken } from '../../../utils/tokens';
import { logAndThrowError } from '../error-handling';
import { getBcCustomer } from '../requests/bc-graphql-calls';

export const customerResolver: QueryResolvers['customer'] = {
    resolve: async (_root, _args, context, _info) => {
        const customerImpersonationToken = await context.cache.get('customerImpersonationToken');

        if (context.headers['mesh-token']) {
            const { bc_customer_id } = getDecodedMeshToken(context.headers['mesh-token']);
            const customer = await getBcCustomer(customerImpersonationToken, bc_customer_id);
            //Sample for using the cust imp token with the bc user id from mesh-token

            return {
                email: customer.email,
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
        } else {
            return logAndThrowError(new Error(`Failed to send mesh-token`));
        }
    },
};
