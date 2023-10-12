import { QueryResolvers } from '@aligent/orocommerce-resolvers';
import { CmsBlocksTransformerChain } from '../../transformers/cms-blocks/cms-blocks-transformer';
import { CmsBlockClient } from '../../apis/rest/cms-blocks-api-client';

export const cmsBlocksResolver: QueryResolvers['cmsBlocks'] = {
    resolve: async (_root, { identifiers }, context, _info) => {
        const api: CmsBlockClient = context.injector.get(CmsBlockClient);

        const oroBlocks = await api.getCmsBlocks(identifiers ?? []);

        const transformer: CmsBlocksTransformerChain =
            context.injector.get(CmsBlocksTransformerChain);

        return transformer.transform({ data: oroBlocks });
    },
};
