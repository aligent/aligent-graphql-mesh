import { ContactUsInput } from '@aligent/bigcommerce-resolvers';
import { logAndThrowError } from '@aligent/utils';
import { bcGraphQlRequest } from '../graphql';
import axios from 'axios';
import { getRouteQuery } from '../graphql/requests';

export const postContactForm = async (
    input: ContactUsInput,
    customerImpersonationToken: string
): Promise<boolean> => {
    const BC_STENCIL_URL = process.env.BC_GRAPHQL_API?.replace('/graphql', '');
    const url = `${BC_STENCIL_URL}/pages.php?action=sendContactForm`;
    const headers = {
        'content-type': 'application/x-www-form-urlencoded',
    };

    const pageId = await getBcPageIdByPath(input.path, customerImpersonationToken);

    const data = {
        page_id: pageId,
        contact_comment: input.comment,
        contact_email: input.email,
        contact_name: input.name,
        contact_phone: input.telephone,
    };

    console.log(data, url);

    try {
        const response = await axios.post(url, data, { headers });
        return !!response;
    } catch (error) {
        return logAndThrowError(error);
    }
};

const getBcPageIdByPath = async (
    path: string,
    customerImpersonationToken: string
): Promise<number | undefined> => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
    };

    const bcPageIdQuery = {
        query: getRouteQuery,
        variables: { path },
    };

    const response = await bcGraphQlRequest(bcPageIdQuery, headers);
    if (response.errors) {
        return logAndThrowError(response.errors);
    }

    return response.data.site.route.node.entityId;
};
