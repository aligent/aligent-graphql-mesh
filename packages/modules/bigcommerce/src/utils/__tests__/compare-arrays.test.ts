import { compareArraysRegardlessElementOrder } from '../compare-arrays';

describe('Compare arrays', () => {
    test('Check if arrays contain same elements regardless orders', () => {
        const targetArray = [
            ['168', '237'],
            ['169', '245'],
        ];

        const inputArray1 = [
            ['169', '245'],
            ['168', '237'],
        ];
        const inputArray2 = [
            ['168', '238'],
            ['169', '247'],
        ];

        expect(compareArraysRegardlessElementOrder(targetArray, inputArray1)).toBe(true);
        expect(compareArraysRegardlessElementOrder(targetArray, inputArray2)).toBe(false);
    });
});
