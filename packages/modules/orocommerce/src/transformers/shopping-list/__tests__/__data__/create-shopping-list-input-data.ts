import { ShoppingList } from '../../../../types';
import { CreateRequisitionListInput } from '@aligent/orocommerce-resolvers';

export const shoppingList: ShoppingList = {
    id: '1',
    type: 'shoppinglists',
    attributes: {
        name: 'Name1',
        notes: 'description',
        default: false,
    },
    relationships: {
        items: {
            data: [],
        },
    },
};

export const createRequisitionListInput: CreateRequisitionListInput = {
    description: 'description',
    name: 'Name1',
};
