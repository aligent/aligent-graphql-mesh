/**
 * @deprecated Use isTruthy from @aligent/utils instead. This will be removed in a future version.
 * @param input
 * @returns
 */
export const isNotNull = <T>(input: T | null): input is T => Boolean(input);
