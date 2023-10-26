import { forwardRef, Inject, Injectable } from 'graphql-modules';

import { ApiClient } from './client';
import { OroContactUsInput, OroContactUsOutput } from '../../types';

@Injectable()
export class ContactClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async postContact(_contactUsInput: OroContactUsInput): Promise<OroContactUsOutput> {
        // TODO: contact doesn't has an API for contact
        // TODO: OTF-77
        return new Promise((resolve, _) => {
            const oroContactUsOutput: OroContactUsOutput = {
                status: true,
            };
            resolve(oroContactUsOutput);
        });
    }
}
