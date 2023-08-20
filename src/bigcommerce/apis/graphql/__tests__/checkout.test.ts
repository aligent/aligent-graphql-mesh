import axios from 'axios';
import { mockBcCart } from '../../../resolvers/mocks/cart.bc';
import { checkout } from '../requests';
import { getCheckout } from '../checkout';
jest.mock('axios');

const mockedAxiosErrorResponse = {
    data: {
        errors: [
            {
                message:
                    "Variable '$entityId' expected value of type 'String' but got: 0. Reason: String value expected",
                path: ['cart'],
            },
        ],
    },
};

const mockedAxiosGetCheckoutResponse = {
    data: {
        data: { site: { checkout: { entityId: mockBcCart.entityId } } },
    },
};

const bcCustomerId = 10;

const getCheckoutMock = () => getCheckout(mockBcCart.entityId, bcCustomerId);

describe('getCheckout', () => {
    it(`makes a createCart graphql call through axios`, async () => {
        (axios.post as jest.Mock).mockResolvedValue(mockedAxiosGetCheckoutResponse);

        expect(await getCheckoutMock()).toEqual({
            entityId: mockBcCart.entityId,
        });

        expect(axios.post).toBeCalledTimes(1);

        expect(axios.post).toBeCalledWith(
            'https://api.bigcommerce.com/stores/abcdefg',
            {
                query: checkout,
                variables: {
                    entityId: mockBcCart.entityId,
                },
            },
            {
                headers: {
                    Authorization: 'Bearer BC_GRAPHQL_TOKEN',
                    'x-bc-customer-id': bcCustomerId,
                },
            }
        );
    });

    it(`handles a error from the createCart response`, () => {
        (axios.post as jest.Mock).mockReset();
        (axios.post as jest.Mock).mockResolvedValue(mockedAxiosErrorResponse);

        expect(async () => {
            await getCheckoutMock();
        }).rejects.toThrow(new Error(JSON.stringify(mockedAxiosErrorResponse.data.errors)));
    });
});
