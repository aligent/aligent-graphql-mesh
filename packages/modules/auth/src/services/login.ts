import { Injectable } from 'graphql-modules';

export interface LoginCredentials {
    email: string;
    password: string;
}

/**
 * Service for logging a user in to the primary backend platform
 *
 * This is a placeholder class and should be overridden by the project to provide
 * the actual implementation.
 */
@Injectable({
    global: true,
})
export class LoginService {
    /**
     * Login to the platform.
     *
     * @param email
     * @param password
     * @returns A platform specific number
     */
    async login(credentials: LoginCredentials): Promise<number>;
    async login(): Promise<number> {
        throw new Error('Login service has not been implemented');
    }
}

export class BasicLoginService extends LoginService {
    constructor() {
        super();
        console.log('BasicLoginService - Auth Module');
    }

    override async login(credentials: LoginCredentials): Promise<number> {
        console.log('Logging in - Auth Module', credentials);
        return 1;
    }
}
