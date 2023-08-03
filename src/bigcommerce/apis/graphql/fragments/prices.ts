import { gql } from 'graphql-tag';
import { money } from './money';

export const prices = gql`
    ${money}

    fragment Prices on Prices {
        price {
            ...Money
        }
        salePrice {
            ...Money
        }
        basePrice {
            ...Money
        }
        saved {
            ...Money
        }
    }
`;
