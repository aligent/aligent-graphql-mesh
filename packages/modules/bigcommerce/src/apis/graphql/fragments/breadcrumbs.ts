import { gql } from 'graphql-tag';

export const breadcrumbs = gql`
    fragment Breadcrumbs on BreadcrumbConnection {
        edges {
            node {
                name
                path
                entityId
            }
            cursor
        }
    }
`;
