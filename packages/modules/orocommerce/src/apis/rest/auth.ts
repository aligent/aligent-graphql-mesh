import { forwardRef, Inject, Injectable } from 'graphql-modules';
import { ApiClient } from './client';

interface OAuth2Token {
    token_type: string;
    expires_in: number;
    access_token: string;
    refresh_token: string;
}
interface CreateGuestTokenArgs {
    username: string,
    password: string
    grant_type: string,
    client_id: string,
    client_secret: string
};

@Injectable()
export class AuthClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getGuestOAuth2Token(): Promise<OAuth2Token> {
        const path = `/oauth2-token`;
        const args: CreateGuestTokenArgs = {
            username: 'guest',
            password: 'guest',
            grant_type: 'password',
            client_id: 'jJ1CDDt8XpzCHaMZ2Agc1Lpalyha2b_8',
            client_secret:
                'HHjhba6yVDboyhEj6BxSbFxZzBl_2RNgQp-qN02Hgk1L_EP7Wvq-Sxmk-Fqta3BzTcl1dvDjH25RkDIO9hHqcR',
        };
        const response = await this.apiClient.post<OAuth2Token, CreateGuestTokenArgs>(path, args);
        return response;
    }
}
