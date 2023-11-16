import { Resolvers } from '@aligent/orocommerce-resolvers';
import { storeConfigResolver } from './queries/store-config';
import { countriesResolver } from './queries/country';
import { generateCustomerTokenMutation } from './mutations/generate-customer-token';
import { currencyResolver } from './queries/currency';
import { keyMessagesResolver } from './queries/key-messages';
import { categoriesResolver } from './queries/categories';
import { breadcrumbsSubResolver } from './queries/sub-resolvers/breadcrumbs';
import { createEmptyCartMutation } from './mutations/create-empty-cart';
import { postContactFormMutation } from './mutations/contact';
import { cmsBlocksResolver } from './queries/cms-blocks';
import { cmsPageResolver } from './queries/cms-page';
import { storeLocationsResolver } from './queries/store-locations';
import { createCustomerMutation } from './mutations/create-customer';
import { reorderItemsResolver } from './mutations/reorder-items-mutation';
import { createCustomerAddressMutation } from './mutations/create-customer-address';
import { customerResolver } from './queries/customer';
import { customerOrdersResolver } from './queries/customer/orders';
import { deleteCustomerAddressMutation } from './mutations/delete-customer-address';
import { getSocialLinksResolver } from './queries/get-social-links';
import { loginMutation } from './mutations/login';
import { routeResolver } from './queries/route';
import { updateCustomerAddressMutation } from './mutations/update-customer-address';
import { addProductsToCartResolver } from './mutations/add-products-to-cart';
import { cartResolver } from './queries/cart';
import { removeItemFromCartMutation } from './mutations/remove-item-from-cart';

export const resolvers: Resolvers = {
    Query: {
        storeConfig: storeConfigResolver,
        cart: cartResolver,
        currency: currencyResolver,
        countries: countriesResolver,
        keyMessages: keyMessagesResolver,
        categories: categoriesResolver,
        cmsBlocks: cmsBlocksResolver,
        cmsPage: cmsPageResolver,
        storeLocations: storeLocationsResolver,
        customer: customerResolver,
        route: routeResolver,
        getSocialLinks: getSocialLinksResolver,
    },
    Mutation: {
        addProductsToCart: addProductsToCartResolver,
        generateCustomerToken: generateCustomerTokenMutation,
        createEmptyCart: createEmptyCartMutation,
        postContactForm: postContactFormMutation,
        createCustomer: createCustomerMutation,
        reorderItems: reorderItemsResolver,
        deleteCustomerAddress: deleteCustomerAddressMutation,
        createCustomerAddress: createCustomerAddressMutation,
        login: loginMutation,
        updateCustomerAddress: updateCustomerAddressMutation,
        removeItemFromCart: removeItemFromCartMutation,
    },
    //sub-resolvers, used for nested queries from a query or a mutation resolver
    CategoryTree: {
        breadcrumbs: breadcrumbsSubResolver,
    },
    Customer: {
        orders: customerOrdersResolver,
    },
};

export default resolvers;
