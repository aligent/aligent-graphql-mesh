import { getTransformedProductData } from '../transform-products-data';
import { RelatedProductsConnection, RelatedProductsEdge } from '@aligent/bigcommerce-operations';
import { Maybe, ProductInterface } from '@aligent/bigcommerce-resolvers';

export const getTransformedRelatedProduct = (
    relatedProduct: Maybe<RelatedProductsEdge>
): Maybe<ProductInterface> => {
    if (!relatedProduct) return null;

    return getTransformedProductData({
        ...relatedProduct.node,
        reviews: {
            edges: [],
            pageInfo: {
                hasNextPage: false,
                hasPreviousPage: false,
                endCursor: null,
                startCursor: null,
            },
        },
    });
};

export const getTransformedRelatedProducts = (
    relatedProducts: RelatedProductsConnection
): Maybe<Array<Maybe<ProductInterface>>> => {
    if (!relatedProducts?.edges || relatedProducts?.edges.length === 0) return null;

    return relatedProducts.edges.map((relatedProduct) => {
        return getTransformedRelatedProduct(relatedProduct);
    });
};
