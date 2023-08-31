import { getBcCustomerId } from '../authorization';
import { AuthorizationError } from '@aligent/utils';

describe('authorization', () => {
    test(`Returns "null" if there's no authorization header`, () => {
        expect(
            getBcCustomerId({
                headers: { authorization: null },
            } as unknown as GraphQLModules.ModuleContext)
        ).toEqual(null);
    });

    test('Throws an error that the user session has expired if the authorization token is invalid', () => {
        expect(() => {
            getBcCustomerId({
                headers: { authorization: 'Bearer abcd' },
            } as unknown as GraphQLModules.ModuleContext);
        }).toThrow(new AuthorizationError('User session has expired'));
    });
});
