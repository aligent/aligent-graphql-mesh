import { ChainTransformer, Transformer, TransformerContext } from '@aligent/utils';
import { CustomerAddressValidated, OroCustomerAddressInput } from '../../types';
import { Injectable } from 'graphql-modules';

@Injectable()
export class CustomerAddressTransformerChain extends ChainTransformer<
    CustomerAddressValidated,
    OroCustomerAddressInput
> {}

@Injectable()
export class CustomerAddressTransformer
    implements Transformer<CustomerAddressValidated, OroCustomerAddressInput>
{
    public transform(
        context: TransformerContext<CustomerAddressValidated, OroCustomerAddressInput>
    ): OroCustomerAddressInput {
        const {
            postcode,
            city,
            country_code,
            default_billing,
            default_shipping,
            firstname,
            lastname,
            street,
            company,
            telephone,
            region,
        } = context.data;

        return {
            type: 'customeruseraddresses',
            attributes: {
                city: city,
                firstName: firstname,
                lastName: lastname,
                organization: company || null,
                postalCode: postcode,
                street: street[0],
                street2: street[1] || null,
                phone: telephone || null,
                types: [
                    {
                        default: default_billing || false,
                        addressType: 'billing',
                    },
                    {
                        default: default_shipping || false,
                        addressType: 'shipping',
                    },
                ],
            },
            relationships: {
                country: {
                    data: {
                        type: 'countries',
                        id: country_code,
                    },
                },
                customerUser: {
                    data: {
                        type: 'customerusers',
                        id: 'mine',
                    },
                },
                region: {
                    data: {
                        type: 'regions',
                        id: region.region_id ? region.region_id.toString() : `${region.region}`,
                    },
                },
            },
        };
    }
}
