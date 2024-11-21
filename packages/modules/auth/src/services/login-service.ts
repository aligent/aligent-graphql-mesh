import { Injectable, Scope } from 'graphql-modules';
import { CustomerId } from '../types';

/**
 * Service for logging a user in to the primary backend platform
 *
 * This is a placeholder class and should be overridden by the project to provide
 * the actual implementation.
 *
 * @example
 * ```typescript
 *  class ClientLoginService extends LoginService {
 *      constructor(private sdk: ClientSdk) {
 *          super();
 *      }
 *
 *      override async login(args: LoginCredentials) {
 *          return await this.sdk.login(...)
 *      }
 *  }
 *
 *  createModule({
 *      ...
 *      providers: [
 *          {
 *              provide: LoginService,
 *              useClass: ClientLoginService
 *          }
 *      ]
 *  })
 * ```
 */
@Injectable({
    global: true,
})
export class LoginService {
    async login(args: unknown): Promise<CustomerId>;
    async login(): Promise<CustomerId> {
        throw new Error('Login service has not been implemented');
    }
}
