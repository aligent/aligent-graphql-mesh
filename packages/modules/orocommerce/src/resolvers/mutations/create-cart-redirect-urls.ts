import { GraphQLError } from 'graphql';
import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { CheckoutSourcesClient } from '../../apis/rest';
import { getActiveCheckoutSourcesFromShoppingListId } from '../../utils';

const SUCCESS_RESPONSE = {
    data: {
        cart_url: '',
        checkout_url: '/checkout',
        embedded_checkout_url: '',
    },
};

const getCreateCheckoutSourceError = (shoppingListId: number) => {
    return `Could not create a checkout source for shopping list id "${shoppingListId}"`;
};

export const createCartRedirectUrlsResolver: MutationResolvers['createCartRedirectUrls'] = {
    resolve: async (_root, args, context, _info) => {
        const shoppingListId = Number(args.cartId);
        if (isNaN(shoppingListId)) {
            throw new GraphQLError('The "cartId" input is not a number');
        }
        const checkoutSourcesClient: CheckoutSourcesClient =
            context.injector.get(CheckoutSourcesClient);

        /* @todo BE OTF-126 need to provide option to filter out orders which are soft deleted. This is shown
         *  by the "deleted: true" property on a checkout source object  */
        const checkoutSources = await checkoutSourcesClient.getCheckoutSources({
            'filter[shoppingList]': shoppingListId,
            sort: '-id', // Order from the most recently created shopping list id's
        });

        /* A shopping list can have multiple checkout sources so lets find the active ones */
        const matchingCheckoutSources = getActiveCheckoutSourcesFromShoppingListId(
            checkoutSources,
            shoppingListId
        );

        /* If an active checkout source exists we're safe to tell the PWA it can redirect to the checkout
         * by returning the checkout_url  */
        if (matchingCheckoutSources.length > 0) {
            return SUCCESS_RESPONSE;
        }

        /* If no checkout source can be found, create one for the shopping list id passed in*/
        try {
            const createdCheckoutSource = await checkoutSourcesClient.createCheckoutSource({
                shoppingList: shoppingListId,
            });

            if (!createdCheckoutSource?.id) {
                throw new GraphQLError(getCreateCheckoutSourceError(shoppingListId));
            }

            /* Once a checkout source is successfully created, tell the PWA it can redirect to the checkout
             * by returning the checkout_url  */
            return SUCCESS_RESPONSE;
        } catch (e) {
            throw new GraphQLError(getCreateCheckoutSourceError(shoppingListId));
        }
    },
};
