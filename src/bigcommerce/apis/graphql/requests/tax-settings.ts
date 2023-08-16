import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';

export const taxSettings = stripIgnoredCharacters(
    print(gql`
        query taxSettings {
            site {
                settings {
                    tax {
                        pdp
                        plp
                    }
                }
            }
        }
    `)
);
