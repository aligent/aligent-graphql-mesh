import { Resolvers } from '../../meshrc/.mesh';
import { addProductsToCartResolver } from './mutations/add-products-to-cart';
import { addProductsToWishlistResolver } from './mutations/add-products-to-wishlist';
import { applyCouponToCartResolver } from './mutations/apply-coupon-to-cart';
import { applyGiftCardToCartResolver } from './mutations/apply-gift-card-to-cart';
import { changeCustomerPasswordResolver } from './mutations/change-customer-password';
import { createCustomerResolver } from './mutations/create-customer';
import { createCustomerAddressResolver } from './mutations/create-customer-address';
import { createEmptyCartResolver } from './mutations/create-empty-cart';
import { deleteCustomerAddressResolver } from './mutations/delete-customer-address';
import { generateCustomerTokenResolver } from './mutations/generate-customer-token';
import { mergeCartsResolver } from './mutations/merge-carts';
import { removeItemFromCartResolver } from './mutations/remove-item-from-cart';
import { setGuestEmailOnCartResolver } from './mutations/set-guest-email-on-cart';
import { subscribeEmailToNewsletterResolver } from './mutations/subscribe-email-to-newsletter';
import { updateCartItemsResolver } from './mutations/update-cart-items';
import { updateCustomerResolver } from './mutations/update-customer';
import { updateCustomerAddressResolver } from './mutations/update-customer-address';
import { cartResolver } from './queries/cart';
import { categoriesResolver } from './queries/categories';
import { cmsBlocksResolver } from './queries/cms-blocks';
import { cmsPageResolver } from './queries/cms-page';
import { countriesResolver } from './queries/countries';
import { customerResolver } from './queries/customer';
import { getSocialLinksResolver } from './queries/get-social-links';
import { isEmailAvailableResolver } from './queries/is-email-available';
import { keyMessagesResolver } from './queries/key-messages';
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
        customer: customerResolver,
        getSocialLinks: getSocialLinksResolver,
        isEmailAvailable: isEmailAvailableResolver,
        keyMessages: keyMessagesResolver,
        products: productsResolver,
        route: routeResolver,
        storeConfig: storeConfigResolver,
        storeLocations: storeLocationsResolver,
    },
    Mutation: {
        addProductsToCart: addProductsToCartResolver,
        addProductsToWishlist: addProductsToWishlistResolver,
        applyCouponToCart: applyCouponToCartResolver,
        applyGiftCardToCart: applyGiftCardToCartResolver,
        changeCustomerPassword: changeCustomerPasswordResolver,
        createCustomer: createCustomerResolver,
        createCustomerAddress: createCustomerAddressResolver,
        createEmptyCart: createEmptyCartResolver,
        deleteCustomerAddress: deleteCustomerAddressResolver,
        generateCustomerToken: generateCustomerTokenResolver,
        mergeCarts: mergeCartsResolver,
        removeItemFromCart: removeItemFromCartResolver,
        setGuestEmailOnCart: setGuestEmailOnCartResolver,
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
