import { Transformer, TransformerContext } from '@aligent/utils';
import { ShoppingListAttribute, ShoppingListWithItems } from '../../types';
import { btoa } from '@aligent/utils';
import { ShoppingListToCartTransformer } from '../../transformers';
import { isNull } from 'lodash';
import { Injectable } from 'graphql-modules';
import { CurrencyEnum, RequisitionList } from '@aligent/orocommerce-resolvers';

@Injectable({
    global: true,
})
export class ShoppingListWithItemsToRequisitionListTransformer
    implements Transformer<ShoppingListWithItems, RequisitionList>
{
    constructor(protected shoppingListToCartTransformer: ShoppingListToCartTransformer) {}

    transform(
        context: TransformerContext<ShoppingListWithItems, RequisitionList>
    ): RequisitionList {
        const shoppingList = context.data;
        const { customerUser, customer } = shoppingList.data.relationships;
        const { createdAt, name, notes, currency, subTotal, total, updatedAt } = shoppingList.data
            .attributes as ShoppingListAttribute;
        const items = this.transformItems(shoppingList);

        const subTotal_price = {
            currency: currency as CurrencyEnum,
            value: Number(subTotal),
        };

        const total_price = {
            currency: currency as CurrencyEnum,
            value: Number(total),
        };

        return {
            description: notes,
            items: {
                items: items,
                // This will be implemented in OTF-190 with filtering
                page_info: {
                    current_page: 1,
                    page_size: 1,
                    total_pages: 20,
                },
                total_pages: 1,
            },
            items_count: items.length,
            name,
            default: shoppingList.data.attributes.default,
            uid: btoa(shoppingList.data.id),
            updated_at: updatedAt,
            created_at: createdAt,
            currency,
            sub_total: subTotal_price,
            total: total_price,
            customer: Number(customer?.data.id),
            company_user: Number(customerUser?.data.id),
        };
    }

    transformItems(shoppingListWithItems: ShoppingListWithItems) {
        const cart = this.shoppingListToCartTransformer.transform({ data: shoppingListWithItems });
        const items = [];
        if (cart.items) {
            for (const item of cart.items) {
                if (isNull(item)) {
                    continue;
                }
                items.push({
                    __typename: item.product.__typename
                        ? this.getTypeName(item.product.__typename)
                        : 'SimpleRequisitionListItem',
                    customizable_options: item.customizable_options,
                    quantity: item.quantity,
                    uid: item.uid,
                    product: item.product,
                    notes: shoppingListWithItems.data.attributes.notes,
                });
            }
        }
        return items;
    }

    // This isnt an ideal solution and only covers two use cases
    // If we ever need other product and requisition list types this needs to be updated
    getTypeName(typeName: string): 'ConfigurableRequisitionListItem' | 'SimpleRequisitionListItem' {
        if (typeName === 'SimpleProduct') {
            return 'SimpleRequisitionListItem';
        } else {
            return 'ConfigurableRequisitionListItem';
        }
    }
}
