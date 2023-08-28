import { ProductAvailabilityStatus } from '@aligent/bigcommerce-operations';
import { ProductStockStatus } from '@aligent/bigcommerce-resolvers';

export const getTransformedAvailabilityStatus = (
    availability: {
        status?: ProductAvailabilityStatus;
    } = {}
): ProductStockStatus => {
    if (availability.status === 'Available') return 'IN_STOCK';
    else return 'OUT_OF_STOCK';
};
