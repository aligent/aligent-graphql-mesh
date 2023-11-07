import { Transformer, TransformerContext, ChainTransformer } from '@aligent/utils';
import { ShoppingListItemInput } from '../../types';
import { MutationAddProductsToCartArgs } from '@aligent/orocommerce-resolvers';
import { Injectable } from 'graphql-modules';

@Injectable()
export class AddProductsToCartTransformerChain extends ChainTransformer<
    MutationAddProductsToCartArgs['cartItems'],
    ShoppingListItemInput[]
> {}

@Injectable()
export class AddProductsToCartTransformer
    implements Transformer<MutationAddProductsToCartArgs['cartItems'], ShoppingListItemInput[]>
{
    transform(
        context: TransformerContext<
            MutationAddProductsToCartArgs['cartItems'],
            ShoppingListItemInput[]
        >
    ): ShoppingListItemInput[] {
        const shoppingListItemInput = context.data;
        return shoppingListItemInput.map((listItem) => {
            return {
                type: 'shoppinglistitems',
                attributes: {
                    quantity: listItem.quantity,
                },
                relationships: {
                    product: {
                        data: {
                            type: 'products',
                            id: atob(String(listItem.uid || '')).replace('Product:', ''),
                        },
                    },
                    unit: {
                        data: {
                            // Currently ORO products resolver isnt returning prouductunits
                            type: 'productunits',
                            id: 'each',
                        },
                    },
                },
            };
        });
    }
}
