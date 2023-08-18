/**
 * @Deprecated We will just return empty string as empty cart ID since BC GraphQL doesn't support empty cart yet
 */
export const createEmptyCart = async (): Promise<string> => {
    return '';
};
