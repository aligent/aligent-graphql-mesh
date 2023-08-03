import { BC_ProductAvailability, ProductStockStatus } from '../../../meshrc/.mesh';

export const getTransformedAvailabilityStatus = (
    availabilityV2: BC_ProductAvailability
): ProductStockStatus => {
    if (availabilityV2?.status === 'Available') return 'IN_STOCK';
    else return 'OUT_OF_STOCK';
};
