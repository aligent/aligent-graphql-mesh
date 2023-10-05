import { keyBy } from 'lodash';
import {
    MultipleChoiceOption,
    Prices,
    ProductOptionConnection,
    ProductPickListOptionValue,
    VariantConnection,
} from '@aligent/bigcommerce-operations';
import { BundleItem, Maybe, ProductInterface } from '@aligent/bigcommerce-resolvers';
import { btoa, isNotNull } from '@aligent/utils';
import { SupportedProductTypes } from '../../types';
import { getTransformedPriceRange } from './transform-product-prices';

interface TransformBundleItems {
    productOptions: ProductOptionConnection;
    productType: SupportedProductTypes;
    bcVariants: VariantConnection;
    bundleItemProducts?: ProductInterface[];
}

/* istanbul ignore file */
export const getTransformBundleItems = ({
    productOptions,
    productType,
    bcVariants,
    bundleItemProducts,
}: TransformBundleItems): Array<Maybe<BundleItem>> => {
    if (!productOptions || !productOptions?.edges?.length || productType !== 'BundleProduct')
        return [];

    const bundleProductItemsByProductId = keyBy(bundleItemProducts, 'id');

    const items = productOptions.edges
        .map((option) => {
            if (!option?.node) return null;

            // At this point we know option node is a MultipleChoiceOption as picklists
            // can only create using MultipleChoiceOption
            const {
                displayName,
                values,
                entityId: optionId,
                isRequired,
            } = option.node as MultipleChoiceOption;

            if (!values?.edges) return null;

            // In BC bundle items there will be always one variant and price range of it should be
            // same amount all the bundle items
            const prices = bcVariants.edges?.[0]?.node.prices as Prices;

            const options = values.edges.map((value) => {
                if (!value?.node) return null;
                const {
                    entityId: optionValueId,
                    productId,
                    label,
                } = value.node as ProductPickListOptionValue;

                const uid = btoa(String(`bundle/${optionId}/${optionValueId}`));

                return {
                    __typename: 'BundleItemOption' as const,
                    id: optionValueId,
                    label,
                    product: bundleProductItemsByProductId[productId],
                    uid,
                };
            });

            return {
                __typename: 'BundleItem' as const,
                id: optionId,
                option_id: optionId,
                options,
                price_range: getTransformedPriceRange(prices, 'SimpleProduct', null),
                required: isRequired,
                title: displayName,
                uid: btoa(String(optionId)),
            };
        })
        .filter(isNotNull);

    return items;
};
