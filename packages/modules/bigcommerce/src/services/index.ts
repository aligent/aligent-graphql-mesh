import { Provider } from 'graphql-modules';
import { LoginService } from '@aligent/auth-module';
import { ClientLoginService } from './login-service';

export * from './login-service';

export const getServices = (): Array<Provider> => {
    return [
        {
            useClass: ClientLoginService,
            provide: LoginService,
        },
    ];
};
