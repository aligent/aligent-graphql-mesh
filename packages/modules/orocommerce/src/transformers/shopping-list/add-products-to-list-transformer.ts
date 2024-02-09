import { Transformer, TransformerContext, ChainTransformer } from '@aligent/utils';
import { ShoppingListItemInput } from '../../types';
import { MutationAddProductsToRequisitionListArgs } from '@aligent/orocommerce-resolvers';
import { Injectable } from 'graphql-modules';

@Injectable({
    global: true,
})
export class AddProductsToListTransformerChain extends ChainTransformer<
MutationAddProductsToRequisitionListArgs['requisitionListItems'],
    ShoppingListItemInput[]
> {}

@Injectable()
export class AddProductsToListTransformer
    implements Transformer<MutationAddProductsToRequisitionListArgs['requisitionListItems'], ShoppingListItemInput[]>
{
    transform(
        context: TransformerContext<
        MutationAddProductsToRequisitionListArgs['requisitionListItems'],
            ShoppingListItemInput[]
        >
    ): ShoppingListItemInput[] {
        const shoppingListItemInput = context.data;
        const transformed =  shoppingListItemInput.map((listItem) => {
            return {
                type: 'shoppinglistitems',
                attributes: {
                    quantity: listItem.quantity,

                },
                relationships: {
                    product: {
                        data: {
                            type: 'products',
                            sku:listItem.sku, //atob(listItem.uid || '')
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
        return transformed as ShoppingListItemInput[]
    }
}
