/**
 * Creates a rest GET search param string from a search params object.
 *
 * @param searchParams - The params intended to filter a query on
 * @param isGetAllPages - indicates we intend to fetch all pages for a get request
 */
export const getSearchParamStringFromSearchParams = (
    searchParams: { [key: string]: Array<string> | boolean | number | string },
    isGetAllPages?: boolean
) => {
    const transformedSearchParams = Object.entries(searchParams).reduce((carry, [key, value]) => {
        /* Remove any property/values which are undefined */
        if (!key || !value) return carry;

        /* Convert all property values to a string so TS doesn't complain about "URLSearchParams" receiving
         *  non string values */
        return { ...carry, [key]: `${value}` };
    }, {});

    const newSearchParams = new URLSearchParams(transformedSearchParams);

    /* Remove the "page" and "limit" params from the search params object so rest calls using the "bcPaginate" function
     * have control over them when looping through all pages */
    if (newSearchParams.has('page') && isGetAllPages) {
        newSearchParams.delete('page');
    }

    if (newSearchParams.has('limit') && isGetAllPages) {
        newSearchParams.delete('limit');
    }

    /* Convert the search params object to a string formatted for get requests */
    const searchParamsToString = new URLSearchParams(transformedSearchParams).toString();

    return searchParamsToString ? `?${searchParamsToString}` : '';
};
