import { CartItemInput } from '@mesh';
import { BCOrderLineItem } from '../types';

export const transformRestCartLineItems = (lineItem: BCOrderLineItem): CartItemInput => ({
    quantity: lineItem.quantity,
    uid: btoa(`Product:${lineItem.product_id}`), // e.g. UHJvZHVjdDoxMDc= -> Product:107
    sku: btoa(`Sku:${lineItem.sku}`), // e.g. U2t1OkRQQg== -> Sku:DPB
    selected_options: lineItem.product_options.map((option) => {
        return btoa(['configurable', option.option_id, option.product_option_id].join('/'));
    }),
});
