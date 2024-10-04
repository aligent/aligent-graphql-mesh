import { Provider, Scope } from 'graphql-modules';
import { ModuleConfigToken } from '../providers';
import { AuthService } from './auth';
import { AuthTokenService } from './auth-tokens';
export * from './login-service';

export * from './auth';
export * from './auth-tokens';

export const getServices = (): Array<Provider> => {
    return [
        {
            useClass: AuthService,
            provide: AuthService,
            deps: [ModuleConfigToken],
            scope: Scope.Singleton,
        },
        {
            useClass: AuthTokenService,
            provide: AuthTokenService,
            deps: [ModuleConfigToken],
            scope: Scope.Singleton,
        },
    ];
};
