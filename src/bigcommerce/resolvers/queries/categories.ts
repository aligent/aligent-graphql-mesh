// import { getCategories } from "./lib/rest";
import { mockCategories } from '../mocks/categories';

export const categoriesResolver = {
    resolve: () => {
        // @todo map rest response data to graphql response
        // const headers = context.headers;
        // const data = await getCategories(headers);

        return mockCategories;
    },
};
