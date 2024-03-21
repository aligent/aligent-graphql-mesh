import { Provider, Scope } from 'graphql-modules';
import { ModuleConfigToken } from '../providers';
import { AuthService } from './auth';

export * from './auth';

export const getServices = (): Array<Provider> => {
    return [
        {
            useClass: AuthService,
            provide: AuthService,
            deps: [ModuleConfigToken],
            scope: Scope.Operation,
        },
    ];
};
