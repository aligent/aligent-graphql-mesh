import { Transformer, TransformerContext, ChainTransformer } from '@aligent/utils';
import { ShoppingListItem } from '../../types';
import { Injectable } from 'graphql-modules';

@Injectable()
export class UpdateCartItemTransformerChain extends ChainTransformer<
    { quantity: number; cartItemId: string },
    ShoppingListItem
> {}

@Injectable()
export class UpdateCartItemTransformer
    implements Transformer<{ quantity: number; cartItemId: string }, ShoppingListItem>
{
    transform(
        context: TransformerContext<{ quantity: number; cartItemId: string }, ShoppingListItem>
    ): ShoppingListItem {
        return {
            type: 'shoppinglistitems',
            id: context.data.cartItemId,
            attributes: {
                quantity: context.data.quantity,
            },
        };
    }
}
