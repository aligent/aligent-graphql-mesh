import { ProductImageResolvers } from '@aligent/bigcommerce-resolvers';
import { retrieveStoreConfigsFromCache } from '../../../apis/graphql';

export const smallImageResolver = {
    resolve: async (root, _args, context, _info) => {
        const storeConfig = await retrieveStoreConfigsFromCache(context);
        const { fallback_product_image_url } = storeConfig;

        /* If defined returns the product image url or returns a fallback image */
        return root.url || fallback_product_image_url;
    },
} satisfies ProductImageResolvers['url'];
