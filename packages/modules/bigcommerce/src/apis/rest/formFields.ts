import { getDataFromMeshCache, logAndThrowError } from '@aligent/utils';
import { BcStorefrontFormFields } from '../../types';
import axios from 'axios';

const CACHE_KEY__STOREFRONT_FORM_FIELDS = 'storefront_form_fields';
const BC_STOREFRONT_URL = process.env.BC_GRAPHQL_API?.replace('/graphql', '');

const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};

export const getStorefrontFormFields = async (): Promise<BcStorefrontFormFields> => {
    const url = `${BC_STOREFRONT_URL}/api/storefront/form-fields`;

    try {
        const response = await axios.get(url, { headers });
        return response.data;
    } catch (error) {
        return logAndThrowError(error, axios.get.name);
    }
};

export const retrieveStorefrontFormFieldsFromCache = async (
    context: GraphQLModules.ModuleContext
): Promise<BcStorefrontFormFields> => {
    const query = getStorefrontFormFields();

    return getDataFromMeshCache(context, CACHE_KEY__STOREFRONT_FORM_FIELDS, query);
};
