import { CheckoutSources } from '@aligent/orocommerce-graphql-module';

/**
 * Finds the active (deleted: false) checkout sources belonging to a
 * shopping list id
 *
 * @param checkoutSources
 * @param shoppingListId
 */
export const getActiveCheckoutSourcesFromShoppingListId = (
    checkoutSources: CheckoutSources,
    shoppingListId: number
): CheckoutSources => {
    if (checkoutSources?.length === 0) return [];

    return checkoutSources.filter((source) => {
        const { attributes, relationships } = source;

        const isDeleted = attributes.deleted;
        const sourceId = relationships?.shoppingList?.data.id;

        return Number(sourceId) === shoppingListId && !isDeleted;
    });
};
