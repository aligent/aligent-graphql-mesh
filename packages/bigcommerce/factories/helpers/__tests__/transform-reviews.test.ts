import { getTransformedReviews } from '../transform-reviews';
import { mockBcProducts } from '../../../resolvers/mocks/products.bc';
import { BC_PageInfo, BC_ReviewEdge } from '@mesh/external/BigCommerceGraphqlApi';

describe('transform-reviews', () => {
    it(`transforms a bc review structure to a AC format`, () => {
        expect(getTransformedReviews(mockBcProducts[0].reviews)).toEqual({
            items: [
                {
                    ratings_breakdown: [{ name: 'John', value: '' }],
                    average_rating: 5,
                    created_at: '2019-08-24T14:15:22Z',
                    nickname: '',
                    summary: 'Great product',
                    text: 'I want more of this',
                    product: {},
                },
            ],
            page_info: { current_page: 0, page_size: 0, total_pages: 0 },
        });
    });

    it(`returns an empty array if no review items exist`, () => {
        const expectedResult = {
            items: [],
            page_info: { current_page: 0, page_size: 0, total_pages: 0 },
        };
        expect(getTransformedReviews({ edges: null, pageInfo: {} as BC_PageInfo })).toEqual(
            expectedResult
        );
        expect(
            getTransformedReviews({ edges: [{} as BC_ReviewEdge], pageInfo: {} as BC_PageInfo })
        ).toEqual(expectedResult);
    });
});
