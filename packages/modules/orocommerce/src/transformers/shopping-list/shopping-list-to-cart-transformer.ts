import { Transformer, TransformerContext, logAndThrowError, btoa } from '@aligent/utils';
import { IncludedProductCategory, IncludedProductImages, ShoppingListWithItems } from '../../types';
import {
    Cart,
    CurrencyEnum,
    Money,
    SimpleCartItem,
    CartItemError,
    ProductImage,
    CategoryTree,
} from '@aligent/orocommerce-resolvers';
import { Injectable } from 'graphql-modules';
import {
    isShoppingListItem,
    isProduct,
    isProductImage,
    isProductCategory,
} from '../../utils/type-predicates';
import { UNDEFINED_CART } from './constants';
import { getEncodedCategoryUidFromCategoryData } from '../../utils';

@Injectable({
    global: true,
})
export class ShoppingListToCartTransformer implements Transformer<ShoppingListWithItems, Cart> {
    getMoneyData(currency: string, price: string | number): Money {
        return {
            currency: currency as CurrencyEnum,
            value: Number(price),
        };
    }

    getImageByDimension(
        images: IncludedProductImages[],
        productId: string,
        imageDimension: string
    ): ProductImage | undefined {
        const productImages = images.find(
            (item) => item.relationships.product.data.id === productId
        );
        if (!productImages)
            return logAndThrowError(
                `Could not find related product image to product id: ${productId}`
            );

        const foundImage = productImages.attributes.files.find(
            (image) => image.dimension === imageDimension
        );

        return {
            url: foundImage?.url,
            label: productImages.attributes.altText,
        };
    }

    getCategoriesData(productCategories: IncludedProductCategory[]): CategoryTree[] {
        return productCategories.map((productCategorie) => {
            const category = { type: productCategorie.type, id: productCategorie.id };
            return {
                __typename: 'CategoryTree',
                id: Number(productCategorie.id),
                uid: getEncodedCategoryUidFromCategoryData(category, productCategorie.id),
                staged: true, // Couldnt see equivalent value in ORO
                name: productCategorie.attributes.title,
                level: 1, // Couldnt see equivalent value in ORO
                redirect_code: 0, // Couldnt see equivalent value in ORO
                description: String(productCategorie.attributes.description),
                url_path: productCategorie.attributes.url,
                image: productCategorie.attributes.images[0]?.url,
            };
        });
    }

    transform(context: TransformerContext<ShoppingListWithItems, Cart>): Cart {
        const shoppingList = context.data;
        const cart = { ...UNDEFINED_CART };
        cart.id = shoppingList.data.id;
        cart.total_quantity = 0;

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

        const shoppingListItems = shoppingList.included?.filter(isShoppingListItem);
        const products = shoppingList.included?.filter(isProduct);
        const productsImages = shoppingList.included?.filter(isProductImage);
        const productsCategories = shoppingList.included?.filter(isProductCategory);
        if (!products || !shoppingListItems) {
            return logAndThrowError(
                `Could not find products or shoppingListItems included in cart ID: ${cart.id}`
            );
        }

        const items: SimpleCartItem[] = [];
        for (const product of products) {
            const errorMessage: CartItemError[] = [];
            const relatedShoppingListItem = shoppingListItems.find(
                (item) => item.relationships?.product.data.id === product.id
            );
            const itemShoppingListId =
                relatedShoppingListItem?.relationships?.shoppingList?.data.id;
            if (itemShoppingListId !== shoppingList.data.id) continue;
            if (!relatedShoppingListItem) {
                return logAndThrowError(
                    `Related ShoppingListItem not found for product: ${product.id} this data is required`
                );
            }

            const productCategories = productsCategories?.filter(
                (item) => item.id === product.relationships.category.data.id
            );

            if (!productCategories) {
                errorMessage.push({
                    message: `Related productCategories not found for product: ${product.id} `,
                    code: 'UNDEFINED',
                });
            }

            if (!productsImages) {
                errorMessage.push({
                    message: `Related productsImages not found for product: ${product.id} `,
                    code: 'UNDEFINED',
                });
            }

            const smallImage = productsImages
                ? this.getImageByDimension(productsImages, product.id, 'product_small')
                : null;

            const originalImage = productsImages
                ? this.getImageByDimension(productsImages, product.id, 'product_original')
                : null;

            const currency = relatedShoppingListItem.attributes.currency as string;
            const price = this.getMoneyData(
                currency,
                Number(relatedShoppingListItem.attributes.value)
            );

            const productAttributes = product.attributes;
            const quantity = relatedShoppingListItem.attributes.quantity;

            items.push({
                __typename: 'SimpleCartItem',
                id: product.id,
                quantity: quantity,
                uid: btoa(product.id),
                available_gift_wrapping: [],
                customizable_options: [],
                prices: {
                    price,
                    price_including_tax: price,
                    row_total: price,
                    row_total_including_tax: price,
                },
                errors: errorMessage,
                product: {
                    __typename: 'SimpleProduct',
                    id: Number(product.id),
                    name: productAttributes.name,
                    sku: productAttributes.sku,
                    image: originalImage,
                    small_image: smallImage,
                    categories: productCategories
                        ? this.getCategoriesData(productCategories)
                        : [],
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

            cart.total_quantity += quantity;
        }

        cart.items = items;

        return cart;
    }
}
