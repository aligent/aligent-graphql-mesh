import { ChainTransformer, Transformer, TransformerContext } from '@aligent/utils';
import { CustomerAddress, CountryCodeEnum } from '@aligent/orocommerce-resolvers';
import { OroCustomerAddress } from '../../types';
import { Injectable } from 'graphql-modules';

@Injectable({
    global: true,
})
export class OroAddressesTransformerChain extends ChainTransformer<
    OroCustomerAddress[] | undefined,
    CustomerAddress[]
> {}

@Injectable()
export class OroAddressesTransformer
    implements Transformer<OroCustomerAddress[] | undefined, CustomerAddress[]>
{
    public transform(
        context: TransformerContext<OroCustomerAddress[] | undefined, CustomerAddress[]>
    ): CustomerAddress[] {
        if (!context.data) {
            return [];
        }
        return context.data.map((address) => {
            const defaultBilling = address.attributes.types?.find(
                (type) => type.addressType === 'billing'
            );

            const defaultShipping = address.attributes.types?.find(
                (type) => type.addressType === 'shipping'
            );
            return {
                id: address.id ? parseInt(address.id) : null,
                street: [address.attributes.street, address.attributes.street2 || null],
                city: address.attributes.city,
                company: address.attributes.organization,
                country_code: address.relationships.country.data.id as CountryCodeEnum,
                firstname: address.attributes.firstName,
                lastname: address.attributes.lastName,
                telephone: address.attributes.phone,
                postcode: address.attributes.postalCode,
                region: {
                    region: null,
                    region_id: null,
                    region_code: address.relationships.region.data.id,
                },
                default_billing: defaultBilling ? defaultBilling.default : false,
                default_shipping: defaultShipping ? defaultShipping.default : false,
            };
        });
    }
}
