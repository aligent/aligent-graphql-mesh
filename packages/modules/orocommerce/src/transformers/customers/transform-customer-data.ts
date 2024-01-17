import { ChainTransformer, Transformer, TransformerContext } from '@aligent/utils';
import { Customer, CustomerAddress } from '@aligent/orocommerce-resolvers';
import { CustomerUser, OroCustomerAddress } from '../../types';

import { Injectable } from 'graphql-modules';

@Injectable({
    global: true,
})
export class OroCustomerTransformerChain extends ChainTransformer<
    { oroCustomer: CustomerUser; oroAddresses: OroCustomerAddress[] | undefined },
    Customer
> {}

@Injectable()
export class OroCustomerTransformer
    implements
        Transformer<
            { oroCustomer: CustomerUser; oroAddresses: OroCustomerAddress[] | undefined },
            Customer
        >
{
    constructor(
        protected addressesChain: Transformer<OroCustomerAddress[] | undefined, CustomerAddress[]>
    ) {}

    public transform(
        context: TransformerContext<
            { oroCustomer: CustomerUser; oroAddresses: OroCustomerAddress[] | undefined },
            Customer
        >
    ): Customer {
        const { firstName, lastName, email } = context.data.oroCustomer.attributes;

        return {
            addresses: this.addressesChain.transform({ data: context.data.oroAddresses }),
            email,
            firstname: firstName,
            lastname: lastName,
            is_subscribed: null,
            allow_remote_shopping_assistance: false,
        };
    }
}
