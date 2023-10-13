import { forwardRef, Inject, Injectable } from 'graphql-modules';
import { ApiClient } from './client';
import { ContactUsInput, ContactUsOutput } from '@aligent/orocommerce-resolvers';

@Injectable()
export class ContactClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async postContact(contactUsInput: ContactUsInput): Promise<ContactUsOutput> {
        // TODO: contact doesn't has an API for contact
        // We are using this as mock
        return new Promise((resolve, _) => {
            const oroContactUsOutput: ContactUsOutput = {
                status: true,
            };
            resolve(oroContactUsOutput);
        });

        // const response = await this.apiClient.post<ContactUsOutput, ContactUsInput>(`/contact`,{
        //     email: contactUsInput?.email,
        //     telephone: contactUsInput?.telephone,
        //     comment: contactUsInput?.comment,
        //     name: contactUsInput?.name
        // });
        // return response;
    }
}
