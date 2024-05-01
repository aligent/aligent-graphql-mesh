import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';

export const getStoreAvailabilityQuery = stripIgnoredCharacters(
    print(gql`
        query getStoreAvailability($sku: String!, $distanceFilter: DistanceFilter) {
            site {
                product(sku: $sku) {
                    variants {
                        edges {
                            node {
                                inventory {
                                    byLocation(distanceFilter: $distanceFilter) {
                                        edges {
                                            node {
                                                locationEntityId
                                                availableToSell
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `)
);
