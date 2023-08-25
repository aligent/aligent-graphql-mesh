import { BC_CartLineItemInput, BC_CartPhysicalItem } from '@mesh/external/BigCommerceGraphqlApi';

export const cartPhysicalItemsData: Array<BC_CartPhysicalItem> = [
    {
        brand: 'Milwaukee',
        couponAmount: {
            currencyCode: 'AUD',
            value: 0,
        },
        discountedAmount: {
            currencyCode: 'AUD',
            value: 0,
        },
        discounts: [],
        entityId: '0946c53c-b4ae-46da-b2ab-7c3d10e21815',
        extendedListPrice: {
            currencyCode: 'AUD',
            value: 736,
        },
        extendedSalePrice: {
            currencyCode: 'AUD',
            value: 736,
        },
        giftWrapping: null,
        imageUrl:
            'https://cdn11.bigcommerce.com/s-xxazhvt7gd/products/490/images/390/m18fid30_hero_02__12908.1690325886.220.290.jpg?c=1',
        isShippingRequired: true,
        isTaxable: true,
        listPrice: {
            currencyCode: 'AUD',
            value: 368,
        },
        name: 'Milwaukee M18 FUEL 1/4" Hex Brushless Cordless GEN 4 Impact Driver Skin - M18FID30',
        originalPrice: {
            currencyCode: 'AUD',
            value: 368,
        },
        parentEntityId: null,
        productEntityId: 490,
        quantity: 2,
        salePrice: {
            currencyCode: 'AUD',
            value: 368,
        },
        selectedOptions: [],
        url: 'https://aligent.mybigcommerce.com/milwaukee-m18-fuel-brushless-gen-4-1-4-hex-impact-driver-skin-m18fid30',
        sku: 'M18FID30',
        variantEntityId: 505,
    },
    {
        brand: 'Weller',
        couponAmount: {
            currencyCode: 'AUD',
            value: 0,
        },
        discountedAmount: {
            currencyCode: 'AUD',
            value: 0,
        },
        discounts: [],
        entityId: '92b5d446-84df-4a75-b70a-4e7c83c8922e',
        extendedListPrice: {
            currencyCode: 'AUD',
            value: 60,
        },
        extendedSalePrice: {
            currencyCode: 'AUD',
            value: 60,
        },
        giftWrapping: null,
        imageUrl:
            'https://cdn11.bigcommerce.com/s-xxazhvt7gd/product_images/attribute_rule_images/54_thumb_1690452039.jpg',
        isShippingRequired: true,
        isTaxable: true,
        listPrice: {
            currencyCode: 'AUD',
            value: 30,
        },
        name: 'Mona Pullover Hoodlie',
        originalPrice: {
            currencyCode: 'AUD',
            value: 70,
        },
        parentEntityId: null,
        productEntityId: 492,
        quantity: 2,
        salePrice: {
            currencyCode: 'AUD',
            value: 30,
        },
        selectedOptions: [
            {
                name: 'Color',
                entityId: 148,
                __typename: 'CartSelectedMultipleChoiceOption',
                valueEntityId: 182,
                value: 'Green',
            },
            {
                name: 'Size',
                entityId: 149,
                __typename: 'CartSelectedMultipleChoiceOption',
                valueEntityId: 184,
                value: 'S',
            },
        ],
        url: 'https://aligent.mybigcommerce.com/mona-pullover-hoodlie/',
        sku: 'WH01-S-Green',
        variantEntityId: 513,
    },
];

export const bcCartLineItemsData: BC_CartLineItemInput[] = [
    {
        quantity: 2,
        productEntityId: 490,
    },
    {
        quantity: 2,
        productEntityId: 492,
        selectedOptions: {
            multipleChoices: [
                {
                    optionEntityId: 148,
                    optionValueEntityId: 182,
                },
                {
                    optionEntityId: 149,
                    optionValueEntityId: 184,
                },
            ],
        },
    },
];
