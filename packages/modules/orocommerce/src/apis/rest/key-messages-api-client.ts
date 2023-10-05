import { Injectable } from 'graphql-modules';
import { ApiClient } from './client';
import { KeyMessage } from '../../types/key-messages';

@Injectable()
export class KeyMessagesClient {
    protected apiClient: ApiClient;
    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    async getKeyMessages(): Promise<KeyMessage[]> {
        return new Promise((resolve, _) => resolve([]));
    }
}
