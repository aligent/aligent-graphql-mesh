import { isNotNull } from '../is-not-null';

describe('is not null', () => {
    test('return array without null values', () => {
        const input = ['hi', null, 'world'];
        expect(input.filter(isNotNull)).toEqual(['hi', 'world']);
    });
});
