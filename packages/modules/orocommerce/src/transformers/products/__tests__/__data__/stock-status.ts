import { InventoryStatus } from '../../../../types';

export const oroInStock: InventoryStatus = {
    type: 'productinventorystatuses',
    id: 'in_stock',
    attributes: {
        name: 'In Stock',
    },
};

export const oroOutOfStock: InventoryStatus = {
    type: 'productinventorystatuses',
    id: 'out_of_stock',
    attributes: {
        name: 'Out of stock',
    },
};

export const oroDiscontinued: InventoryStatus = {
    type: 'productinventorystatuses',
    id: 'discontinued',
    attributes: {
        name: 'Discontinued',
    },
};
