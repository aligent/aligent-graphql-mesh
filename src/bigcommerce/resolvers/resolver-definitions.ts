import { Resolvers } from '../../meshrc/.mesh';
import { addProductsToCartResolver } from './mutations/add-products-to-cart';
import { addProductsToWishlistResolver } from './mutations/add-products-to-wishlist';
import { addWishlistItemsToCartResolver } from './mutations/add-wishlist-items-to-cart';
import { applyCouponToCartResolver } from './mutations/apply-coupon-to-cart';
import { applyGiftCardToCartResolver } from './mutations/apply-gift-card-to-cart';
import { changeCustomerPasswordResolver } from './mutations/change-customer-password';
import { createCustomerResolver } from './mutations/create-customer';
import { createCustomerAddressResolver } from './mutations/create-customer-address';
import { createEmptyCartResolver } from './mutations/create-empty-cart';
import { createProductReviewResolver } from './mutations/create-product-review';
import { deleteCustomerAddressResolver } from './mutations/delete-customer-address';
import { generateCustomerTokenResolver } from './mutations/generate-customer-token';
import { mergeCartsResolver } from './mutations/merge-carts';
import { postContactFormResolver } from './mutations/post-contact-form';
import { removeItemFromCartResolver } from './mutations/remove-item-from-cart';
import { removeProductsFromWishlistResolver } from './mutations/remove-products-from-wishlist';
import { reorderItemsResolver } from './mutations/reorder-items';
import { setBillingAddressOnCartResolver } from './mutations/set-billing-address-on-cart';
import { setGuestEmailOnCartResolver } from './mutations/set-guest-email-on-cart';
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
import { getSocialLinksResolver } from './queries/get-social-links';
import { isEmailAvailableResolver } from './queries/is-email-available';
import { keyMessagesResolver } from './queries/key-messages';
import { productReviewRatingsMetadataResolver } from './queries/product-review-ratings-metadata';
import { productsResolver } from './queries/products';
import { routeResolver } from './queries/route';
import { storeConfigResolver } from './queries/store-config';
import { storeLocationsResolver } from './queries/store-locations';

const resolvers: Resolvers = {
    Query: {
        categories: categoriesResolver,
        cart: cartResolver,
        countries: countriesResolver,
        cmsBlocks: cmsBlocksResolver,
        cmsPage: cmsPageResolver,
        currency: currencyResolver,
        customer: customerResolver,
        getSocialLinks: getSocialLinksResolver,
        isEmailAvailable: isEmailAvailableResolver,
        keyMessages: keyMessagesResolver,
        productReviewRatingsMetadata: productReviewRatingsMetadataResolver,
        products: productsResolver,
        route: routeResolver,
        storeConfig: storeConfigResolver,
        storeLocations: storeLocationsResolver,
    },
    Mutation: {
        addProductsToCart: addProductsToCartResolver,
        addProductsToWishlist: addProductsToWishlistResolver,
        addWishlistItemsToCart: addWishlistItemsToCartResolver,
        applyCouponToCart: applyCouponToCartResolver,
        applyGiftCardToCart: applyGiftCardToCartResolver,
        shareWishlist: shareWishlistResolver,
        changeCustomerPassword: changeCustomerPasswordResolver,
        createCustomer: createCustomerResolver,
        createCustomerAddress: createCustomerAddressResolver,
        createEmptyCart: createEmptyCartResolver,
        createProductReview: createProductReviewResolver,
        deleteCustomerAddress: deleteCustomerAddressResolver,
        generateCustomerToken: generateCustomerTokenResolver,
        mergeCarts: mergeCartsResolver,
        postContactForm: postContactFormResolver,
        removeItemFromCart: removeItemFromCartResolver,
        removeProductsFromWishlist: removeProductsFromWishlistResolver,
        reorderItems: reorderItemsResolver,
        setBillingAddressOnCart: setBillingAddressOnCartResolver,
        setGuestEmailOnCart: setGuestEmailOnCartResolver,
        setShippingAddressesOnCart: setShippingAddressesOnCartResolver,
        setShippingMethodsOnCart: setShippingMethodsOnCartResolver,
        subscribeEmailToNewsletter: subscribeEmailToNewsletterResolver,
        updateCartItems: updateCartItemsResolver,
        updateCustomer: updateCustomerResolver,
        updateCustomerAddress: updateCustomerAddressResolver,
    },
};

// resolve: (root, args, context, info) => {
//     // This is how to return the actual request
//     return context.TakeFlightGraphqlApi.Query.storeConfig({
//         root,
//         args,
//         context,
//         info,
//     });
// },

export default resolvers;
