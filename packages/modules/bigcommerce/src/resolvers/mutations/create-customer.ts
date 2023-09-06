import { Customer, MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { createCustomer } from '../../apis/rest/customer';
import { BcCustomer } from '../../types';
import { logAndThrowError } from '@aligent/utils';
import { transformCustomerForMutation } from '../../factories/transform-customer-data';
import { createSubscriber } from '../../apis/rest/subscriber';

/* istanbul ignore next */
export const createCustomerResolver: MutationResolvers['createCustomer'] = {
    resolve: async (_root, { input: customerInput }, _context, _info) => {
        if (
            !customerInput.email ||
            !customerInput.firstname ||
            !customerInput.lastname ||
            !customerInput.password
        ) {
            return logAndThrowError('Missing email or firstname or lastname or password');
        } else {
            const bcCustomer = await createCustomer(transformCustomerForMutation(customerInput));

            if (customerInput.is_subscribed) {
                await createSubscriber(customerInput.email);
            }

            return {
                customer: transformCustomerData(bcCustomer),
            };
        }
    },
};

export const transformCustomerData = (bcCustomer: BcCustomer): Customer => {
    return {
        id: bcCustomer.id,
        // all data below is to satisfy TS, FE only needs id
        // TODO: Try to reduce typescript object requirements with mappers:
        // https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-resolvers#mappers
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
