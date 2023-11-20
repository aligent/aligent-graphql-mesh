import { Transformer, TransformerContext, logAndThrowError, btoa } from '@aligent/utils';
import {
    ImageFiles,
    IncludedProduct,
    IncludedProductCategory,
    IncludedProductImages,
    ShoppingListItem,
    ShoppingListWithItems,
    ShoppingListWithItemsIncluded,
} from '../../types';
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
    isShoppingListItem(item: ShoppingListWithItemsIncluded): item is ShoppingListItem {
        return item.type === 'shoppinglistitems';
    }

    isProduct(item: ShoppingListWithItemsIncluded): item is IncludedProduct {
        return item.type === 'products';
    }

    isProductImage(item: ShoppingListWithItemsIncluded): item is IncludedProductImages {
        return item.type === 'productimages';
    }

    isProductCategory(item: ShoppingListWithItemsIncluded): item is IncludedProductCategory {
        return item.type === 'mastercatalogcategories';
    }

    getMoneyData(currency: string, price: string | number): Money {
        return {
            currency: currency as CurrencyEnum,
            value: Number(price),
        };
    }

    getImageByDimension(
        images: IncludedProductImages[] | undefined,
        productId: string,
        imageDimension: string
    ): ImageFiles | undefined {
        const productImages = images?.find(
            (item) => item.relationships.product.data.id === productId
        );
        if (!productImages)
            return logAndThrowError(
                `Could not find related product image to product id: ${productId}`
            );

        const foundImage = productImages.attributes.files.find(
            (image) => image.dimension === imageDimension
        );

        return foundImage;
    }

    transform(context: TransformerContext<ShoppingListWithItems, Cart>): Cart {
        const shoppingList = context.data;
        const cart = { ...UNDEFINED_CART };
        cart.id = shoppingList.data.id;
        cart.total_quantity = shoppingList.included?.length || 0;

        const currency = shoppingList.data.attributes.currency as string;
        cart.prices = {
            grand_total: this.getMoneyData(currency, Number(shoppingList.data.attributes.total)),
            applied_taxes: [
                // TODO taxes
                {
                    amount: {
                        currency: 'AUD',
                        value: 0,
                    },
                    label: 'Tax description',
                },
            ],
            subtotal_including_tax: {
                currency: 'AUD',
                value: 0,
            },
        };
        // cart.free_shipping_details = free_shipping_details -> TODO
        // ...CheckoutCartFragment @include(if: $isInCheckout -> TODO

        const shoppingListItems = shoppingList.included?.filter(this.isShoppingListItem);
        const products = shoppingList.included?.filter(this.isProduct);
        const productsImages = shoppingList.included?.filter(this.isProductImage);
        const productsCategories = shoppingList.included?.filter(this.isProductCategory);
        if (!products || !shoppingListItems) {
            return logAndThrowError(
                `Could not find products or shoppingListItems included in cart ID: ${cart.id}`
            );
        }

        for (const product of products) {
            const relatedShoppingListItem = shoppingListItems.find(
                (item) => item.relationships?.product.data.id === product.id
            );
            if (!relatedShoppingListItem)
                return logAndThrowError(
                    `Could not find related shopping list item to product id: ${product.id}`
                );

            const productCategories = productsCategories?.find(
                (item) => item.relationships.categoryPath.data.id === product.id
            );

            if (!productCategories)
                return logAndThrowError(
                    `Could not find related product categories to product id: ${product.id}`
                );

            const [smallImage, originalImage] = [
                this.getImageByDimension(productsImages, product.id, 'product_small'),
                this.getImageByDimension(productsImages, product.id, 'product_original'),
            ];

            const productAttributes = product.attributes;
            // This previously was being taken from the shoppinglistitems type
            const price = this.getMoneyData(
                productAttributes.prices[0].currencyId,
                productAttributes.prices[0].price
            );

            cart.items?.push({
                __typename: 'SimpleCartItem',
                id: product.id,
                quantity: relatedShoppingListItem.attributes.quantity,
                uid: btoa(product.id),
                available_gift_wrapping: [],
                customizable_options: [],
                prices: {
                    price,
                    price_including_tax: price,
                    row_total: price,
                    row_total_including_tax: price,
                },
                product: {
                    __typename: 'SimpleProduct',
                    id: Number(product.id),
                    name: productAttributes.name,
                    sku: productAttributes.sku,
                    image: {
                        url: originalImage?.url,
                        label: originalImage?.dimension,
                    },
                    small_image: {
                        url: smallImage?.url,
                        label: smallImage?.dimension,
                    },
                    categories: [
                        {
                            id: Number(productCategories.id),
                            breadcrumbs: [
                                // Not sure about this in ORO
                                {
                                    category_uid: btoa(productCategories.id),
                                    category_name: productCategories.attributes.title,
                                },
                            ],
                            uid: btoa(productCategories.id),
                            staged: true, // Couldnt see equivalent value in ORO
                            name: productCategories.attributes.title,
                            level: 1, // Couldnt see equivalent value in ORO
                            redirect_code: 0, // Couldnt see equivalent value in ORO
                            description: String(productCategories.attributes.description),
                            url_path: productCategories.attributes.url,
                            image: productCategories.attributes.images[0].url,
                        },
                    ],
                    canonical_url: productAttributes.url,
                    description: productAttributes.description,
                    short_description: productAttributes.shortDescription,
                    meta_description: productAttributes.metaDescription,
                    meta_keyword: productAttributes.metaKeywords,
                    meta_title: productAttributes.metaTitle,
                    redirect_code: 0,
                    price_range: {
                        minimum_price: {
                            final_price: price,
                            regular_price: price,
                            discount: {
                                // TODO
                                amount_off: 0,
                            },
                        },
                        maximum_price: {
                            final_price: price,
                            regular_price: price,
                        },
                    },
                    stock_status: 'IN_STOCK', // Not sure about this, was able to add an out of stock item to the shoppinglist
                    url_key: productAttributes.url,
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
