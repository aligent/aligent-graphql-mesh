import { CmsBlock, CmsBlocks } from '@aligent/orocommerce-resolvers';
import { Injectable } from 'graphql-modules';
import { OroCmsBlock } from '../../types/cms-blocks';
import {
    ChainTransformer,
    Transformer,
    TransformerContext,
} from '../../../../../utils/transformers';

export interface CmsBlocksTransformerInput {
    blocks: OroCmsBlock[];
}

@Injectable()
export class CmsBlocksTransformerChain extends ChainTransformer<
    CmsBlocksTransformerInput,
    CmsBlocks
> {}

@Injectable()
export class CmsBlocksTransformer implements Transformer<CmsBlocksTransformerInput, CmsBlocks> {
    public transform(context: TransformerContext<CmsBlocksTransformerInput, CmsBlocks>): CmsBlocks {
        return {
            __typename: 'CmsBlocks',
            items: context.data.blocks.map((oroBlock: OroCmsBlock): CmsBlock => {
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
