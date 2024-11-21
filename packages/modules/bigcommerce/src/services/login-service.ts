import { Injectable } from 'graphql-modules';
import { CustomerId, LoginService } from '@aligent/auth-module';

@Injectable()
export class ClientLoginService extends LoginService {
    constructor() {
        super();
    }

    override async login(args: { email: string; password: string }): Promise<CustomerId> {
        console.dir('LoginService override is working');

        // Implement your login logic here
        return Promise.resolve(98);
    }
}
