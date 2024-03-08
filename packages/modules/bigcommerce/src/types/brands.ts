import { Image, Maybe, SeoDetails } from '@aligent/bigcommerce-resolvers';

export type Brand = {
    defaultImage?: Maybe<Image>;
    metafields: { edges: { node: { key: string; value: string } }[] };
    entityId: number;
    id: string;
    name: string;
    path: string;
    searchKeywords: string[];
    seo: SeoDetails;
};

export type BrandNode = {
    node: Brand;
};

export type BrandsEdge = {
    edges: BrandNode[];
};
