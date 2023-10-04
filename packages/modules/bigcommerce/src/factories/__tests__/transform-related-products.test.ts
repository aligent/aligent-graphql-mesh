import {
    getTransformedRelatedProduct,
    getTransformedRelatedProducts,
} from '../helpers/transform-related-products';
import { PageInfo, Product } from '@aligent/bigcommerce-operations';
import { mockBcProducts } from '../../resolvers/mocks/products.bc';

const transformedRelatedProduct = [
    {
        __typename: 'SimpleProduct',
        categories: [
            {
                __typename: 'CategoryTree',
                breadcrumbs: [
                    {
                        category_level: 0,
                        category_name: 'Hand Tools',
                        category_uid: '',
                        category_url_key: null,
                        category_url_path: undefined,
                    },
                ],
                children: [],
                children_count: '0',
                description: '',
                id: 54,
                image: undefined,
                include_in_menu: 1,
                meta_description: '',
                meta_title: '',
                name: 'Hand Tools',
                position: 0,
                product_count: 1,
                redirect_code: 0,
                staged: false,
                uid: 'NTQ=',
                url_path: 'hand-tools',
                url_suffix: '',
            },
            {
                __typename: 'CategoryTree',
                breadcrumbs: [
                    {
                        category_level: 0,
                        category_name: 'Hand Tools',
                        category_uid: '',
                        category_url_key: null,
                        category_url_path: undefined,
                    },
                    {
                        category_level: 1,
                        category_name: 'Striking Tools',
                        category_uid: '',
                        category_url_key: null,
                        category_url_path: undefined,
                    },
                ],
                children: [],
                children_count: '0',
                description: '',
                id: 55,
                image: undefined,
                include_in_menu: 1,
                meta_description: '',
                meta_title: '',
                name: 'Striking Tools',
                position: 0,
                product_count: 1,
                redirect_code: 0,
                staged: false,
                uid: 'NTU=',
                url_path: 'hand-tools/striking-tools',
                url_suffix: '',
            },
            {
                __typename: 'CategoryTree',
                breadcrumbs: [
                    {
                        category_level: 0,
                        category_name: 'Hand Tools',
                        category_uid: '',
                        category_url_key: null,
                        category_url_path: undefined,
                    },
                    {
                        category_level: 1,
                        category_name: 'Striking Tools',
                        category_uid: '',
                        category_url_key: null,
                        category_url_path: undefined,
                    },
                    {
                        category_level: 2,
                        category_name: 'Cold Chisels and Sets',
                        category_uid: '',
                        category_url_key: null,
                        category_url_path: undefined,
                    },
                ],
                children: [],
                children_count: '0',
                description: '',
                id: 56,
                image: undefined,
                include_in_menu: 1,
                meta_description: '',
                meta_title: '',
                name: 'Cold Chisels and Sets',
                position: 0,
                product_count: 1,
                redirect_code: 0,
                staged: false,
                uid: 'NTY=',
                url_path: 'hand-tools/striking-tools/cold-chisels-and-sets',
                url_suffix: '',
            },
        ],
        configurable_options: [],
        custom_attributes: [],
        description: { html: undefined },
        id: 491,
        items: [],
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
        meta_description: '',
        meta_keyword: '',
        meta_title: '',
        name: 'Rennsteig Individual Parallel Pin Punches - Multiple Sizes',
        only_x_left_in_stock: null,
        price: { regularPrice: { amount: { currency: 'AUD', value: 10.82 } } },
        price_range: {
            maximum_price: {
                discount: { amount_off: 0, percent_off: 0 },
                final_price: { currency: 'AUD', value: 13.55 },
                regular_price: { currency: 'AUD', value: 10.82 },
            },
            minimum_price: {
                discount: { amount_off: 0, percent_off: 0 },
                final_price: { currency: 'AUD', value: 10.82 },
                regular_price: { currency: 'AUD', value: 10.82 },
            },
        },
        price_tiers: [],
        rating_summary: 0,
        redirect_code: 0,
        related_products: null,
        review_count: 0,
        reviews: { items: [], page_info: { current_page: 0, page_size: 0, total_pages: 0 } },
        sku: '45002-45C',
        small_image: {
            url: 'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/500x245/products/491/400/45002-45c_001__86939.1690326868.jpg',
        },
        staged: true,
        stock_status: 'OUT_OF_STOCK',
        uid: '10',
        url_key: 'rennsteig-individual-parallel-pin-punches-multiple-sizes',
        url_suffix: '',
        variants: [],
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
