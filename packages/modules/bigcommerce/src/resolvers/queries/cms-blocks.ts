import { CmsPage, QueryResolvers } from '@aligent/bigcommerce-resolvers';
import { transformCmsPagesToCmsBlocks } from '../../factories/transform-cms-pages-to-cms-blocks';
import { cmsPageResolver } from './cms-page';

export const cmsBlocksResolver: QueryResolvers['cmsBlocks'] = {
    resolve: async (root, args, context, info) => {
        const { identifiers } = args as { identifiers: string[] };
        const response = await Promise.all(
            identifiers.map((identifier) =>
                cmsPageResolver.resolve(root, { identifier }, context, info)
            )
        );

        return {
            __typename: 'CmsBlocks',
            ...transformCmsPagesToCmsBlocks(response.filter(Boolean) as CmsPage[]),
        };
    },
};
