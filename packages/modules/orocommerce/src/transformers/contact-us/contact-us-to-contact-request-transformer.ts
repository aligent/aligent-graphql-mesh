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
        const firstName = nameComponents[0]?.trim();
        const lastName = nameComponents.splice(1).join(' ').trim();
        const phone = contactInput.telephone?.trim() || null;
        return {
            // This can be any random ID and Oro won't care because we're just creating a new resource
            id: '1',
            type: 'contactrequests',
            attributes: {
                firstName,
                lastName,
                phone,
                comment: contactInput.comment.trim(),
                emailAddress: contactInput.email.trim(),
            },
        };
    }
}
