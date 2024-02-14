import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { CONTEXT, forwardRef, Inject, Injectable } from 'graphql-modules';
import { ModuleConfig } from '../providers';
import { USER_AGENT } from '../apis/rest/client';
import { OroCommerceModuleConfig } from '../index';
import { Token } from '../types/auth';
import { decode } from 'jsonwebtoken';

// @TOOO: Set version based on NPM package version
const OAUTH_PATH = '/oauth2-token';

@Injectable({
    global: true,
})
export class Auth {
    protected client: AxiosInstance;

    constructor(
        @Inject(forwardRef(() => ModuleConfig)) protected config: OroCommerceModuleConfig,
        // eslint-disable-next-line no-unused-vars
        @Inject(CONTEXT) private context: GraphQLModules.GlobalContext
    ) {
        this.client = axios.create({
            baseURL: config.storeUrl,
            headers: {
                'User-Agent': USER_AGENT,
                'Content-Type': 'application/json',
            },
        });
    }

    async login(username: string, password: string): Promise<Token> {
        const response: AxiosResponse<Token, Token> = await this.client.post(OAUTH_PATH, {
            grant_type: 'password',
            client_id: this.config.clientId,
            client_secret: this.config.clientSecret,
            username,
            password,
        });

        return response.data;
    }

    async refresh(refreshToken: string): Promise<Token> {
        const response: AxiosResponse<Token, Token> = await this.client.post(OAUTH_PATH, {
            grant_type: 'refresh_token',
            client_id: this.config.clientId,
            client_secret: this.config.clientSecret,
            refresh_token: refreshToken,
        });

        return response.data;
    }

    isLoggedIn(): boolean {
        const authHeader = this.context.request.headers.get('authorization');
        return !!(authHeader && authHeader.startsWith('Bearer'));
    }

    isGuest(): boolean {
        if (this.isLoggedIn()) {
            const authHeader = this.context.request.headers.get('authorization');

            if (authHeader && authHeader.startsWith('Bearer')) {
                const token = authHeader.split(' ')[1];
                const jwt = decode(token);

                if (jwt?.sub) {
                    return jwt.sub.toString().startsWith('visitor');
                }
            }
        }

        return false;
    }

    getAuthHeader(): string {
        const authHeader = this.context.request.headers.get('authorization');

        if (authHeader && authHeader.startsWith('Bearer')) {
            return authHeader;
        }

        throw Error('Bearer token is not set on the Authorization header.');
    }
}
