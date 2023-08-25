import { CartItemInput } from '@mesh';
import { BCOrderLineItem } from '../types';

export const transformRestCartLineItems = (lineItem: BCOrderLineItem): CartItemInput => ({
    quantity: lineItem.quantity,
    uid: btoa(`Product:${lineItem.product_id}`),
    sku: btoa(`Variant:${lineItem.variant_id}`),
    selected_options: lineItem.product_options.map((option) => {
        return btoa(['configurable', option.option_id, option.product_option_id].join('/'));
    }),
});
