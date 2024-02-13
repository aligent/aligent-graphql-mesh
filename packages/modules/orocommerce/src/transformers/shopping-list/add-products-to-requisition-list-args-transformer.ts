import {
    Transformer,
    TransformerContext,
    ChainTransformer,
    logAndThrowError,
} from '@aligent/utils';
import { ShoppingListItemInput } from '../../types';
import { MutationAddProductsToRequisitionListArgs } from '@aligent/orocommerce-resolvers';
import { Injectable } from 'graphql-modules';

@Injectable({
    global: true,
})
export class AddProductsToRequisitionListArgsTransformerChain extends ChainTransformer<
    MutationAddProductsToRequisitionListArgs['requisitionListItems'],
    ShoppingListItemInput[]
> {}

@Injectable()
export class AddProductsToRequisitionListArgsTransformer
    implements
        Transformer<
            MutationAddProductsToRequisitionListArgs['requisitionListItems'],
            ShoppingListItemInput[]
        >
{
    transform(
        context: TransformerContext<
            MutationAddProductsToRequisitionListArgs['requisitionListItems'],
            ShoppingListItemInput[]
        >
    ): ShoppingListItemInput[] {
        const shoppingListItemInput = context.data;
        const transformed = shoppingListItemInput.map((listItem) => {
            if (!listItem.quantity) {
                return logAndThrowError(`No quantity sent for adding item uid: ${listItem.uid}`);
            }
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
            } satisfies ShoppingListItemInput;
        });

        return transformed;
    }
}
