export const compareArraysRegardlessElementOrder = (
    targetArray: Array<string[] | undefined>,
    inputArray?: Array<string[]>
) => {
    if (!inputArray) return false;

    const sortedTargetArrayString = sortNestedArray(targetArray);
    const sortedInputArrayString = sortNestedArray(inputArray);

    return sortedTargetArrayString === sortedInputArrayString;
};

// Convert nested array eg. [[ '131', '149' ], [ '132', '152' ]] to "131132149152" for easy comparison
const sortNestedArray = (array: Array<string[] | undefined>): string => {
    return array.toString().split(',').sort().join('');
};
