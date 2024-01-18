import { CmsBlock, CmsBlocks } from '@aligent/orocommerce-resolvers';
import { Injectable } from 'graphql-modules';
import { OroCmsBlock } from '../../types/cms-blocks';
import { ChainTransformer, Transformer, TransformerContext } from '@aligent/utils';
import { updateImageSrcInHtml } from '../../utils';

@Injectable({
    global: true,
})
export class CmsBlocksTransformerChain extends ChainTransformer<OroCmsBlock[], CmsBlocks> {}

@Injectable()
export class CmsBlocksTransformer implements Transformer<OroCmsBlock[], CmsBlocks> {
    public transform(context: TransformerContext<OroCmsBlock[], CmsBlocks>): CmsBlocks {
        return {
            __typename: 'CmsBlocks',
            items: context.data.reduce((carry, oroBlock) => {
                const {alias, enabled, title, contentVariant} = oroBlock.attributes;

                if (!enabled) return carry;

                const {content, style} = contentVariant

                const htmlWithUpdatedImages = updateImageSrcInHtml(content, oroBlock.links.self);

                return [...carry,{
                    __typename: 'CmsBlock',
                    content: `${htmlWithUpdatedImages}<style>${style}</style>`,
                    identifier: alias,
                    title,
                }];
            }, [] as CmsBlock[]),
        };
    }
}
