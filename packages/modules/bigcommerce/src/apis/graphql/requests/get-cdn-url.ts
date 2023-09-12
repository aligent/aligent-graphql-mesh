import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';

export const cdnUrl = stripIgnoredCharacters(
    print(gql`
        query cdnUrl {
            site {
                settings {
                    url {
                        cdnUrl
                    }
                }
            }
        }
    `)
);
