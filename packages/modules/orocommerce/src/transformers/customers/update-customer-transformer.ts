import { ChainTransformer, Transformer, TransformerContext } from '@aligent/utils';
import { Injectable } from 'graphql-modules';
import { UpdateCustomer } from '../../types';
import { CustomerInput } from '@aligent/orocommerce-resolvers';

@Injectable({
    global: true
})
export class UpdateCustomerTransformerChain extends ChainTransformer<
    CustomerInput,
    UpdateCustomer
> {}

@Injectable()
export class UpdateCustomerTransformer implements Transformer<CustomerInput, UpdateCustomer> {
    public transform(context: TransformerContext<CustomerInput, UpdateCustomer>): UpdateCustomer {
        const customerInput = context.data;

        return {
            type: 'customerusers',
            id: 'mine',
            attributes: {
                email: customerInput.email || undefined,
                firstName: customerInput.firstname || undefined,
                lastName: customerInput.lastname || undefined,
            },
        };
    }
}
