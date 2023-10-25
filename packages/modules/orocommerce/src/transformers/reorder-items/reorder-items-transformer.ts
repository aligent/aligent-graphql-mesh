import { ReorderItemsOutput } from '@aligent/orocommerce-resolvers';
import { ChainTransformer, Transformer, TransformerContext } from '@aligent/utils';
import { Injectable } from 'graphql-modules';

@Injectable()
export class ReorderItemsTransformerChain extends ChainTransformer<
    ReorderItemsOutput,
    ReorderItemsOutput
> {}

@Injectable()
export class ReorderItemsTransformer
    implements Transformer<ReorderItemsOutput, ReorderItemsOutput>
{
    public transform(
        context: TransformerContext<ReorderItemsOutput, ReorderItemsOutput>
    ): ReorderItemsOutput {
        return context.data;
    }
}
