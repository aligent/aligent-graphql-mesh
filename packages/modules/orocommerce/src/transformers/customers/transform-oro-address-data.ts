import { ChainTransformer, Transformer, TransformerContext } from '@aligent/utils';
import { CustomerAddress, CountryCodeEnum } from '@aligent/orocommerce-resolvers';
import { OroCustomerAddress } from '../../types';
import { Injectable } from 'graphql-modules';

@Injectable({
    global: true
})
export class OroAddressTransformerChain extends ChainTransformer<
    OroCustomerAddress,
    CustomerAddress
> {}

@Injectable()
export class OroAddressTransformer implements Transformer<OroCustomerAddress, CustomerAddress> {
    public transform(
        context: TransformerContext<OroCustomerAddress, CustomerAddress>
    ): CustomerAddress {
        const customerAddress = context.data;

        return {
            id: parseInt(context.data.id),
            street: [customerAddress.attributes.street, customerAddress.attributes.street2 || null],
            city: customerAddress.attributes.city,
            company: customerAddress.attributes.organization,
            country_code: customerAddress.relationships.country.data.id as CountryCodeEnum,
            firstname: customerAddress.attributes.firstName,
            lastname: customerAddress.attributes.lastName,
            telephone: customerAddress.attributes.phone,
            postcode: customerAddress.attributes.postalCode,
            region: {
                region: null,
                region_id: null,
                region_code: customerAddress.relationships.region.data.id,
            },
            default_billing: customerAddress.attributes.types[0].default,
            default_shipping: customerAddress.attributes.types[1].default,
        };
    }
}
