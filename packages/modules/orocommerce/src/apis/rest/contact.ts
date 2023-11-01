import { forwardRef, Inject, Injectable } from 'graphql-modules';

import { ApiClient } from './client';
import { ContactRequest } from '../../types';

@Injectable()
export class ContactClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async postContact(contactRequest: ContactRequest): Promise<boolean> {
        // TODO: contact doesn't has an API for contact in ticket OTF-77
        return new Promise((resolve, _) => {
            resolve(!!contactRequest);
        });
    }
}
