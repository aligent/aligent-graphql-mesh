import { addProductsToCartResolver } from './mutations/add-products-to-cart';
import { addProductsToWishlistResolver } from './mutations/add-products-to-wishlist';
import { addWishlistItemsToCartResolver } from './mutations/add-wishlist-items-to-cart';
import { applyCouponToCartResolver } from './mutations/apply-coupon-to-cart';
import { applyGiftCardToCartResolver } from './mutations/apply-gift-card-to-cart';
import { brandsResolver } from './queries/brands';
import { changeCustomerPasswordResolver } from './mutations/change-customer-password';
import { createBraintreeClientTokenResolver } from './mutations/create-braintree-client-token';
import { createCartRedirectUrlsResolver } from './mutations/create-cart-redirect-urls';
import { createCustomerResolver } from './mutations/create-customer';
import { createCustomerAddressResolver } from './mutations/create-customer-address';
import { createEmptyCartResolver } from './mutations/create-empty-cart';
import { createProductReviewResolver } from './mutations/create-product-review';
import { deleteCustomerAddressResolver } from './mutations/delete-customer-address';
import { generateCustomerTokenResolver } from './mutations/generate-customer-token';
import { mergeCartsResolver } from './mutations/merge-carts';
import { placeOrderResolver } from './mutations/place-order';
import { removeCouponFromCartResolver } from './mutations/remove-coupon-from-cart';
import { removeGiftCardFromCartResolver } from './mutations/remove-gift-card-from-cart';
import { removeItemFromCartResolver } from './mutations/remove-item-from-cart';
import { removeProductsFromWishlistResolver } from './mutations/remove-products-from-wishlist';
import { reorderItemsResolver } from './mutations/reorder-items';
import { requestPasswordResetEmailResolver } from './mutations/request-password-reset-email';
import { resetPasswordResolver } from './mutations/reset-password';
import { setBillingAddressOnCartResolver } from './mutations/set-billing-address-on-cart';
import { setGuestEmailOnCartResolver } from './mutations/set-guest-email-on-cart';
import { setPaymentMethodOnCartResolver } from './mutations/set-payment-method-on-cart';
import { setShippingAddressesOnCartResolver } from './mutations/set-shipping-addresses-on-cart';
import { setShippingMethodsOnCartResolver } from './mutations/set-shipping-methods-on-cart';
import { shareWishlistResolver } from './mutations/share-wishlist';
import { subscribeEmailToNewsletterResolver } from './mutations/subscribe-email-to-newsletter';
import { updateCartItemsResolver } from './mutations/update-cart-items';
import { updateCustomerResolver } from './mutations/update-customer';
import { updateCustomerAddressResolver } from './mutations/update-customer-address';
import { cartResolver } from './queries/cart';
import { categoriesResolver } from './queries/categories';
import { cmsBlocksResolver } from './queries/cms-blocks';
import { cmsPageResolver } from './queries/cms-page';
import { countriesResolver } from './queries/countries';
import { currencyResolver } from './queries/currency';
import { customerResolver } from './queries/customer';
import { customerCartResolver } from './queries/customer-cart';
import { getSocialLinksResolver } from './queries/get-social-links';
import { isEmailAvailableResolver } from './queries/is-email-available';
import { keyMessagesResolver } from './queries/key-messages';
import { productReviewRatingsMetadataResolver } from './queries/product-review-ratings-metadata';
import { productsResolver } from './queries/products';
import { routeResolver } from './queries/route';
import { storeConfigResolver } from './queries/store-config';
import { storeLocationsResolver } from './queries/store-locations';
import { Resolvers } from '@aligent/bigcommerce-resolvers';
import { productsBySkuResolver } from './queries/products-by-sku';
import { clearCustomerCartResolver } from './mutations/clear-customer-cart';
import { createWishListResolver } from './mutations/create-wishlist';
import { deleteWishListResolver } from './mutations/delete-wishlist';
import { updateWishListResolver } from './mutations/update-wishlist';
import { copyProductsBetweenWishlistsResolver } from './mutations/copy-products-between-wishlists';
import { moveProductsBetweenWishlistsResolver } from './mutations/move-products-between-wishlists';
import {
    customerIsSubscribedResolver,
    customerOrderItemsResolver,
    customerOrderShippingAddressResolver,
    customerOrderShippingMethodResolver,
    customerTotalResolver,
    customerOrdersResolver,
    customerWishlistsResolver,
    smallImageResolver,
} from './queries/sub-query-resolvers';
import { contactUsResolver } from './mutations/contact-us';
import { storeAvailabilityResolver } from './queries/store-availability';

