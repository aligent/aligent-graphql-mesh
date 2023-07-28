import { StoreConfig } from "../../../meshrc/.mesh";

export const mockStoreConfig: StoreConfig = {
    id: 1337,
    category_url_suffix: '.html',
    grid_per_page: 24,
    plpAddToCartEnabled: true,
    plpQtyModifierEnabled: true,
    captcha_type_contact: 'recaptcha_v3',
    captcha_type_customer_create: null,
    captcha_type_customer_forgot_password: null,
    captcha_type_customer_login: null,
    captcha_type_newsletter: null,
    captcha_type_product_review: null,
    captcha_type_sendfriend: null,
    captcha_type_place_order: null,
    captcha_public_key_v2_checkbox: 'MOCK',
    captcha_public_key_v2_invisible: '',
    captcha_public_key_v3_invisible: '',
    captcha_type_wishlist_sharing: null,
    magento_wishlist_general_is_enabled: '1',
    store_code: 'default',
    paypal_express: {
        billing_agreement_code: null,
        in_context_config: {
            client_config: {
                button: 'paypal-express-in-context-button',
                environment: 'sandbox',
                is_guest_checkout_allowed: true,
                is_visible_on_product_page: true,
                locale: 'en_US',
                merchant_id: '',
                styles: [
                    {
                        label: 'layout',
                        value: 'vertical',
                    },
                    {
                        label: 'size',
                        value: 'responsive',
                    },
                    {
                        label: 'color',
                        value: 'gold',
                    },
                    {
                        label: 'shape',
                        value: 'rect',
                    },
                    {
                        label: 'label',
                        value: 'paypal',
                    },
                ],
            },
            merchant_id: '',
        },
        is_context_checkout: true,
    },
    locale: 'en_AU',
    secure_base_media_url:
        'https://take-flight-ew3k5nq-ekxw7lyelhava.ap-4.magentosite.cloud/media/',
    root_category_uid: 'Mg==',
};
