import { getTransformedProductData } from '../transform-products-data';
import {
    BC_RelatedProductsConnection,
    BC_RelatedProductsEdge,
} from '@mesh/external/BigCommerceGraphqlApi';
import { Maybe, ProductInterface } from '@mesh';

export const getTransformedRelatedProduct = (
    relatedProduct: Maybe<BC_RelatedProductsEdge>
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
    relatedProducts: BC_RelatedProductsConnection
): Maybe<Array<Maybe<ProductInterface>>> => {
    if (!relatedProducts?.edges || relatedProducts?.edges.length === 0) return null;

    return relatedProducts.edges.map((relatedProduct) => {
        return getTransformedRelatedProduct(relatedProduct);
    });
};