export const resolvers: Resolvers = {
    Query: {
        brands: brandsResolver,
        categories: categoriesResolver,
        cart: cartResolver,
        customerCart: customerCartResolver,
        countries: countriesResolver,
        cmsBlocks: cmsBlocksResolver,
        cmsPage: cmsPageResolver,
        currency: currencyResolver,
        customer: customerResolver,
        getSocialLinks: getSocialLinksResolver,
        productsBySku: productsBySkuResolver,
        isEmailAvailable: isEmailAvailableResolver,
        keyMessages: keyMessagesResolver,
        productReviewRatingsMetadata: productReviewRatingsMetadataResolver,
        products: productsResolver,
        route: routeResolver,
        storeConfig: storeConfigResolver,
        storeLocations: storeLocationsResolver,
        storeAvailability: storeAvailabilityResolver,
    },
    Mutation: {
        addProductsToCart: addProductsToCartResolver,
        addProductsToWishlist: addProductsToWishlistResolver,
        addWishlistItemsToCart: addWishlistItemsToCartResolver,
        applyCouponToCart: applyCouponToCartResolver,
        applyGiftCardToCart: applyGiftCardToCartResolver,
        shareWishlist: shareWishlistResolver,
        changeCustomerPassword: changeCustomerPasswordResolver,
        clearCustomerCart: clearCustomerCartResolver,
        createBraintreeClientToken: createBraintreeClientTokenResolver,
        createCartRedirectUrls: createCartRedirectUrlsResolver,
        createCustomer: createCustomerResolver,
        createCustomerAddress: createCustomerAddressResolver,
        createEmptyCart: createEmptyCartResolver,
        createProductReview: createProductReviewResolver,
        deleteCustomerAddress: deleteCustomerAddressResolver,
        generateCustomerToken: generateCustomerTokenResolver,
        mergeCarts: mergeCartsResolver,
        placeOrder: placeOrderResolver,
        contactUs: contactUsResolver,
        removeCouponFromCart: removeCouponFromCartResolver,
        removeGiftCardFromCart: removeGiftCardFromCartResolver,
        removeItemFromCart: removeItemFromCartResolver,
        removeProductsFromWishlist: removeProductsFromWishlistResolver,
        reorderItems: reorderItemsResolver,
        requestPasswordResetEmail: requestPasswordResetEmailResolver,
        resetPassword: resetPasswordResolver,
        setBillingAddressOnCart: setBillingAddressOnCartResolver,
        setGuestEmailOnCart: setGuestEmailOnCartResolver,
        setPaymentMethodOnCart: setPaymentMethodOnCartResolver,
        setShippingAddressesOnCart: setShippingAddressesOnCartResolver,
        setShippingMethodsOnCart: setShippingMethodsOnCartResolver,
        subscribeEmailToNewsletter: subscribeEmailToNewsletterResolver,
        updateCartItems: updateCartItemsResolver,
        updateCustomer: updateCustomerResolver,
        updateCustomerAddress: updateCustomerAddressResolver,
        createWishlist: createWishListResolver,
        deleteWishlist: deleteWishListResolver,
        updateWishlist: updateWishListResolver,
        copyProductsBetweenWishlists: copyProductsBetweenWishlistsResolver,
        moveProductsBetweenWishlists: moveProductsBetweenWishlistsResolver,
    },
    //sub-resolvers, used for nested queries from a query or a mutation resolver
    Customer: {
        is_subscribed: customerIsSubscribedResolver,
        orders: customerOrdersResolver,
        wishlists: customerWishlistsResolver,
    },
    CustomerOrder: {
        items: customerOrderItemsResolver,
        shipping_address: customerOrderShippingAddressResolver,
        shipping_method: customerOrderShippingMethodResolver,
        total: customerTotalResolver,
    },
    ProductImage: {
        url: smallImageResolver,
    },
};

export default resolvers;
