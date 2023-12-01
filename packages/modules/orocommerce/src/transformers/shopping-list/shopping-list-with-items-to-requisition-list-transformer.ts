import { Transformer, TransformerContext } from '@aligent/utils';
import { ShoppingListWithItems } from '../../types';
import {
    CurrencyEnum,
    Money,
    RequisitionList,
    RequisitionListItemInterface,
} from '@aligent/orocommerce-resolvers';
import { Injectable } from 'graphql-modules';
import { btoa } from '@aligent/utils';
import { ShoppingListToCartTransformer } from '../../transformers';
@Injectable()
export class ShoppingListWithItemsToRequisitionListTransformer
    implements Transformer<ShoppingListWithItems, RequisitionList>
{
    constructor(protected shoppingListToCartTransformer: ShoppingListToCartTransformer) {}
    getMoneyData(currency: string, price: string | number): Money {
        return {
            currency: currency as CurrencyEnum,
            value: Number(price),
        };
    }

    transform(
        context: TransformerContext<ShoppingListWithItems, RequisitionList>
    ): RequisitionList {
        const shoppingList = context.data;

        const shippingListItems =
            this.shoppingListToCartTransformer.getShoppingListItems(shoppingList);
        const items: RequisitionListItemInterface[] = [];
        for (const item of shippingListItems) {
            items.push({
                customizable_options: item.customizable_options,
                quantity: item.quantity,
                uid: item.uid,
                product: item.product,
            });
        }
        return {
            description: shoppingList.data.attributes.notes,
            items: {
                items: items,
                page_info: {
                    current_page: 0,
                    page_size: 0,
                    total_pages: 0,
                },
                total_pages: 0,
            },
            items_count: 0,
            name: shoppingList.data.attributes.name,
            uid: btoa(shoppingList.data.id),
        };
    }
}
