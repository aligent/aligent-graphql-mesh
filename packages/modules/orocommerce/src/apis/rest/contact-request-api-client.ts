import { forwardRef, Inject, Injectable } from 'graphql-modules';

import { ApiClient } from './client';
import { ContactRequest } from '../../types';

@Injectable({
    global: true,
})
export class ContactClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async createContactRequest(contactRequest: ContactRequest): Promise<ContactRequest> {
        const res = await this.apiClient.post<{ data: ContactRequest }, { data: ContactRequest }>(
            '/contactrequests',
            {
                data: contactRequest,
            }
        );
        return res.data;
    }
}
