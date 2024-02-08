import { Resolvers } from '@aligent/orocommerce-resolvers';
import { storeConfigResolver } from './queries/store-config';
import { countriesResolver } from './queries/country';
import { createCartRedirectUrlsResolver } from './mutations/create-cart-redirect-urls';
import { generateCustomerTokenMutation } from './mutations/generate-customer-token';
import { currencyResolver } from './queries/currency';
import { keyMessagesResolver } from './queries/key-messages';
import { categoriesResolver } from './queries/categories';
import { createEmptyCartMutation } from './mutations/create-empty-cart';
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
import { updateCustomerMutation } from './mutations/update-customer';
import { productsResolver } from './queries/products';
import { addProductsToCartResolver } from './mutations/add-products-to-cart';
import { contactUsMutation } from './mutations/contact-us';
import { cartResolver } from './queries/cart';
import { updateCartItemsMutation } from './mutations/update-cart-items';
import { removeItemFromCartMutation } from './mutations/remove-item-from-cart';
import { isEmailAvailableResolver } from './queries/is-email-available';
import { requestPasswordResetEmailMutation } from './mutations/request-password-reset-email';
import { resetPasswordMutation } from './mutations/reset-password';
import { createRequisitionListMutation } from './mutations/create-requisition-list';
import { deleteRequisitionListMutation } from './mutations/delete-requisition-list';
import { customerCartResolver } from './queries/customer-cart';
import { breadcrumbsSubResolver } from './queries/sub-resolvers/breadcrumbs';
import { updateRequisitionListMutation } from './mutations/update-requisition-list';
import { RequisitionListsResolver } from './queries/sub-resolvers/requisition-lists';

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
        products: productsResolver,
        isEmailAvailable: isEmailAvailableResolver,
        customerCart: customerCartResolver,
    },
    Mutation: {
        addProductsToCart: addProductsToCartResolver,
        createCartRedirectUrls: createCartRedirectUrlsResolver,
        generateCustomerToken: generateCustomerTokenMutation,
        createEmptyCart: createEmptyCartMutation,
        contactUs: contactUsMutation,
        createCustomer: createCustomerMutation,
        reorderItems: reorderItemsResolver,
        deleteCustomerAddress: deleteCustomerAddressMutation,
        createCustomerAddress: createCustomerAddressMutation,
        login: loginMutation,
        updateCustomerAddress: updateCustomerAddressMutation,
        updateCartItems: updateCartItemsMutation,
        removeItemFromCart: removeItemFromCartMutation,
        updateCustomer: updateCustomerMutation,
        createRequisitionList: createRequisitionListMutation,
        updateRequisitionList: updateRequisitionListMutation,
        deleteRequisitionList: deleteRequisitionListMutation,
        requestPasswordResetEmail: requestPasswordResetEmailMutation,
        resetPassword: resetPasswordMutation,
    },
    //sub-resolvers, used for nested queries from a query or a mutation resolver
    CategoryTree: {
        breadcrumbs: breadcrumbsSubResolver,
    },
    Customer: {
        orders: customerOrdersResolver,
        requisition_lists: RequisitionListsResolver,
    },
};

export default resolvers;
