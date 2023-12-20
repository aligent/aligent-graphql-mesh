import { CmsBlock, CmsBlocks } from '@aligent/orocommerce-resolvers';
import { Injectable } from 'graphql-modules';
import { OroCmsBlock } from '../../types/cms-blocks';
import { ChainTransformer, Transformer, TransformerContext } from '@aligent/utils';

@Injectable({
    global: true,
})
export class CmsBlocksTransformerChain extends ChainTransformer<OroCmsBlock[], CmsBlocks> {}

@Injectable()
export class CmsBlocksTransformer implements Transformer<OroCmsBlock[], CmsBlocks> {
    public transform(context: TransformerContext<OroCmsBlock[], CmsBlocks>): CmsBlocks {
        return {
            __typename: 'CmsBlocks',
            items: context.data.map((oroBlock: OroCmsBlock): CmsBlock => {
                const attrs = oroBlock.attributes;
                return {
                    __typename: 'CmsBlock',
                    content: attrs.content,
                    identifier: attrs.identifier,
                    title: attrs.title,
                };
            }),
        };
    }
}
