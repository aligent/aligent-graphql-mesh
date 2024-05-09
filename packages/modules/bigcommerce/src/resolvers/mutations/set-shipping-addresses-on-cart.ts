import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { getBcCustomerId } from '../../utils';
import { retrieveCustomerImpersonationTokenFromCache } from '../../apis/rest';
import { GraphqlError } from '@aligent/utils';
import { getCheckout } from '../../apis/graphql';
import { customerResolver } from '../queries/customer';
import { customerAddressToCartAddress } from '../../factories/helpers/transform-customer-addresses';
import {
    getTransformedAddShippingConsignmentArgs,
    getTransformedUpdateShippingConsignmentArgs,
} from '../../factories/transform-shipping-consignment-args';
import { setCheckoutShippingConsignment } from '../../apis/graphql/checkout-shipping-consignments';
import { getEnrichedCartAfterCheckoutMutation } from '../../apis/graphql/helpers/get-enriched-cart-after-checkout-mutation';

export const setShippingAddressesOnCartResolver: MutationResolvers['setShippingAddressesOnCart'] = {
    resolve: async (root, args, context, info) => {
        const bcCustomerId = getBcCustomerId(context);
        const customerImpersonationToken =
            await retrieveCustomerImpersonationTokenFromCache(context);

        if (!args?.input?.cart_id) {
            throw new GraphqlError('Cart id is missing', 'input');
        }

        const { shipping_addresses, cart_id } = args.input;

        if (!shipping_addresses[0]) {
            throw new GraphqlError('Shipping address is missing', 'input');
        }

        const bcCheckout = await getCheckout(
            args.input.cart_id,
            bcCustomerId,
            customerImpersonationToken
        );

        const { cart, shippingConsignments } = bcCheckout;

        if (!cart) {
            throw new GraphqlError('Cart data is missing', 'input');
        }

        let acShippingAddress = shipping_addresses[0];

        if (shipping_addresses[0].customer_address_id) {
            const currentCustomerInfo = await customerResolver.resolve(root, {}, context, info);

            const { addresses } = currentCustomerInfo;

            acShippingAddress = {
                ...acShippingAddress,
                address: customerAddressToCartAddress(
                    addresses?.find(
                        (address) =>
                            address && address.id === shipping_addresses[0]?.customer_address_id
                    )
                ),
            };
        }

        const hasShippingConsignmentAttached = !!shippingConsignments?.[0];

        const transformedShippingConsignmentArgs = hasShippingConsignmentAttached
            ? getTransformedUpdateShippingConsignmentArgs(
                  cart_id,
                  shippingConsignments[0].entityId,
                  acShippingAddress,
                  cart?.lineItems
              )
            : getTransformedAddShippingConsignmentArgs(cart_id, acShippingAddress, cart?.lineItems);

        const shippingConsignmentMutation = () =>
            setCheckoutShippingConsignment(
                transformedShippingConsignmentArgs,
                hasShippingConsignmentAttached,
                customerImpersonationToken,
                bcCustomerId
            );

        const enrichedCart = await getEnrichedCartAfterCheckoutMutation(
            shippingConsignmentMutation,
            args?.input?.cart_id,
            context,
            info,
            bcCustomerId
        );

        return {
            cart: enrichedCart,
        };
    },
};
