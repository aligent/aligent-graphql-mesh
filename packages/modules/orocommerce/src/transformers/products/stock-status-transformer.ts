import { Product as OroProduct } from '../../types';
import { ProductStockStatus } from '@aligent/orocommerce-resolvers';

export const getTransformedProductStockStatus = (oroProduct: OroProduct): ProductStockStatus => {
    const stockStatus = oroProduct.relationships.inventoryStatus?.data;
    return stockStatus?.id === 'out_of_stock' ? 'OUT_OF_STOCK' : 'IN_STOCK';
};

export const getTransformedProductAvailability = (oroProduct: OroProduct): boolean => {
    const stockStatus = oroProduct.relationships.inventoryStatus?.data;
    return stockStatus?.id !== 'discontinued';
};
