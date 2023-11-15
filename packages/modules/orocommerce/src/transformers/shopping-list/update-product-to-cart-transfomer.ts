import { Transformer, TransformerContext, ChainTransformer } from '@aligent/utils';
import { UpdateShoppingListItem } from '../../types';
import { Injectable } from 'graphql-modules';

@Injectable()
export class UpdateProductToCartTransformerChain extends ChainTransformer<
    { quantity: number; cartItemId: string },
    UpdateShoppingListItem
> {}

@Injectable()
export class UpdateProductToCartTransformer
    implements Transformer<{ quantity: number; cartItemId: string }, UpdateShoppingListItem>
{
    transform(
        context: TransformerContext<
            { quantity: number; cartItemId: string },
            UpdateShoppingListItem
        >
    ): UpdateShoppingListItem {
        return {
            type: 'shoppinglistitems',
            id: context.data.cartItemId,
            attributes: {
                quantity: context.data.quantity,
            },
        };
    }
}
