import { BC_ProductAvailabilityStatus, ProductStockStatus } from '../../../meshrc/.mesh';

export const getTransformedAvailabilityStatus = (
    availability: {
        status?: BC_ProductAvailabilityStatus;
    } = {}
): ProductStockStatus => {
    if (availability.status === 'Available') return 'IN_STOCK';
    else return 'OUT_OF_STOCK';
};
