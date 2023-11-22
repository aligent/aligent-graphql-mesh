import {
    IncludedProduct,
    IncludedProductCategory,
    IncludedProductImages,
    ShoppingListItem,
    ShoppingListWithItemsIncluded,
} from '../types/shopping-list';

export const isShoppingListItem = (
    item: ShoppingListWithItemsIncluded
): item is ShoppingListItem => {
    return item.type === 'shoppinglistitems';
};

export const isProduct = (item: ShoppingListWithItemsIncluded): item is IncludedProduct => {
    return item.type === 'products';
};

export const isProductImage = (
    item: ShoppingListWithItemsIncluded
): item is IncludedProductImages => {
    return item.type === 'productimages';
};

export const isProductCategory = (
    item: ShoppingListWithItemsIncluded
): item is IncludedProductCategory => {
    return item.type === 'mastercatalogcategories';
};
