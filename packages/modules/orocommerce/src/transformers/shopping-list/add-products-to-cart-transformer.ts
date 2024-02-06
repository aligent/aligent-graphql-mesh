import { Transformer, TransformerContext, ChainTransformer } from '@aligent/utils';
import { ShoppingListItemInput } from '../../types';
import { MutationAddProductsToCartArgs, MutationAddProductsToRequisitionListArgs } from '@aligent/orocommerce-resolvers';
import { Injectable } from 'graphql-modules';

@Injectable({
    global: true,
})
export class AddProductsToCartTransformerChain extends ChainTransformer<
    MutationAddProductsToCartArgs['cartItems'] | MutationAddProductsToRequisitionListArgs['requisitionListItems'] ,
    ShoppingListItemInput[]
> {}

@Injectable()
export class AddProductsToCartTransformer
    // implements Transformer<MutationAddProductsToCartArgs['cartItems'], ShoppingListItemInput[]>
    implements Transformer<MutationAddProductsToCartArgs['cartItems'] | MutationAddProductsToRequisitionListArgs['requisitionListItems'] , ShoppingListItemInput[]>
    
    {
    transform(
        context: TransformerContext<
            MutationAddProductsToCartArgs['cartItems']  | MutationAddProductsToRequisitionListArgs['requisitionListItems'] ,
            ShoppingListItemInput[]
        >
    ): ShoppingListItemInput[] {
        const shoppingListItemInput = context.data;
        return shoppingListItemInput.map((listItem) => {
            console.log('uid', listItem.uid)
            return {
                type: 'shoppinglistitems',
                attributes: {
                    quantity: listItem.quantity,
                    checksum: "12",
                    notes: "12",
                    currency: "12",
                    value: "12",

                },
                relationships: {
                    product: {
                        data: {
                            type: 'products',
                            id: "12", 
                        },
                    },
                    unit: {
                        data: {
                            type: 'productunits',
                            id: "12",
                        },
                    },
                    shoppingList: {
                        data: {
                            type: 'shoppinglists',
                            id: "12", 
                        },
                    },
                    // unit: {
                    //     data: {
                    //         // Currently ORO products resolver isnt returning prouductunits
                    //         type: 'productunits',
                    //         id: 'each',
                    //     },
                    // },
                },
            };
        });
    }
}
