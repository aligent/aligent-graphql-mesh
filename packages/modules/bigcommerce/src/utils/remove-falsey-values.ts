/**
 * A function to be used in conjuction with `Array.filter` to remove falsey values from an array
 *
 * This works because the "Boolean" constructor is also a function, it returns true for "truthy" arguments, and false for "falsey" arguments.
 *
 * @deprecated Use isTruthy from @aligent/utils instead. This will be removed in a future version.
 *
 * @example
 * ```ts
 * const array = [1, 2, 0, false, 3, null];
 * const cleanedArray = array.filter(removeFalseyValues); // [1, 2, 3]
 * ```
 */
export const removeFalseyValues = Boolean;
