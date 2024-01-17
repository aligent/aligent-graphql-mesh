import { Product as OroProduct } from '../../types';
import { ProductStockStatus } from '@aligent/orocommerce-resolvers';

export const getTransformedProductStockStatus = (oroProduct: OroProduct): ProductStockStatus => {
    const stockStatus = oroProduct.relationships.inventoryStatus?.data;
    return stockStatus?.id === 'in_stock' ? 'IN_STOCK' : 'OUT_OF_STOCK';
};

export const getTransformedProductAvailability = (oroProduct: OroProduct): boolean => {
    const stockStatus = oroProduct.relationships.inventoryStatus?.data;
    return stockStatus?.id !== 'discontinued';
};
