import { ChainTransformer, Transformer, TransformerContext } from '@aligent/utils';
import { OroStoreConfig } from '../../types/store-config';
import { StoreConfig } from '@aligent/orocommerce-resolvers';
import { Injectable } from 'graphql-modules';

@Injectable()
export class StoreConfigTransformerChain extends ChainTransformer<OroStoreConfig, StoreConfig> {}

@Injectable()
export class StoreConfigTransformer implements Transformer<OroStoreConfig, StoreConfig> {
    public transform(context: TransformerContext<OroStoreConfig, StoreConfig>): StoreConfig {
        const oroStoreConfig = context.data;
        return this.transformOroStoreConfig(oroStoreConfig);
    }

    private transformOroStoreConfig(oroStoreConfig: OroStoreConfig): StoreConfig {
        const attrs = oroStoreConfig.attributes;
        const OroStyles = attrs.paypal_express.in_context_config.client_config.styles;
        const styles = [];

        for (const style of OroStyles) {
            styles.push({
                label: style.label,
                value: style.value,
            });
        }
        return {
            __typename: 'StoreConfig',
            paypal_express: {
                billing_agreement_code: attrs.paypal_express.billing_agreement_code,
                in_context_config: {
                    client_config: {
                        button: attrs.paypal_express.in_context_config.client_config.button,
                        environment:
                            attrs.paypal_express.in_context_config.client_config.environment,
                        is_guest_checkout_allowed: null,
                        is_visible_on_product_page: null,
                        locale: attrs.paypal_express.in_context_config.client_config.locale,
                        merchant_id:
                            attrs.paypal_express.in_context_config.client_config.merchant_id,
                        styles: styles,
                    },
                    in_context_id: attrs.paypal_express.in_context_config.in_context_id,
                    merchant_id: attrs.paypal_express.in_context_config.merchant_id,
                },
                is_context_checkout: null,
                paylater_enabled: null,
                payment_acceptance_mark_href: attrs.paypal_express.payment_acceptance_mark_href,
                payment_acceptance_mark_src: attrs.paypal_express.payment_acceptance_mark_src,
                redirect_url: attrs.paypal_express.redirect_url,
                sdk_url: attrs.paypal_express.sdk_url,
            },
            send_friend: {
                enabled_for_customers: attrs.send_friend.enabled_for_customers,
                enabled_for_guests: attrs.send_friend.enabled_for_guests,
            },

            store_code: attrs.store_code,
            store_group_code: attrs.store_group_code,
            absolute_footer: attrs.absolute_footer,
            website_code: attrs.website_code,
            adyen_checkout_frontend_region: attrs.adyen_checkout_frontend_region,
            adyen_client_key_live: attrs.adyen_client_key_live,
            adyen_client_key_test: attrs.adyen_client_key_test,
            adyen_demo_mode: attrs.adyen_demo_mode,
            adyen_has_holder_name: attrs.adyen_has_holder_name,
            adyen_holder_name_required: attrs.adyen_holder_name_required,
            adyen_oneclick_card_mode: attrs.adyen_oneclick_card_mode,
            adyen_return_path_error: attrs.adyen_return_path_error,
            adyen_title_renderer: attrs.adyen_title_renderer,
            afterpaypay_active: attrs.afterpaypay_active,
            afterpaypay_api_enable_cta_cart_page: attrs.afterpaypay_api_enable_cta_cart_page,
            afterpaypay_api_enable_cta_mini_cart: attrs.afterpaypay_api_enable_cta_mini_cart,
            afterpaypay_api_enable_cta_product_page: attrs.afterpaypay_api_enable_cta_product_page,
            afterpaypay_api_max_order_total: attrs.afterpaypay_api_max_order_total,
            afterpaypay_api_min_order_total: attrs.afterpaypay_api_min_order_total,
            afterpaypay_api_mode: attrs.afterpaypay_api_mode,
            afterpaypay_title: attrs.afterpaypay_title,
            allow_gift_receipt: attrs.allow_gift_receipt,
            allow_gift_wrapping_on_order: attrs.allow_gift_wrapping_on_order,
            allow_gift_wrapping_on_order_items: attrs.allow_gift_wrapping_on_order_items,
            allow_guests_to_write_product_reviews: attrs.allow_guests_to_write_product_reviews,
            allow_items: attrs.allow_items,
            allow_order: attrs.allow_order,
            allow_printed_card: attrs.allow_printed_card,
            autocomplete_on_storefront: attrs.autocomplete_on_storefront,
            base_currency_code: attrs.base_currency_code,
            base_link_url: attrs.base_link_url,
            base_media_url: attrs.base_media_url,
            base_static_url: attrs.base_static_url,
            base_url: attrs.base_url,
            braintree_cc_vault_active: attrs.braintree_cc_vault_active,
            captcha_public_key_v2_checkbox: attrs.captcha_public_key_v2_checkbox,
            captcha_public_key_v2_invisible: attrs.captcha_public_key_v2_invisible,
            captcha_public_key_v3_invisible: attrs.captcha_public_key_v3_invisible,
            captcha_type_contact: attrs.captcha_type_contact,
            captcha_type_customer_create: attrs.captcha_type_customer_create,
            captcha_type_customer_edit: attrs.captcha_type_customer_edit,
            captcha_type_customer_forgot_password: attrs.captcha_type_customer_forgot_password,
            captcha_type_customer_login: attrs.captcha_type_customer_login,
            captcha_type_newsletter: attrs.captcha_type_newsletter,
            captcha_type_place_order: attrs.captcha_type_place_order,
            captcha_type_product_review: attrs.captcha_type_product_review,
            captcha_type_sendfriend: attrs.captcha_type_sendfriend,
            captcha_type_wishlist_sharing: attrs.captcha_type_wishlist_sharing,
            cart_gift_wrapping: attrs.cart_gift_wrapping,
            cart_printed_card: attrs.cart_printed_card,
            catalog_default_sort_by: attrs.catalog_default_sort_by,
            category_url_suffix: attrs.category_url_suffix,
            check_money_order_enable_for_specific_countries:
                attrs.check_money_order_enable_for_specific_countries,
            check_money_order_enabled: attrs.check_money_order_enabled,
            check_money_order_make_check_payable_to: attrs.check_money_order_make_check_payable_to,
            check_money_order_max_order_total: attrs.check_money_order_max_order_total,
            check_money_order_min_order_total: attrs.check_money_order_min_order_total,
            check_money_order_new_order_status: attrs.check_money_order_new_order_status,
            check_money_order_payment_from_specific_countries:
                attrs.check_money_order_payment_from_specific_countries,
            check_money_order_send_check_to: attrs.check_money_order_send_check_to,
            check_money_order_sort_order: attrs.check_money_order_sort_order,
            check_money_order_title: attrs.check_money_order_title,
            cms_home_page: attrs.cms_home_page,
            cms_no_cookies: attrs.cms_no_cookies,
            cms_no_route: attrs.cms_no_route,

            code: attrs.code,
            configurable_thumbnail_source: attrs.configurable_thumbnail_source,
            contact_enabled: attrs.contact_enabled,
            copyright: attrs.copyright,
            default_description: attrs.default_description,
            default_display_currency_code: attrs.default_display_currency_code,
            default_keywords: attrs.default_keywords,
            default_title: attrs.default_title,
            demonotice: attrs.demonotice,
            enable_multiple_wishlists: attrs.enable_multiple_wishlists,
            front: attrs.front,
            googleMapsAPIKey: attrs.googleMapsAPIKey,
            grid_per_page: attrs.grid_per_page,
            grid_per_page_values: attrs.grid_per_page_values,
            head_includes: attrs.head_includes,
            head_shortcut_icon: attrs.head_shortcut_icon,
            header_logo_src: attrs.header_logo_src,
            is_default_store: attrs.is_default_store,
            is_default_store_group: attrs.is_default_store_group,
            list_mode: attrs.list_mode,
            list_per_page: attrs.list_per_page,
            list_per_page_values: attrs.list_per_page_values,
            locale: attrs.locale,
            logo_alt: attrs.logo_alt,
            logo_height: attrs.logo_height,
            logo_width: attrs.logo_width,
            magento_reward_general_is_enabled: attrs.magento_reward_general_is_enabled,
            magento_reward_general_is_enabled_on_front:
                attrs.magento_reward_general_is_enabled_on_front,
            magento_reward_general_min_points_balance:
                attrs.magento_reward_general_min_points_balance,
            magento_reward_general_publish_history: attrs.magento_reward_general_publish_history,
            magento_reward_points_invitation_customer:
                attrs.magento_reward_points_invitation_customer,
            magento_reward_points_invitation_customer_limit:
                attrs.magento_reward_points_invitation_customer_limit,
            magento_reward_points_invitation_order: attrs.magento_reward_points_invitation_order,
            magento_reward_points_invitation_order_limit:
                attrs.magento_reward_points_invitation_order_limit,
            magento_reward_points_newsletter: attrs.magento_reward_points_newsletter,
            magento_reward_points_order: attrs.magento_reward_points_order,
            magento_reward_points_register: attrs.magento_reward_points_register,
            magento_reward_points_review: attrs.magento_reward_points_review,
            magento_reward_points_review_limit: attrs.magento_reward_points_review_limit,
            magento_wishlist_general_is_enabled: attrs.magento_wishlist_general_is_enabled,
            maximum_number_of_wishlists: attrs.maximum_number_of_wishlists,
            minimum_password_length: attrs.minimum_password_length,
            newsletter_enabled: attrs.newsletter_enabled,
            no_route: attrs.no_route,
            payment_payflowpro_cc_vault_active: attrs.payment_payflowpro_cc_vault_active,
            plpAddToCartEnabled: attrs.plpAddToCartEnabled,
            plpQtyModifierEnabled: attrs.plpQtyModifierEnabled,
            printed_card_price: attrs.printed_card_price,
            product_reviews_enabled: attrs.product_reviews_enabled,
            product_url_suffix: attrs.product_url_suffix,
            pwa_base_url: attrs.pwa_base_url,
            required_character_classes_number: attrs.required_character_classes_number,
            returns_enabled: attrs.returns_enabled,
            root_category_id: attrs.root_category_id,
            root_category_uid: attrs.root_category_uid,
            sales_gift_wrapping: attrs.sales_gift_wrapping,
            sales_printed_card: attrs.sales_printed_card,
            secure_base_link_url: attrs.secure_base_link_url,
            secure_base_media_url: attrs.secure_base_media_url,
            secure_base_static_url: attrs.secure_base_static_url,
            secure_base_url: attrs.secure_base_url,
            show_cms_breadcrumbs: attrs.show_cms_breadcrumbs,
            store_group_name: attrs.store_group_name,
            store_information: attrs.store_information,
            store_name: attrs.store_name,
            store_phone_number: attrs.store_phone_number,
            store_sort_order: attrs.store_sort_order,
            timezone: attrs.timezone,
            title_prefix: attrs.title_prefix,
            title_separator: attrs.title_separator,
            title_suffix: attrs.title_suffix,
            use_store_in_url: attrs.use_store_in_url,
            website_id: attrs.website_id,
            website_name: attrs.website_name,
            weight_unit: attrs.weight_unit,
            welcome: attrs.welcome,
            zero_subtotal_enable_for_specific_countries:
                attrs.zero_subtotal_enable_for_specific_countries,
            zero_subtotal_enabled: attrs.zero_subtotal_enabled,
            zero_subtotal_new_order_status: attrs.zero_subtotal_new_order_status,
            zero_subtotal_payment_action: attrs.zero_subtotal_payment_action,
            zero_subtotal_payment_from_specific_countries:
                attrs.zero_subtotal_payment_from_specific_countries,
            zero_subtotal_sort_order: attrs.zero_subtotal_sort_order,
            zero_subtotal_title: attrs.zero_subtotal_title,
        };
    }
}
