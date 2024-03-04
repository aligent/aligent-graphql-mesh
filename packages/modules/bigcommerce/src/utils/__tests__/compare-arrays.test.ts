import { compareArraysRegardlessElementOrder } from '../compare-arrays';

describe('Compare arrays', () => {
    test('Check if arrays contain same elements regardless orders', () => {
        const targetArray = [
            ['131', '149'],
            ['132', '152'],
        ];

        const inputArray1 = [
            ['131', '147'],
            ['132', '150'],
        ];
        const inputArray2 = [
            ['131', '147'],
            ['132', '152'],
        ];
        const inputArray3 = [
            ['131', '147'],
            ['132', '151'],
        ];
        const inputArray4 = [
            ['132', '152'],
            ['131', '149'],
        ];

        expect(compareArraysRegardlessElementOrder(targetArray, inputArray1)).toBe(false);
        expect(compareArraysRegardlessElementOrder(targetArray, inputArray2)).toBe(false);
        expect(compareArraysRegardlessElementOrder(targetArray, inputArray3)).toBe(false);
        expect(compareArraysRegardlessElementOrder(targetArray, inputArray4)).toBe(true);
    });
});
