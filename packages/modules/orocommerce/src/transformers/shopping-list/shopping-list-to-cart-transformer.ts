import { Transformer, TransformerContext } from '@aligent/utils';
import { IncludedProduct, ShoppingListItem, ShoppingListWithItems } from '../../types';
import { Cart, CurrencyEnum, Money } from '@aligent/orocommerce-resolvers';
import { Injectable } from 'graphql-modules';

const UNDEFINED_CART: Cart = {
    id: '',
    items: [],
    total_quantity: 0,
    available_gift_wrappings: [],
    gift_receipt_included: false,
    is_virtual: false,
    printed_card_included: false,
    shipping_addresses: [],
};

@Injectable()
export class ShoppingListToCartTransformer implements Transformer<ShoppingListWithItems, Cart> {
    getIncludedShoppingListItems(
        shoppingListWithItemsIncluded: (ShoppingListItem | IncludedProduct)[]
    ): ShoppingListItem[] {
        return shoppingListWithItemsIncluded.filter(
            (listItem) => listItem.type === 'shoppinglistitems'
        ) as ShoppingListItem[];
    }

    getIncludedProducts(
        shoppingListWithItemsIncluded: (ShoppingListItem | IncludedProduct)[]
    ): IncludedProduct[] {
        return shoppingListWithItemsIncluded.filter(
            (listItem) => listItem.type === 'products'
        ) as IncludedProduct[];
    }

    getProductType(product: IncludedProduct): 'ConfigurableProduct' | 'SimpleProduct' {
        if (product.attributes.productType === 'simple') {
            return 'SimpleProduct';
        }
        return 'ConfigurableProduct';
    }

    transform(context: TransformerContext<ShoppingListWithItems, Cart>): Cart {
        const shoppingList = context.data;
        const cart = { ...UNDEFINED_CART };
        cart.id = shoppingList.data.id;
        cart.total_quantity = shoppingList.included.length || 0;
        cart.prices = {
            grand_total: {
                currency: shoppingList.data.attributes.currency as CurrencyEnum,
                value: Number(shoppingList.data.attributes.total),
            },
        };

        const shoppingListItems = this.getIncludedShoppingListItems(shoppingList.included);

        const products = this.getIncludedProducts(shoppingList.included);

        for (const product of products) {
            const relatedShoppingListItem = shoppingListItems.find(
                (item) => item.relationships.product.data.id === product.id
            );
            if (!relatedShoppingListItem)
                throw new Error(
                    `Could not find related shopping list item to product id: ${product.id}`
                );

            // This previously was being taken from the shoppinglistitems type
            const prodPrice: Money = {
                currency: product.attributes.prices[0].currencyId as CurrencyEnum,
                value: Number(product.attributes.prices[0].price),
            };

            cart.items?.push({
                __typename: 'SimpleCartItem',
                id: product.id,
                quantity: relatedShoppingListItem.attributes.quantity,
                uid: btoa(product.id),
                available_gift_wrapping: [],
                customizable_options: [],
                prices: {
                    price: prodPrice,
                    price_including_tax: prodPrice,
                    row_total: prodPrice,
                    row_total_including_tax: prodPrice,
                },
                product: {
                    __typename: this.getProductType(product), // This works however doesnt give the correct typ
                    id: Number(product.id),
                    name: product.attributes.name,
                    sku: product.attributes.sku,
                    small_image: {
                        url: product.relationships.images.links.self, // This is currently the url for the API endpoint with images data
                    },
                    redirect_code: 0,
                    price_range: {
                        minimum_price: {
                            final_price: prodPrice,
                            regular_price: prodPrice,
                            discount: {
                                amount_off: 0, // TODO
                            },
                        },
                        maximum_price: {
                            final_price: prodPrice,
                            regular_price: prodPrice,
                        },
                    },
                    stock_status: 'IN_STOCK', // Not sure about this, was able to add an out of stock item to the shoppinglist
                    url_key: product.attributes.url,
                    custom_attributes: [],
                    review_count: 0,
                    reviews: { items: [], page_info: {} },
                    rating_summary: 0,
                    staged: false,
                    uid: btoa(product.id),
                },
            });
        }

        return cart;
    }
}
