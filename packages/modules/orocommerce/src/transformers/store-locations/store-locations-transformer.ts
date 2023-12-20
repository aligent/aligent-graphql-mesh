import { ChainTransformer, Transformer, TransformerContext } from '@aligent/utils';
import { OroStoreLocation } from '../../types/store-location';
import { StoreLocation, StoreLocations } from '@aligent/orocommerce-resolvers';
import { Injectable } from 'graphql-modules';

@Injectable({
    global: true
})
export class StoreLocationsTransformerChain extends ChainTransformer<
    OroStoreLocation[],
    StoreLocations
> {}

@Injectable()
export class StoreLocationsTransformer implements Transformer<OroStoreLocation[], StoreLocations> {
    public transform(
        context: TransformerContext<OroStoreLocation[], StoreLocations>
    ): StoreLocations {
        const oroStores = context.data;
        const items: StoreLocation[] =
            oroStores.map((oroStoreLocation: OroStoreLocation): StoreLocation => {
                return this.transformOroStoreLocation(oroStoreLocation);
            }) ?? [];
        return {
            __typename: 'StoreLocations',
            items,
            total_count: items.length,
        };
    }

    private transformOroStoreLocation(oroStoreLocation: OroStoreLocation): StoreLocation {
        const attrs = oroStoreLocation.attributes;
        return {
            __typename: 'StoreLocation',
            name: attrs.name,
            pickup_location_code: attrs.pickup_location_code,
            distance: attrs.distance,
            street: attrs.street,
            city: attrs.city,
            postcode: attrs.postcode,
            phone: attrs.phone,
            latitude: attrs.latitude,
            longitude: attrs.longitude,
            email: attrs.email,
            contact_name: attrs.contact_name,
            country_id: attrs.country_id,
            description: attrs.description,
            fax: attrs.fax,
            region: attrs.region,
            region_id: attrs.region_id,
        };
    }
}
