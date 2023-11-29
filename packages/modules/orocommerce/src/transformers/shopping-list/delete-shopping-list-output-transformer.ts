import { Transformer, TransformerContext, ChainTransformer } from '@aligent/utils';
import { DeleteRequisitionListOutput } from '@aligent/orocommerce-resolvers';
import { Injectable } from 'graphql-modules';

@Injectable()
export class DeleteShoppingListOutputTransformerChain extends ChainTransformer<
    { status: boolean },
    DeleteRequisitionListOutput
> {}

@Injectable()
export class DeleteShoppingListOutputTransformer
    implements Transformer<{ status: boolean }, DeleteRequisitionListOutput>
{
    transform(
        context: TransformerContext<{ status: boolean }, DeleteRequisitionListOutput>
    ): DeleteRequisitionListOutput {
        return {
            status: context.data.status,
        };
    }
}
