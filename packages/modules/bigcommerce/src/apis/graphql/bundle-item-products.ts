import {
    MultipleChoiceOption,
    Product,
    ProductConnection,
    ProductPickListOptionValue,
    TaxDisplaySettings,
} from '@aligent/bigcommerce-operations';
import { Maybe, ProductInterface } from '@aligent/bigcommerce-resolvers';
import { getIncludesTax, isNotNull } from '@aligent/utils';
import {
    getHasPickListItems,
    getTransformedProductData,
} from '../../factories/transform-products-data';
import { getBcProductsGraphql } from './products';
import { getProductRules } from '../rest/products';
import { ProductRule } from '../../types/rest-prop-types';

type PickListEntityIdMap = { [key: number]: number };

interface ModifiedProductPriceBasedOnPriceRules {
    bcPickListProduct: Product;
    productRules: ProductRule[] | null;
    pickListEntityIdMap: PickListEntityIdMap;
}

/* istanbul ignore file */
const getModifiedProductPriceBasedOnPriceRules = ({
    bcPickListProduct,
    productRules,
    pickListEntityIdMap,
}: ModifiedProductPriceBasedOnPriceRules): Product => {
    if (!productRules) {
        return bcPickListProduct;
    }

    // Product rules return from the REST endpoint based on the product entity id (option_value_id) so find the
    const matchingRule = productRules.find((rule) =>
        rule.conditions.find(
            (condition) =>
                condition.option_value_id === pickListEntityIdMap[bcPickListProduct.entityId]
        )
    );

    if (!matchingRule) {
        return bcPickListProduct;
    }

    const { adjuster, adjuster_value } = matchingRule.price_adjuster;
    // consider initial modified price is same as base price of the product
    let priceAfterDiscount = bcPickListProduct.prices?.basePrice?.value;
    const currencyCode = bcPickListProduct.prices?.basePrice?.currencyCode as string;

    // Work out price after discount based on different adjusters
    if (adjuster === 'relative') {
        priceAfterDiscount = priceAfterDiscount + adjuster_value;
    }
    if (adjuster === 'percentage') {
        // Price after discount = Original Price - (Original price × Discount %)
        priceAfterDiscount =
            priceAfterDiscount - priceAfterDiscount * (Math.abs(adjuster_value) / 100);
    }

    return {
        ...bcPickListProduct,
        prices: {
            ...bcPickListProduct.prices!,
            price: {
                value: priceAfterDiscount,
                currencyCode,
            },
            priceRange: {
                min: {
                    value: priceAfterDiscount,
                    currencyCode,
                },
                max: {
                    value: priceAfterDiscount,
                    currencyCode,
                },
            },
            salePrice: {
                value: priceAfterDiscount,
                currencyCode,
            },
        },
    };
};

/* istanbul ignore file */
export const getBundleItemProducts = async (
    bcProduct: Product,
    taxSettings: TaxDisplaySettings | null,
    customerImpersonationToken: string
): Promise<Maybe<{ items?: ProductInterface[] }>> => {
    const hasPickListItems = getHasPickListItems(bcProduct.productOptions);

    if (!hasPickListItems) {
        return null;
    }

    const pickListEntityIdMap: PickListEntityIdMap = {};
    const pickListProductIds = bcProduct.productOptions.edges
        ?.map((option) => {
            if (!option || !option.node) return null;

            const { values } = option.node as MultipleChoiceOption;
            if (!values?.edges) return null;

            return values.edges.map((value) => {
                if (!value?.node) return null;
                const { productId, entityId } = value.node as ProductPickListOptionValue;
                pickListEntityIdMap[productId] = entityId;
                return productId;
            });
        })
        .flat()
        .filter(isNotNull);

    // Here we fetch full product payload from BC as Adobe commerce schema expose all
    // the product data which product interface supports
    const bcPickListProducts = (await getBcProductsGraphql(
        {
            entityIds: pickListProductIds,
            includeTax: getIncludesTax(taxSettings?.pdp),
        },
        customerImpersonationToken
    )) as ProductConnection;

    // Now we need to fetch product rules for the parent product from REST API
    // Get product rules for a product which has picklist items. These rules will later use to calculate
    // discounts for each individual bundle item.
    let validProductRules: ProductRule[] | null = null;
    // Adding a try catch block as if main product has no rules API returns 204 no content error
    try {
        const pickListProductRules = await getProductRules(bcProduct.entityId);
        validProductRules = pickListProductRules.filter(({ is_enabled }) => is_enabled);
    } catch (e) {
        console.log('Skip rules');
    }

    return {
        items: bcPickListProducts?.edges
            ?.map((product) => {
                if (!product) return null;
                const priceModifiedPickListProduct = getModifiedProductPriceBasedOnPriceRules({
                    bcPickListProduct: product.node,
                    productRules: validProductRules,
                    pickListEntityIdMap,
                });
                return getTransformedProductData(priceModifiedPickListProduct);
            })
            .filter(isNotNull),
    };
};
