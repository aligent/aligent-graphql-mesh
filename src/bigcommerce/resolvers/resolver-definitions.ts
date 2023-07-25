import { Resolvers } from '../../meshrc/.mesh';
import { addProductsToCartResolver } from './mutations/add-products-to-cart';
import { addProductsToWishlistResolver } from './mutations/add-products-to-wishlist';
import { applyCouponToCartResolver } from './mutations/apply-coupon-to-cart';
import { applyGiftCardToCartResolver } from './mutations/apply-gift-card-to-cart';
import { changeCustomerPasswordResolver } from './mutations/change-customer-password';
import { createCustomerResolver } from './mutations/create-customer';
import { createEmptyCartResolver } from './mutations/create-empty-cart';
import { generateCustomerTokenResolver } from './mutations/generate-customer-token';
import { mergeCartsResolver } from './mutations/merge-carts';
import { removeItemFromCartResolver } from './mutations/remove-item-from-cart';
import { setGuestEmailOnCartResolver } from './mutations/set-guest-email-on-cart';
import { updateCartItemsResolver } from './mutations/update-cart-items';
import { updateCustomerResolver } from './mutations/update-customer';
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
        storeConfig: storeConfigResolver,
        products: productsResolver,
        // route: routeResolver,
        cmsPage: cmsPageResolver,
        cmsBlocks: cmsBlocksResolver,
        countries: countriesResolver,
        keyMessages: keyMessagesResolver,
        getSocialLinks: getSocialLinksResolver,
        cart: cartResolver,
        categories: categoriesResolver,
        isEmailAvailable: isEmailAvailableResolver,
        storeLocations: storeLocationsResolver,
        customer: customerResolver,
    },
    Mutation: {
        createEmptyCart: createEmptyCartResolver,
        setGuestEmailOnCart: setGuestEmailOnCartResolver,
        createCustomer: createCustomerResolver,
        generateCustomerToken: generateCustomerTokenResolver,
        mergeCarts: mergeCartsResolver,
        updateCustomer: updateCustomerResolver,
        changeCustomerPassword: changeCustomerPasswordResolver,
        addProductsToCart: addProductsToCartResolver,
        updateCartItems: updateCartItemsResolver,
        removeItemFromCart: removeItemFromCartResolver,
        addProductsToWishlist: addProductsToWishlistResolver,
        applyCouponToCart: applyCouponToCartResolver,
        applyGiftCardToCart: applyGiftCardToCartResolver,
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
