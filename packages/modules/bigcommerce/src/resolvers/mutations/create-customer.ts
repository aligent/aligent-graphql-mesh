import { Customer, MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { BcCustomer } from '../../types';
import { logAndThrowError } from '@aligent/utils';
import { createSubscriber } from '../../apis/rest/subscriber';
import { getTransformedCreateCustomerData } from '../../factories/transform-customer-data';
import { createCustomer } from '../../apis/graphql';
import { retrieveCustomerImpersonationTokenFromCache } from '../../apis/rest';

/* istanbul ignore next */
export const createCustomerResolver: MutationResolvers['createCustomer'] = {
    resolve: async (_root, args, context, _info) => {
        const { email, firstname, lastname, password } = args.input;

        console.log('start');

        // if (!email || !firstname || !lastname || !password) {
        //     return logAndThrowError('Did not receive email or firstname or lastname or password');
        // }

        // const transformedCreateCustomerData = getTransformedCreateCustomerData(
        //     email,
        //     firstname,
        //     lastname,
        //     password
        // );

        const customerImpersonationToken =
            await retrieveCustomerImpersonationTokenFromCache(context);

        const bcCustomer = await createCustomer(
            'mesh',
            'new',
            'jack.mcloughlin+resolver@aligent.com.au',
            'lSJf666cYpkU^q',
            customerImpersonationToken
        );

        // if (args.input.is_subscribed) {
        //     await createSubscriber(transformedCreateCustomerData.email as string);
        // }

        return {
            customer: {
                id: 3333,
                // all data below is to satisfy TS, FE only needs id
                // TODO: Try to reduce typescript object requirements with mappers:
                // https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-resolvers#mappers
                allow_remote_shopping_assistance: null, // This is being forced to show the PWA that BC doesnt have this feature
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
            },
        };
    },
};

export const transformCustomerData = (bcCustomer: BcCustomer): Customer => {
    return {
        id: bcCustomer.id,
        // all data below is to satisfy TS, FE only needs id
        // TODO: Try to reduce typescript object requirements with mappers:
        // https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-resolvers#mappers
        allow_remote_shopping_assistance: null, // This is being forced to show the PWA that BC doesnt have this feature
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
