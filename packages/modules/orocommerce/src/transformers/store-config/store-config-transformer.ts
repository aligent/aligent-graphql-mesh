import { ChainTransformer, Transformer, TransformerContext } from '@aligent/utils';
import { OroStoreConfigApiData } from '../../types/store-config';
import { StoreConfig } from '@aligent/orocommerce-resolvers';
import { Injectable } from 'graphql-modules';

@Injectable()
export class StoreConfigTransformerChain extends ChainTransformer<
    OroStoreConfigApiData[],
    StoreConfig
> {}

const MANDATORY_STORE_CONFIGS = {
    // Taken from OTF-94 comments
    contact_enabled: false,
    newsletter_enabled: false,
    returns_enabled: '',
    root_category_uid: 'null',
    locale: 'en-AU',
    category_url_suffix: '',
    grid_per_page: 24,
};

@Injectable()
export class StoreConfigTransformer implements Transformer<OroStoreConfigApiData[], StoreConfig> {
    public transform(
        context: TransformerContext<OroStoreConfigApiData[], StoreConfig>
    ): StoreConfig {
        return this.transformOroStoreConfig(context.data);
    }

    findStoreConfigByMetaId(storeConfigData: OroStoreConfigApiData[], id: string): string | null {
        const foundStoreConfigMeta = storeConfigData.find((item) => item.meta.id === id);

        if (!foundStoreConfigMeta) return null;
        return foundStoreConfigMeta.meta.value;
    }

    private transformOroStoreConfig(oroStoreConfig: OroStoreConfigApiData[]): StoreConfig {
        const url = this.findStoreConfigByMetaId(oroStoreConfig, 'oro_ui.application_url');
        const defaultCurrency = this.findStoreConfigByMetaId(
            oroStoreConfig,
            'oro_pricing_pro.default_currency'
        );
        return {
            __typename: 'StoreConfig',
            pwa_base_url: url ?? '',
            secure_base_media_url: url ?? '',
            default_display_currency_code: defaultCurrency ?? '',
            contact_enabled: MANDATORY_STORE_CONFIGS.contact_enabled,
            newsletter_enabled: MANDATORY_STORE_CONFIGS.newsletter_enabled,
            returns_enabled: MANDATORY_STORE_CONFIGS.returns_enabled,
            root_category_uid: MANDATORY_STORE_CONFIGS.root_category_uid,
            locale: MANDATORY_STORE_CONFIGS.locale,
            category_url_suffix: MANDATORY_STORE_CONFIGS.category_url_suffix,
            grid_per_page: MANDATORY_STORE_CONFIGS.grid_per_page,
            id: null,
            use_store_in_url: true,
            website_code: '1',
            website_id: 1,
            root_category_id: 1,
            plpAddToCartEnabled: true,
            plpQtyModifierEnabled: true,
            is_default_store: true,
            is_default_store_group: true,
            list_per_page: 1,
            check_money_order_enable_for_specific_countries: true,
            autocomplete_on_storefront: true,
            check_money_order_enabled: true, // needed for types
            captcha_type_contact: null,
            captcha_type_customer_create: null,
            captcha_type_customer_forgot_password: null,
            captcha_type_customer_login: null,
            captcha_type_newsletter: null,
            captcha_type_product_review: null,
            captcha_type_sendfriend: null,
            captcha_type_place_order: null,
            captcha_public_key_v2_checkbox: null,
            captcha_public_key_v2_invisible: null,
            captcha_public_key_v3_invisible: null,
            captcha_type_wishlist_sharing: null,
            magento_wishlist_general_is_enabled: null,
            store_code: null,
            paypal_express: {
                billing_agreement_code: null,
                in_context_config: {
                    client_config: {
                        button: null,
                        environment: null,
                        is_guest_checkout_allowed: null,
                        is_visible_on_product_page: null,
                        locale: null,
                        merchant_id: null,
                        styles: [
                            {
                                label: null,
                                value: null,
                            },
                        ],
                    },
                    merchant_id: null,
                },
                is_context_checkout: null,
            },
            product_reviews_enabled: null,
        };
    }
}
