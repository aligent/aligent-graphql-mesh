import { ChainTransformer, Transformer, TransformerContext } from '@aligent/utils';
import { Customer as MagentoCustomer, CustomerAddress } from '@aligent/orocommerce-resolvers';
import { CustomerUser } from '../../types';

import { Injectable } from 'graphql-modules';

interface Customer {
    oroCustomer: CustomerUser;
    transformedAddresses: CustomerAddress[];
}

@Injectable()
export class OroCustomerTransformerChain extends ChainTransformer<Customer, MagentoCustomer> {}

@Injectable()
export class OroCustomerTransformer implements Transformer<Customer, MagentoCustomer> {
    public transform(context: TransformerContext<Customer, MagentoCustomer>): MagentoCustomer {
        const { firstName, lastName, email } = context.data.oroCustomer.attributes;

        return {
            addresses: context.data.transformedAddresses,
            email,
            firstname: firstName,
            lastname: lastName,
            is_subscribed: null,
            allow_remote_shopping_assistance: false,
        };
    }
}
