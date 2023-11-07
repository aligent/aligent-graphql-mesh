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
        return [
            {
                type: 'shoppinglistitems',
                attributes: {
                    quantity: 1,
                },
                relationships: {
                    product: {
                        data: {
                            type: 'products',
                            id: '8',
                        },
                    },
                    unit: {
                        data: {
                            type: 'productunits',
                            id: 'each',
                        },
                    },
                },
            },
        ];
    }
}
