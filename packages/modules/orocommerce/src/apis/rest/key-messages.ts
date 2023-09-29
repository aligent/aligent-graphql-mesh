import { Injectable } from 'graphql-modules';
import { ApiClient } from './client';
import { KeyMessage } from '../../types/key-messages';
import { getMockKeyMessages } from './mocks/key-messages';

@Injectable()
export class KeyMessagesClient {
    protected apiClient: ApiClient;
    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    async getKeyMessages(): Promise<KeyMessage[]> {
        // banner messages in something that does not exist in Oro as yet, so just mocking it for now
        return new Promise((resolve, _) => {
            resolve(getMockKeyMessages());
        });
    }
}
