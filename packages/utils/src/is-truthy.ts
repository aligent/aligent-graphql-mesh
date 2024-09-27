/**
 * Use the Boolean constructor to determine if a value is truthy or falsy.
 *
 * @example
 * isTruthy('hello'); // true
 * isTruthy(''); // false
 * isTruthy(0); // false
 * isTruthy(false); // false
 * isTruthy(true); // true
 *
 * @example
 * isTruthy(null); // false
 * isTruthy(undefined); // false
 * isTruthy(NaN); // false
 *
 * @example
 * isTruthy({}); // true
 * isTruthy([]); // true
 *
 * @param input
 * @returns
 */
export const isTruthy = <T>(input?: T): input is Exclude<T, false | null | undefined | '' | 0> =>
    Boolean(input);
