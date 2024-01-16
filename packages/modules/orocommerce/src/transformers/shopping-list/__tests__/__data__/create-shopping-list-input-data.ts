import { ShoppingList, ShoppingListWithItems } from '../../../../types';
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

export const shoppingListWithItems: ShoppingListWithItems = {
    data: {
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
    },
    included: [
        {
            id: '1',
            type: 'shoppinglistitems',
            attributes: {
                quantity: 2,
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
    ],
};

export const createRequisitionListInput: CreateRequisitionListInput = {
    description: 'description',
    name: 'Name1',
};
