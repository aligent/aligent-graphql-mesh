import { BrandNode, BrandsEdge } from '../../types/brands';
import { Brand } from '@aligent/bigcommerce-resolvers';

export const transformMetafields = (
    metaFields: { node: { key: string; value: string } }[] = []
) => {
    const transformedMetafields = metaFields.reduce(
        (carry, metafield) => {
            const { key, value } = metafield.node;
            return [...carry, { name: key, value }];
        },
        [] as { name: string; value: string }[]
    );

    return transformedMetafields;
};

export const transformBrand = (brand: BrandNode): Brand => {
    const metafields = transformMetafields(brand.node?.metafields?.edges);

    return { ...brand.node, metafields };
};

export const transformBrands = (brands: BrandsEdge): Brand[] => {
    if (!brands?.edges?.length) return [];

    return brands.edges.map((brand) => transformBrand(brand));
};
