import { ContactUsInput } from '@aligent/orocommerce-resolvers';
import { ContactRequest } from '../../types';
import { Injectable } from 'graphql-modules';
import { Transformer, TransformerContext } from '@aligent/utils';

@Injectable()
export class ContactUsInputToContactRequestTransformer
    implements Transformer<ContactUsInput, ContactRequest>
{
    transform(context: TransformerContext<ContactUsInput, ContactRequest>): ContactRequest {
        const contactInput = context.data;
        const nameComponents = contactInput.name.split(' ');
        // Oro has a limit of 100 characters for firstName, lastName and phone
        const firstName = nameComponents[0]?.substring(0, 100).trim();
        const lastName = nameComponents.splice(1).join(' ').substring(0, 100).trim();
        const phone = contactInput.telephone?.substring(0, 100).trim() || null;
        return {
            // This can be any random ID and Oro won't care because we're just creating a new resource
            id: '1',
            type: 'contactrequests',
            attributes: {
                firstName,
                lastName,
                phone,
                comment: contactInput.comment,
                emailAddress: contactInput.email,
            },
        };
    }
}
