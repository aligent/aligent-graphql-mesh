import { CountryCodeEnum, CustomerOrder, CustomerOrders } from '@aligent/orocommerce-resolvers';
import { Injectable } from 'graphql-modules';
import { ChainTransformer, Transformer, TransformerContext } from '@aligent/utils';
import { Countries, Entity, Order, OrderAddress } from '../../types';
import { CountryRegion } from '../../types/order';

type OroOrder = {
    data: Order[];
    included?: Entity[] | undefined;
};

@Injectable()
export class CustomerOrdersTransformerChain extends ChainTransformer<OroOrder, CustomerOrders> {}

@Injectable()
export class CustomerOrdersTransfomer implements Transformer<OroOrder, CustomerOrders> {
    public transform(context: TransformerContext<OroOrder, CustomerOrders>): CustomerOrders {
        const orders = context.data;

        const items = orders.data.map((order): CustomerOrder => {
            const billingAddressId = order.relationships?.billingAddress.data.id;
            const shippingAddressId = order.relationships?.shippingAddress.data.id;

            const billingAddress = orders.included?.find((entity: Entity) => {
                return entity.id === billingAddressId;
            }) as OrderAddress;

            const shippingAddress = orders.included?.find((entity) => {
                return entity.id === shippingAddressId;
            }) as OrderAddress;

            const billingAddressCountry = orders.included?.find((entity) => {
                return billingAddress.relationships.country.data.id === entity.id;
            }) as Countries;

            const shippingAddressCountry = orders.included?.find((entity) => {
                return shippingAddress?.relationships?.country.data.id === entity.id;
            }) as Countries;

            const billingAddressRegion = orders.included?.find((entity) => {
                return billingAddress?.relationships.region.data.id === entity.id;
            }) as CountryRegion;

            const shippingAddressRegion = orders.included?.find((entity) => {
                return shippingAddress?.relationships.region.data.id === entity.id;
            }) as CountryRegion;

            const paymentMethods = order.attributes.paymentMethod.map(paymentMethod => {
                return {
                    name: paymentMethod.label,
                    type: paymentMethod.code
                }
            })

            return {
                id: order.id,
                created_at: order.attributes.createdAt,
                grand_total: Number(order.attributes.totalValue),
                increment_id: order.attributes.identifier,
                number: order.attributes.identifier,
                order_date: order.attributes.createdAt,
                order_number: order.attributes.identifier,
                shipping_method: order.attributes.shippingMethod.label,
                currency_code: order.attributes.currency,
                deliveryInstructions: {
                    authorityToLeave: null,
                    instructions: order.attributes.customerNotes
                },
                payment_methods: paymentMethods,
                billing_address: {
                    firstname: billingAddress.attributes.firstName,
                    lastname: billingAddress.attributes.lastName,
                    middlename: billingAddress.attributes.middleName,
                    street: [billingAddress.attributes.street, billingAddress.attributes.street2],
                    city: billingAddress.attributes.city,
                    postcode: billingAddress.attributes.postalCode,
                    company: billingAddress.attributes.organization,
                    prefix: billingAddress.attributes.namePrefix,
                    suffix: billingAddress.attributes.nameSuffix,
                    telephone: billingAddress.attributes.phone,
                    region: billingAddressRegion.attributes.name,
                    region_id: billingAddressRegion.id,
                    country_code: billingAddressCountry.id as CountryCodeEnum,
                    vat_id: '',
                    fax: '',
                },
                shipping_address: {
                    firstname: shippingAddress.attributes.firstName,
                    lastname: shippingAddress.attributes.lastName,
                    middlename: shippingAddress.attributes.middleName,
                    street: [shippingAddress.attributes.street, shippingAddress.attributes.street2],
                    city: shippingAddress.attributes.city,
                    postcode: shippingAddress.attributes.postalCode,
                    company: shippingAddress.attributes.organization,
                    prefix: shippingAddress.attributes.namePrefix,
                    suffix: shippingAddress.attributes.nameSuffix,
                    telephone: shippingAddress.attributes.phone,
                    region: shippingAddressRegion.attributes.name,
                    region_id: shippingAddressRegion.id,
                    country_code: shippingAddressCountry.id as CountryCodeEnum,
                    vat_id: '',
                    fax: '',
                },

                state: '', // OTF-86
                status: '', // OTF-86
                printed_card_included: false,
                gift_receipt_included: false,
                carrier: '',
                total: null,
                returns: null,
                gift_message: null,
                gift_wrapping: null,
                items: [],
                comments: [],
                invoices: [],
                shipments: [],
                credit_memos: [],
                items_eligible_for_return: [],
            };
        });

        return {
            items: items,
            page_info: {
                current_page: 0,
                page_size: 1,
                total_pages: 1,
            },
            total_count: 1,
        };
    }
}
