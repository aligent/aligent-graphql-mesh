import { Transformer, TransformerContext } from '@aligent/utils';
import { ShoppingList, ShoppingListInputAttribute } from '../../types';
import {
    CreateRequisitionListInput,
    UpdateRequisitionListInput,
} from '@aligent/orocommerce-resolvers';
import { Injectable } from 'graphql-modules';

@Injectable()
export class RequisitionListInputToShoppingListTransformer
    implements Transformer<CreateRequisitionListInput | UpdateRequisitionListInput, ShoppingList>
{
    transform(
        context: TransformerContext<
            CreateRequisitionListInput | UpdateRequisitionListInput,
            ShoppingList
        >
    ): ShoppingList {
        const attrs: ShoppingListInputAttribute = {
            name: context.data.name,
            default: false, // If we’re keeping cart + requisition lists separate (even though both are shopping lists in Oro) then I’d probably have cart be the "default" and everything else be shopping lists. That will give the mesh a way to filter.
            notes: context.data.description || '',
        };
        return {
            type: 'shoppinglists',
            id: '1', // If it’s just being used on a POST to create a shopping list then I believe it will be ignored.
            attributes: attrs,
            relationships: { items: { data: [] } },
        };
    }
}
