import { mockBcProducts } from '../../../resolvers/mocks/products.bc';
import { getTransformedVariants } from '../transform-variants';
import { BC_PageInfo, BC_VariantConnection } from '@mesh/external/BigCommerceGraphqlApi';

const expectResult = [
    {
        attributes: [
            { code: 'color', label: 'Green', value_index: 182, uid: 'MTgy' },
            { code: 'size', label: 'S', value_index: 184, uid: 'MTg0' },
        ],
        product: {
            custom_attributes: [],
            id: 513,
            media_gallery_entries: [
                {
                    disabled: false,
                    file: 'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/500x245/attribute_rule_images/54_source_1690452039.jpg',
                    id: 1690452856,
                    label: '',
                    position: 0,
                    uid: '',
                },
            ],
            price_range: {
                maximum_price: {
                    discount: { amount_off: null, percent_off: null },
                    final_price: { currency: 'AUD', value: 27.27 },
                    regular_price: { currency: 'AUD', value: 27.27 },
                },
                minimum_price: {
                    discount: { amount_off: null, percent_off: null },
                    final_price: { currency: 'AUD', value: 27.27 },
                    regular_price: { currency: 'AUD', value: 27.27 },
                },
            },
            rating_summary: 0,
            redirect_code: 0,
            reviews: { items: [], page_info: { current_page: 0, page_size: 0, total_pages: 0 } },
            review_count: 0,
            sku: 'WH01-S-Green',
            staged: false,
            stock_status: 'IN_STOCK',
            uid: 'VmFyaWFudDo1MTM=',
        },
    },
    {
        attributes: [
            { code: 'color', label: 'Green', value_index: 182, uid: 'MTgy' },
            { code: 'size', label: 'M', value_index: 185, uid: 'MTg1' },
        ],
        product: {
            custom_attributes: [],
            id: 514,
            media_gallery_entries: [
                {
                    disabled: false,
                    file: 'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/500x245/attribute_rule_images/57_source_1690452040.jpg',
                    id: 1690452860,
                    label: '',
                    position: 0,
                    uid: '',
                },
            ],
            price_range: {
                maximum_price: {
                    discount: { amount_off: null, percent_off: null },
                    final_price: { currency: 'AUD', value: 51.82 },
                    regular_price: { currency: 'AUD', value: 51.82 },
                },
                minimum_price: {
                    discount: { amount_off: null, percent_off: null },
                    final_price: { currency: 'AUD', value: 51.82 },
                    regular_price: { currency: 'AUD', value: 51.82 },
                },
            },
            rating_summary: 0,
            redirect_code: 0,
            reviews: { items: [], page_info: { current_page: 0, page_size: 0, total_pages: 0 } },
            review_count: 0,
            sku: 'WH01-M-Green',
            staged: false,
            stock_status: 'IN_STOCK',
            uid: 'VmFyaWFudDo1MTQ=',
        },
    },
    {
        attributes: [
            { code: 'color', label: 'Purple', value_index: 183, uid: 'MTgz' },
            { code: 'size', label: 'S', value_index: 184, uid: 'MTg0' },
        ],
        product: {
            custom_attributes: [],
            id: 515,
            media_gallery_entries: [
                {
                    disabled: false,
                    file: 'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/500x245/attribute_rule_images/58_source_1690452040.jpg',
                    id: 1690452861,
                    label: '',
                    position: 0,
                    uid: '',
                },
            ],
            price_range: {
                maximum_price: {
                    discount: { amount_off: null, percent_off: null },
                    final_price: { currency: 'AUD', value: 27.27 },
                    regular_price: { currency: 'AUD', value: 27.27 },
                },
                minimum_price: {
                    discount: { amount_off: null, percent_off: null },
                    final_price: { currency: 'AUD', value: 27.27 },
                    regular_price: { currency: 'AUD', value: 27.27 },
                },
            },
            rating_summary: 0,
            redirect_code: 0,
            reviews: { items: [], page_info: { current_page: 0, page_size: 0, total_pages: 0 } },
            review_count: 0,
            sku: 'WH01-S-Purple',
            staged: false,
            stock_status: 'IN_STOCK',
            uid: 'VmFyaWFudDo1MTU=',
        },
    },
    {
        attributes: [
            { code: 'color', label: 'Purple', value_index: 183, uid: 'MTgz' },
            { code: 'size', label: 'M', value_index: 185, uid: 'MTg1' },
        ],
        product: {
            custom_attributes: [],
            id: 516,
            media_gallery_entries: [
                {
                    disabled: false,
                    file: 'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/500x245/attribute_rule_images/56_source_1690452040.jpg',
                    id: 1690452859,
                    label: '',
                    position: 0,
                    uid: '',
                },
            ],
            price_range: {
                maximum_price: {
                    discount: { amount_off: null, percent_off: null },
                    final_price: { currency: 'AUD', value: 51.82 },
                    regular_price: { currency: 'AUD', value: 51.82 },
                },
                minimum_price: {
                    discount: { amount_off: null, percent_off: null },
                    final_price: { currency: 'AUD', value: 51.82 },
                    regular_price: { currency: 'AUD', value: 51.82 },
                },
            },
            rating_summary: 0,
            redirect_code: 0,
            reviews: { items: [], page_info: { current_page: 0, page_size: 0, total_pages: 0 } },
            review_count: 0,
            sku: 'WH01-M-Purple',
            staged: false,
            stock_status: 'IN_STOCK',
            uid: 'VmFyaWFudDo1MTY=',
        },
    },
];

describe('transform-variants', () => {
    it('Gets AC product "attributes" structured data from BC product "options"', () => {
        expect(getTransformedVariants(mockBcProducts[0].variants)).toEqual(expectResult);
    });

    it('Returns an empty array if variant edges is empty', () => {
        expect(getTransformedVariants({} as BC_VariantConnection)).toEqual([]);
        expect(getTransformedVariants({ edges: null } as BC_VariantConnection)).toEqual([]);
        expect(
            getTransformedVariants({
                edges: [],
                pageInfo: {} as BC_PageInfo,
            } as BC_VariantConnection)
        ).toEqual([]);
    });

    it('Returns an empty array if ', () => {
        expect(
            getTransformedVariants({
                edges: [{}],
            } as BC_VariantConnection)
        ).toEqual([]);
    });
});
