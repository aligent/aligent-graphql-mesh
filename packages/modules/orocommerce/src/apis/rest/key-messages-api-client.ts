import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { ApiClient } from './client';
import { KeyMessage } from '../../types/key-messages';

@Injectable()
export class KeyMessagesClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getKeyMessages(): Promise<KeyMessage[]> {
        return new Promise((resolve, _) => resolve([]));
    }
}
