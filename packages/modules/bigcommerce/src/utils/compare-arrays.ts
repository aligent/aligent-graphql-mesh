export const compareArraysRegardlessElementOrder = (
    targetArray: Array<string[] | undefined>,
    inputArray?: Array<string[]>
) => {
    if (!inputArray) return false;
    // Convert the input array to a set for easy comparison
    const inputArraySet = new Set(inputArray[inputArray.length - 1]);

    // Check if the input array contains the elements of any target array
    for (const targetElement of targetArray) {
        const targetSet = new Set(targetElement);
        let isEqual = true;

        for (const element of targetSet) {
            if (!inputArraySet.has(element)) {
                isEqual = false;
                break;
            }
        }

        if (isEqual) {
            return true;
        }
    }

    return false;
};
