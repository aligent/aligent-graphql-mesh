import {
    getTransformedRelatedProduct,
    getTransformedRelatedProducts,
} from '../helpers/transform-related-products';
import { PageInfo, Product } from '@aligent/bigcommerce-operations';
import { mockBcProducts } from '../../resolvers/mocks/products.bc';

const transformedRelatedProduct = [
    {
        categories: [
            {
                breadcrumbs: [
                    {
                        category_id: 54,
                        category_name: 'Hand Tools',
                        category_uid: 'NTQ=',
                    },
                ],
                canonical_url: 'hand-tools',
                children: [],
                children_count: '0',
                description: '',
                id: 54,
                image: undefined,
                include_in_menu: 1,
                level: 2,
                meta_description: '',
                meta_title: '',
                name: 'Hand Tools',
                path: '0/54',
                position: 0,
                product_count: 1,
                redirect_code: 0,
                uid: 'NTQ=',
                url_path: 'hand-tools',
                url_suffix: '',
                staged: false,
                __typename: 'CategoryTree',
            },
            {
                breadcrumbs: [
                    {
                        category_id: 54,
                        category_name: 'Hand Tools',
                        category_uid: 'NTQ=',
                    },
                    {
                        category_id: 55,
                        category_name: 'Striking Tools',
                        category_uid: 'NTU=',
                    },
                ],
                canonical_url: 'hand-tools/striking-tools',
                children: [],
                children_count: '0',
                description: '',
                id: 55,
                image: undefined,
                include_in_menu: 1,
                level: 3,
                meta_description: '',
                meta_title: '',
                name: 'Striking Tools',
                path: '0/55',
                position: 0,
                product_count: 1,
                redirect_code: 0,
                uid: 'NTU=',
                url_path: 'hand-tools/striking-tools',
                url_suffix: '',
                staged: false,
                __typename: 'CategoryTree',
            },
            {
                breadcrumbs: [
                    {
                        category_id: 54,
                        category_name: 'Hand Tools',
                        category_uid: 'NTQ=',
                    },
                    {
                        category_id: 55,
                        category_name: 'Striking Tools',
                        category_uid: 'NTU=',
                    },
                    {
                        category_id: 56,
                        category_name: 'Cold Chisels and Sets',
                        category_uid: 'NTY=',
                    },
                ],
                canonical_url: 'hand-tools/striking-tools/cold-chisels-and-sets',
                children: [],
                children_count: '0',
                description: '',
                id: 56,
                image: undefined,
                include_in_menu: 1,
                level: 4,
                meta_description: '',
                meta_title: '',
                name: 'Cold Chisels and Sets',
                path: '0/56',
                position: 0,
                product_count: 1,
                redirect_code: 0,
                uid: 'NTY=',
                url_path: 'hand-tools/striking-tools/cold-chisels-and-sets',
                url_suffix: '',
                staged: false,
                __typename: 'CategoryTree',
            },
        ],
        configurable_options: [],
        description: {},
        staged: true,
        uid: '10',
        custom_attributes: [],
        id: 491,
        media_gallery_entries: [
            {
                disabled: false,
                file: 'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/500x245/products/491/400/45002-45c_001__86939.1690326868.jpg',
                id: 11656888,
                label: '',
                position: 0,
                uid: '',
            },
        ],
        meta_title: '',
        meta_keyword: '',
        meta_description: '',
        name: 'Rennsteig Individual Parallel Pin Punches - Multiple Sizes',
        only_x_left_in_stock: null,
        price: {
            regularPrice: {
                amount: {
                    currency: 'AUD',
                    value: 10.82,
                },
            },
        },
        price_range: {
            maximum_price: {
                discount: {
                    amount_off: 0,
                    percent_off: 0,
                },
                final_price: {
                    currency: 'AUD',
                    value: 13.55,
                },
                regular_price: {
                    currency: 'AUD',
                    value: 10.82,
                },
            },
            minimum_price: {
                discount: {
                    amount_off: 0,
                    percent_off: 0,
                },
                final_price: {
                    currency: 'AUD',
                    value: 10.82,
                },
                regular_price: {
                    currency: 'AUD',
                    value: 10.82,
                },
            },
        },
        price_tiers: [],
        redirect_code: 0,
        rating_summary: 0,
        review_count: 0,
        related_products: null,
        sku: '45002-45C',
        small_image: {
            label: '',
            url: 'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/500x245/products/491/400/45002-45c_001__86939.1690326868.jpg',
        },
        stock_status: 'OUT_OF_STOCK',
        url_key: 'rennsteig-individual-parallel-pin-punches-multiple-sizes',
        url_suffix: '',
        reviews: {
            items: [],
            page_info: {
                current_page: 0,
                page_size: 0,
                total_pages: 0,
            },
        },
        variants: [],
        __typename: 'SimpleProduct',
    },
];

describe('Transform related product', () => {
    it('Returns "null" if there are no related products', () => {
        const expectedResult = null;

        expect(getTransformedRelatedProduct(null)).toEqual(expectedResult);
    });

    it('Returns "null" if there are no items in related products.edges', () => {
        const expectedResult = null;
        const data = { edges: [], pageInfo: {} as PageInfo };

        expect(getTransformedRelatedProducts(data)).toEqual(expectedResult);
    });

    it('Transforms BC related product data into a structure Take flight is expecting', () => {
        const data = {
            edges: [
                {
                    cursor: 'cursor',
                    node: mockBcProducts[0].relatedProducts.edges[0].node as unknown as Product,
                },
            ],
            pageInfo: {} as PageInfo,
        };

        expect(getTransformedRelatedProducts(data)).toEqual(transformedRelatedProduct);
    });
});
