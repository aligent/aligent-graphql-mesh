import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';

export const channelSocialLinks = stripIgnoredCharacters(
    print(gql`
        query getSocialLinks {
            site {
                settings {
                    socialMediaLinks {
                        name
                        url
                    }
                }
            }
        }
    `)
);
