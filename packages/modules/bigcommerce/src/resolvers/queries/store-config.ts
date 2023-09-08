import { MetafieldConnection, MetafieldEdge } from '@aligent/bigcommerce-operations';
import { Maybe, QueryResolvers, StoreConfig } from '@aligent/bigcommerce-resolvers';
import { getChannelMetafields } from '../../apis/graphql/channel';

const NAMESPACE: string = 'pwa_config';

/* istanbul ignore next */
export const storeConfigResolver: QueryResolvers['storeConfig'] = {
    resolve: async (_root, _args, context, _info) => {
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;
        //The namespace needs to match the metafield namespace when created in BigCommerce
        const bcChannelMetafieldsConfig: MetafieldConnection = await getChannelMetafields(
            NAMESPACE,
            customerImpersonationToken
        );

        const storeConfig =
            await transformChannelMetafieldsToStoreConfig(bcChannelMetafieldsConfig);
        return storeConfig;
    },
};

/*
 * Metafields have to be added to BigCommerce manually on channel level.
 * Make sure the namespace is matching the NAMESPACE constant.
 * Use the Rest API or the Metafield Manger (if installed).
 * API endpoint:  https://api.bigcommerce.com/stores/{{store_hash}}/v3/channels/1/metafields
 * Docs: https://developer.bigcommerce.com/docs/rest-management/channels/channel-metafields#create-a-channel-metafield
 */
export async function transformChannelMetafieldsToStoreConfig(
    bcStoreConfig: MetafieldConnection
): Promise<StoreConfig> {
    const metafields = bcStoreConfig.edges;

    //The metafields data has this ane extra node attribute and needs to be accessed via node.node
    ///[{"node":{"id":"TWV0YWZpZWxkczoxODk=","key":"category_url_suffix","value":".html"}},{"node":{"id":"TWV0YWZpZWxkczoxOTA=","key":"grid_per_page","value":"24"}}]

    const configs = getConfigsFromMetafields(metafields);

    const storeConfigTransformed: StoreConfig = {
        //Mandatory fields, always returned (currently no value assigned)
        contact_enabled: false,
        newsletter_enabled: false,
        pwa_base_url: '',
        returns_enabled: '',
        root_category_uid: 'null',
        locale: 'en-AU',
        category_url_suffix: '',
        grid_per_page: 24,
        ...configs,
    };

    return storeConfigTransformed;
}

export function findMetafieldValueByKey(
    metafields: Maybe<MetafieldEdge>[],
    metafieldKey: string
): string {
    const metafieldValue = metafields.find((node) => {
        return node?.node.key === metafieldKey;
    });
    return metafieldValue ? metafieldValue.node?.value : '';
}

const booleanConfig = [
    'adyen_demo_mode',
    'adyen_has_holder_name',
    'adyen_holder_name_required',
    'autocomplete_on_storefront',
    'check_money_order_enable_for_specific_countries',
    'check_money_order_enabled',
    'contact_enabled',
    'newsletter_enabled',
    'returns_enabled',
    'use_store_in_url',
    'zero_subtotal_enable_for_specific_countries',
];

const integerConfig = [
    'check_money_order_sort_order',
    'demonotice',
    'grid_per_page',
    'list_per_page',
    'show_cms_breadcrumbs',
    'store_sort_order',
];

const jsonStringConfig = [
    'configurable_thumbnail_source',
    'category_fixed_product_tax_display_setting',
    'product_fixed_product_tax_display_setting',
    'sales_fixed_product_tax_display_setting',
    'send_friend',
    'paypal_express',
    'StoreInformation',
];

/**
 * de-nests channel metafields into key/value pairs and parses the value to be its intended type
 *
 * e.g. [{"node":{"id":"TWV0YWZpZWxkczoxODk=","key":"category_url_suffix","value":".html"}},{"node":{"id":"TWV0YWZpZWxkczoxOTA=","key":"grid_per_page","value":"24"}}]
 * =
 * {
 *  category_url_suffix: ".html",
 *  grid_per_page: "24"
 * }
 *
 * @param metafields
 */
export const getConfigsFromMetafields = (
    metafields?: Maybe<Array<Maybe<MetafieldEdge>>>
): { [key: string]: boolean | number | string } => {
    if (!metafields) return {};

    return metafields.reduce((carry, metafield) => {
        if (!metafield?.node.key) return carry;
        const { key } = metafield.node;

        let value: any = metafield.node.value;

        if (!value) return carry;

        if (integerConfig.includes(key)) {
            value = Number(value);
        }

        if (booleanConfig.includes(key)) {
            if (isNaN(value)) {
                value = !(value === 'false');
            } else {
                value = !!Number(value);
            }
        }

        if (jsonStringConfig.includes(key)) {
            try {
                value = JSON.parse(value);
            } catch {
                value = null;
            }
        }

        return { ...carry, [key]: value };
    }, {});
};
