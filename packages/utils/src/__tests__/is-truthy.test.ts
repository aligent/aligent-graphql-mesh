import { isTruthy } from '../is-truthy';

describe('isTruthy', () => {
    test('should return true for truthy values', () => {
        expect(isTruthy('hello')).toBe(true);
        expect(isTruthy(true)).toBe(true);
        expect(isTruthy({})).toBe(true);
        expect(isTruthy([])).toBe(true);
    });

    test('should return false for falsy values', () => {
        expect(isTruthy('')).toBe(false);
        expect(isTruthy(0)).toBe(false);
        expect(isTruthy(false)).toBe(false);
        expect(isTruthy(null)).toBe(false);
        expect(isTruthy(undefined)).toBe(false);
        expect(isTruthy(NaN)).toBe(false);
    });
});
