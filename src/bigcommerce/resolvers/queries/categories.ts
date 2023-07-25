import { mockCategories } from '../mocks/categories';

export const categoriesResolver = {
    resolve: () => {
        return mockCategories;
    },
};
