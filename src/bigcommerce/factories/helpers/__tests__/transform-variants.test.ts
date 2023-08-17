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
                    id: 2888706,
                    label: '',
                    position: 0,
                    uid: '',
                },
            ],
            price_range: {
                maximum_price: {
                    discount: { amount_off: 40, percent_off: 57.14285714285714 },
                    final_price: { currency: 'AUD', value: 30 },
                    regular_price: { currency: 'AUD', value: 70 },
                },
                minimum_price: {
                    discount: { amount_off: 40, percent_off: 57.14285714285714 },
                    final_price: { currency: 'AUD', value: 30 },
                    regular_price: { currency: 'AUD', value: 70 },
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
                    id: 10945416,
                    label: '',
                    position: 0,
                    uid: '',
                },
            ],
            price_range: {
                maximum_price: {
                    discount: { amount_off: 17, percent_off: 29.82456140350877 },
                    final_price: { currency: 'AUD', value: 40 },
                    regular_price: { currency: 'AUD', value: 57 },
                },
                minimum_price: {
                    discount: { amount_off: 17, percent_off: 29.82456140350877 },
                    final_price: { currency: 'AUD', value: 40 },
                    regular_price: { currency: 'AUD', value: 57 },
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
                    id: 6943,
                    label: '',
                    position: 0,
                    uid: '',
                },
            ],
            price_range: {
                maximum_price: {
                    discount: { amount_off: 0, percent_off: 0 },
                    final_price: { currency: 'AUD', value: 57 },
                    regular_price: { currency: 'AUD', value: 57 },
                },
                minimum_price: {
                    discount: { amount_off: 0, percent_off: 0 },
                    final_price: { currency: 'AUD', value: 57 },
                    regular_price: { currency: 'AUD', value: 57 },
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
                    id: 9437676,
                    label: '',
                    position: 0,
                    uid: '',
                },
            ],
            price_range: {
                maximum_price: {
                    discount: { amount_off: 47, percent_off: 82.45614035087719 },
                    final_price: { currency: 'AUD', value: 10 },
                    regular_price: { currency: 'AUD', value: 57 },
                },
                minimum_price: {
                    discount: { amount_off: 47, percent_off: 82.45614035087719 },
                    final_price: { currency: 'AUD', value: 10 },
                    regular_price: { currency: 'AUD', value: 57 },
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
