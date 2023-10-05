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
        .map((option, itemPosition) => {
            if (!option?.node) return null;

            // At this point we know option node is a MultipleChoiceOption as picklists
            // can only create using MultipleChoiceOption
            const {
                displayName,
                displayStyle,
                values,
                entityId: optionId,
                isRequired,
            } = option.node as MultipleChoiceOption;

            if (!values?.edges) return null;

            // In BC bundle items there will be always one variant and price range of it should be
            // same amount all the bundle items
            const prices = bcVariants.edges?.[0]?.node.prices as Prices;

            const options = values.edges.map((value, optionPosition) => {
                if (!value?.node) return null;
                const {
                    entityId: optionValueId,
                    productId,
                    label,
                } = value.node as ProductPickListOptionValue;

                const uid = btoa(String(`bundle/${optionId}/${optionValueId}`));

                return {
                    __typename: 'BundleItemOption' as const,
                    can_change_quantity: false, // In BC picklist products you can't control the qty
                    id: optionValueId,
                    label,
                    position: optionPosition + 1,
                    product: bundleProductItemsByProductId[productId],
                    quantity: 1, // In BC picklist products bundle item qty will be always 1
                    uid,
                };
            });

            return {
                __typename: 'BundleItem' as const,

                id: optionId,
                option_id: optionId,
                options,
                position: itemPosition + 1,
                price_range: getTransformedPriceRange(prices, 'SimpleProduct', null),
                required: isRequired,
                title: displayName,
                type: displayStyle === 'ProductPickListWithImages' ? 'radio' : null,
                uid: btoa(String(optionId)),
            };
        })
        .filter(isNotNull);

    return items;
};
