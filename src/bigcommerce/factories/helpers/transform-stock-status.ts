import { BC_ProductAvailabilityStatus } from '@mesh/external/BigCommerceGraphqlApi';
import { ProductStockStatus } from '@mesh';

export const getTransformedAvailabilityStatus = (
    availability: {
        status?: BC_ProductAvailabilityStatus;
    } = {}
): ProductStockStatus => {
    if (availability.status === 'Available') return 'IN_STOCK';
    else return 'OUT_OF_STOCK';
};
