import { gql } from 'graphql-tag';

export const image = gql`
    fragment Image on Image {
        url(width: 500, height: 245)
        urlOriginal
        altText
        isDefault
    }
`;
