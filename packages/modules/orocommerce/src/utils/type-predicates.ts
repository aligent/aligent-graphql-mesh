import { ShoppingListItem, ShoppingListWithItemsIncluded } from '../types/shopping-list';
import { Product, Category, ProductImage, InventoryStatus } from '../types/product';

export const isShoppingListItem = (
    item: ShoppingListWithItemsIncluded
): item is ShoppingListItem => {
    return item.type === 'shoppinglistitems';
};

export const isProduct = (item: ShoppingListWithItemsIncluded): item is Product => {
    return item.type === 'products';
};

export const isProductImage = (item: ShoppingListWithItemsIncluded): item is ProductImage => {
    return item.type === 'productimages';
};

export const isProductCategory = (item: ShoppingListWithItemsIncluded): item is Category => {
    return item.type === 'mastercatalogcategories';
};
