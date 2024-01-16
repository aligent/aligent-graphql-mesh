import { QueryResolvers } from '@aligent/orocommerce-resolvers';
import { CmsBlocksTransformerChain } from '../../transformers/cms-blocks/cms-blocks-transformer';
import { CmsBlockClient } from '../../apis/rest/cms-blocks-api-client';
import { isNotNull } from '@aligent/utils';

export const cmsBlocksResolver: QueryResolvers['cmsBlocks'] = {
    resolve: async (_root, args, context, _info) => {
        const api: CmsBlockClient = context.injector.get(CmsBlockClient);

        const identifiers = (args.identifiers || []).filter(isNotNull);

        if (identifiers.length === 0) return null;

        const oroBlocks = await api.getCmsBlocks(identifiers);

        const transformer: CmsBlocksTransformerChain =
            context.injector.get(CmsBlocksTransformerChain);

        return transformer.transform({ data: oroBlocks });
    },
};
