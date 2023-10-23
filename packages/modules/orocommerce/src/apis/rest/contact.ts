import { forwardRef, Inject, Injectable } from 'graphql-modules';

import { ApiClient } from './client';
import {
    ContactUsInput as OroContactUsInput,
    ContactUsOutput as OroContactUsOutput,
} from '../../types';

@Injectable()
export class ContactClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async postContact(_contactUsInput: OroContactUsInput): Promise<OroContactUsOutput> {
        // TODO: contact doesn't has an API for contact
        // We are using this as mock
        return new Promise((resolve, _) => {
            const oroContactUsOutput: OroContactUsOutput = {
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
