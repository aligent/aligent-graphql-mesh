import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';
import { address } from '../fragments/address';

export const getStoreLocationsQuery = stripIgnoredCharacters(
    print(gql`
        ${address}
        query storelocations(
            $countryCodes: [countryCode!]
            $cities: [String!]
            $distanceFilter: DistanceFilter
        ) {
            inventory {
                locations(
                    countryCodes: $countryCodes
                    cities: $cities
                    distanceFilter: $distanceFilter
                ) {
                    edges {
                        node {
                            entityId
                            code
                            label
                            description
                            typeId
                            address {
                                ...InventoryAddress
                            }
                            distance {
                                value
                                lengthUnit
                            }
                            timeZone
                        }
                    }
                }
            }
        }
    `)
);