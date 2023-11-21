import 'reflect-metadata';

import { ContactUsInput } from '@aligent/orocommerce-resolvers';
import { Transformer } from '@aligent/utils';
import { ContactRequest } from '../../../types';
import { ContactUsInputToContactRequestTransformer } from '../contact-us-to-contact-request-transformer';

describe('Contact Us to Oro Contact Request transformation tests', () => {
    const transformer: Transformer<ContactUsInput, ContactRequest> =
        new ContactUsInputToContactRequestTransformer();

    test('Test first and last name with no phone', () => {
        const request: ContactUsInput = {
            comment: 'This is a comment',
            email: 'test@fake.com.au',
            name: 'First Second',
        };

        const output = transformer.transform({ data: request });

        expect(output).toStrictEqual<ContactRequest>({
            type: 'contactrequests',
            id: '1',
            attributes: {
                firstName: 'First',
                lastName: 'Second',
                emailAddress: request.email,
                comment: request.comment,
                phone: null,
            },
        });
    });

    test('Test first name with multiple last names with no phone', () => {
        const request: ContactUsInput = {
            comment: 'This is a comment',
            email: 'test@fake.com.au',
            name: 'First Second Third Fourth Name',
        };

        const output = transformer.transform({ data: request });

        expect(output).toStrictEqual<ContactRequest>({
            type: 'contactrequests',
            id: '1',
            attributes: {
                firstName: 'First',
                lastName: 'Second Third Fourth Name',
                emailAddress: request.email,
                comment: request.comment,
                phone: null,
            },
        });
    });

    test('Test first name with multiple last names and phone number', () => {
        const request: ContactUsInput = {
            comment: 'This is a comment',
            email: 'test@fake.com.au',
            name: 'First Second Third Fourth Name',
            telephone: '12423432432',
        };

        const output = transformer.transform({ data: request });

        expect(output).toStrictEqual<ContactRequest>({
            type: 'contactrequests',
            id: '1',
            attributes: {
                firstName: 'First',
                lastName: 'Second Third Fourth Name',
                emailAddress: request.email,
                comment: request.comment,
                phone: request.telephone!,
            },
        });
    });

    test('Test first name with no phone number and no last name', () => {
        const request: ContactUsInput = {
            comment: 'This is a comment',
            email: 'test@fake.com.au',
            name: 'First',
        };

        const output = transformer.transform({ data: request });

        expect(output).toStrictEqual<ContactRequest>({
            type: 'contactrequests',
            id: '1',
            attributes: {
                firstName: 'First',
                lastName: '',
                emailAddress: request.email,
                comment: request.comment,
                phone: null,
            },
        });
    });
});
