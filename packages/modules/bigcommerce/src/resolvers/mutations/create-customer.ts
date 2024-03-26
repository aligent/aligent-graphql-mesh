import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { logAndThrowError } from '@aligent/utils';
import { createSubscriber } from '../../apis/rest/subscriber';
import { transformAcCustomerInputToBcCustomerInput } from '../../factories/transform-customer-data';
import { createCustomer } from '../../apis/graphql';
import { retrieveCustomerImpersonationTokenFromCache } from '../../apis/rest';

/* istanbul ignore next */
export const createCustomerResolver: MutationResolvers['createCustomer'] = {
    resolve: async (_root, args, context, _info) => {
        const { email, firstname, lastname, password } = args.input;

        if (!email || !firstname || !lastname || !password) {
            return logAndThrowError('Did not receive email or firstname or lastname or password');
        }

        const transformedCreateCustomerData = transformAcCustomerInputToBcCustomerInput(
            firstname,
            lastname,
            email,
            password
        );

        const customerImpersonationToken =
            await retrieveCustomerImpersonationTokenFromCache(context);

        const bcCustomer = await createCustomer(
            transformedCreateCustomerData,
            customerImpersonationToken
        );

        if (args.input.is_subscribed) {
            await createSubscriber(transformedCreateCustomerData.email);
        }

        return {
            customer: {
                id: bcCustomer.customer.entityId,
                firstname: bcCustomer.customer.firstName,
                lastname: bcCustomer.customer.lastName,
                email: bcCustomer.customer.email,
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
