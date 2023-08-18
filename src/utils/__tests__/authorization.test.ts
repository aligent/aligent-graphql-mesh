import { getBcCustomerId } from '../authorization';
import { GraphQlContext } from '../../meshrc/types';

describe('authorization', () => {
    test(`Returns "null" if there's no authorization header`, () => {
        expect(
            getBcCustomerId({ headers: { authorization: null } } as unknown as GraphQlContext)
        ).toEqual(null);
    });

    test('Throws an error if the authorization token is not good', () => {
        try {
            getBcCustomerId({
                headers: { authorization: 'Bearer abcd' },
            } as unknown as GraphQlContext);
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toBe('JsonWebTokenError: jwt malformed');
            }
        }
    });
});
