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
export class AddProductsToCartTransformer
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
                    quantity: 1,
                    checksum: 1,
                    notes: "",
                    currency: "", 
                },
                relationships: {
                    product: {
                        data: {
                            type: 'products',
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
