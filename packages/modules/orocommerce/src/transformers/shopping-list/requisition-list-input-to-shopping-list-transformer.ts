import { Transformer, TransformerContext } from '@aligent/utils';
import { ShoppingList, ShoppingListInputAttribute } from '../../types';
import { CreateRequisitionListInput } from '@aligent/orocommerce-resolvers';
import { Injectable } from 'graphql-modules';

@Injectable()
export class RequisitionListInputToShoppingListTransformer
    implements Transformer<CreateRequisitionListInput, ShoppingList>
{
    transform(context: TransformerContext<CreateRequisitionListInput, ShoppingList>): ShoppingList {
        const attrs: ShoppingListInputAttribute = {
            name: context.data.name,
            default: false,
            notes: context.data.description || '',
        };
        return {
            type: 'shoppinglists',
            id: '1',
            attributes: attrs,
            relationships: { items: { data: [] } },
        };
    }
}
