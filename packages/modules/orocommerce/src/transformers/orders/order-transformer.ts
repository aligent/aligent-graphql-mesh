import {
    CountryCodeEnum,
    CurrencyEnum,
    CustomerOrder,
    CustomerOrders,
    Discount,
} from '@aligent/orocommerce-resolvers';
import { Injectable } from 'graphql-modules';
import { ChainTransformer, Transformer, TransformerContext } from '@aligent/utils';
import { Countries, Entity, Order, OrderAddress } from '../../types';
import { CountryRegion, OrderLineItem } from '../../types/order';

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
            const lineItemsId = order.relationships?.lineItems.data.map((lineItem) => lineItem.id);

            const billingAddress = orders.included?.find((entity: Entity) => {
                return entity.id === billingAddressId && entity.type === 'orderaddresses';
            }) as OrderAddress;

            const shippingAddress = orders.included?.find((entity) => {
                return entity.id === shippingAddressId && entity.type === 'orderaddresses';
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

            const lineItems = orders.included?.filter((entity) => {
                return lineItemsId.includes(entity.id) && entity.type === 'orderlineitems';
            }) as OrderLineItem[];

            const comments = lineItems.map((lineItem) => {
                return {
                    message: lineItem.attributes.comment,
                    timestamp: '',
                };
            });

            const paymentMethods = order.attributes.paymentMethod.map((paymentMethod) => {
                return {
                    name: paymentMethod.label,
                    type: paymentMethod.code,
                };
            });

            const carrier = order.attributes.shippingTrackings[0]?.method;

            const orderDiscounts = order.attributes.discounts.reduce(
                (discounts: Discount[], discount) => {
                    if (discount.type === 'order' || discount.type === 'promotion.order') {
                        discounts.push({
                            code: discount.description,
                            label: discount.description,
                            amount: {
                                value: Number(discount.amount),
                                currency: currency,
                            },
                        });
                    }

                    return discounts;
                },
                []
            );

            const currency = order.attributes.currency as CurrencyEnum;

            return {
                id: order.id,
                created_at: order.attributes.createdAt,
                grand_total: Number(order.attributes.totalValue),
                increment_id: order.attributes.identifier,
                number: order.attributes.identifier,
                order_date: order.attributes.createdAt,
                order_number: order.attributes.identifier,
                shipping_method: order.attributes.shippingMethod.label,
                carrier: carrier,
                currency_code: order.attributes.currency,
                deliveryInstructions: {
                    authorityToLeave: null,
                    instructions: order.attributes.customerNotes,
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
                total: {
                    discounts: orderDiscounts,
                    base_grand_total: {
                        currency: currency,
                        value: Number(order.attributes.totalValue),
                    },
                    grand_total: {
                        currency: currency,
                        value: Number(order.attributes.totalValue),
                    },
                    grand_total_excl_tax: {
                        currency: currency,
                        value: Number(order.attributes.totalExcludingTax),
                    },
                    subtotal: {
                        currency: currency,
                        value: Number(order.attributes.subtotalValue),
                    },
                    total_shipping: {
                        currency: currency,
                        value: Number(order.attributes.shippingCostAmount),
                    },
                    total_tax: {
                        currency: currency,
                        value: Number(order.attributes.totalTaxAmount),
                    },
                    shipping_handling: null,
                    subtotal_incl_tax: null,
                    total_giftcard: null,
                    taxes: [],
                },
                returns: null, // OTF-120
                gift_message: null,
                gift_wrapping: null,
                items: [],
                comments: comments,
                invoices: [], // OTF-122
                shipments: [], // OTF-121
                credit_memos: [], // OTF-119
                items_eligible_for_return: [], // OTF-120
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
