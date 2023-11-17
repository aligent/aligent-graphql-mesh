import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { CheckoutsClient, CheckoutSourcesClient } from '../apis/rest';
import { getActiveCheckoutSourcesFromShoppingListId } from '../utils';

@Injectable()
export class CheckoutService {
    constructor(
        @Inject(forwardRef(() => CheckoutSourcesClient))
        protected readonly checkoutSourcesClient: CheckoutSourcesClient,

        @Inject(forwardRef(() => CheckoutsClient))
        protected readonly checkoutsClient: CheckoutsClient
    ) {}

    /**
     * Gets and returns a checkout for a shopping list. If not checkout instance exists for
     * a shopping list then a new one gets created.
     *
     * @param shoppingListId
     */
    async getCheckout(shoppingListId: number) {
        /* @todo BE OTF-126 need to provide option to filter out orders which are soft deleted. This is shown
         *  by the "deleted: true" property on a checkout source object  */
        const checkoutSources = await this.checkoutSourcesClient.getCheckoutSources({
            'filter[shoppingList]': shoppingListId,
            sort: '-id', // Order from the most recently created shopping list id's
        });

        /* @todo A shopping list can have multiple checkout sources so lets find the active ones.
         * This check can be removed once OTF-126 is complete*/
        const activeCheckoutSources = getActiveCheckoutSourcesFromShoppingListId(
            checkoutSources,
            shoppingListId
        );

        let checkoutSourceId = Number(activeCheckoutSources?.[0]?.id);

        /* If there's no checkout source create a new one and follow up by creating a corresponding
         * checkout */
        if (!checkoutSourceId) {
            const createdCheckoutSource = await this.checkoutSourcesClient.createCheckoutSource({
                shoppingList: shoppingListId,
            });

            const newCheckoutSourceId = createdCheckoutSource?.id;

            if (!newCheckoutSourceId) {
                throw new Error('Could not create checkoutSource');
            }

            const newCheckout = await this.checkoutsClient.createCheckouts({
                source: newCheckoutSourceId,
            });

            checkoutSourceId = Number(newCheckout.source);
        }

        const correspondingCheckouts = await this.checkoutsClient.getCheckouts({
            'filter[source]': checkoutSourceId,
        });

        return correspondingCheckouts[0];
    }
}
