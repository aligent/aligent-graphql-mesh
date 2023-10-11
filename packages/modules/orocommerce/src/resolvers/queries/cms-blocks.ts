import { QueryResolvers } from '@aligent/orocommerce-resolvers';
import { CmsBlocksTransformerChain } from '../../transformers/cms-blocks/cms-blocks-transformer';
import { CmsBlocksClient } from '../../apis/rest/cms-blocks-api-client';

export const cmsBlocksResolver: QueryResolvers['cmsBlocks'] = {
    resolve: async (_root, args, context, _info) => {
        const { identifiers } = args as { identifiers: string[] };

        const api: CmsBlocksClient = context.injector.get(CmsBlocksClient);
        const oroBlocks = await api.getCmsBlocks(identifiers);

        const transformer: CmsBlocksTransformerChain =
            context.injector.get(CmsBlocksTransformerChain);

        return transformer.transform({ data: { blocks: oroBlocks } });
    },
};
