import { getBcCustomerId } from '../authorization';

describe('authorization', () => {
    test(`Returns "null" if there's no authorization header`, () => {
        expect(
            getBcCustomerId({
                headers: { authorization: null },
            } as unknown as GraphQLModules.ModuleContext)
        ).toEqual(null);
    });

    test('Throws an error if the authorization token is malformed', () => {
        expect(() => {
            getBcCustomerId({
                headers: { authorization: 'Bearer abcd' },
            } as unknown as GraphQLModules.ModuleContext);
        }).toThrow(new Error('{"name":"JsonWebTokenError","message":"jwt malformed"}'));
    });
});
