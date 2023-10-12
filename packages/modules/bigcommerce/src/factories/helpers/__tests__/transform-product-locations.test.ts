import { getTransformProductLocations } from '../transform-product-locations';
import {
    productInventoryLocation,
    transformedProductLocations,
} from './__data__/transform-product-location-data';

describe('transform product locations', () => {
    it(`product locations`, () => {
        expect(getTransformProductLocations(productInventoryLocation)).toEqual(
            transformedProductLocations
        );
    });
});
