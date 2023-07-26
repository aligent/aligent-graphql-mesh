export const breadcrumbs = `
    fragment Breadcrumbs on BreadcrumbConnection {
        edges {
            node {
                name
                entityId
            }
        }
    }
`;
