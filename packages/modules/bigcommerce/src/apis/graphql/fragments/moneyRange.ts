import { gql } from 'graphql-tag';
import { money } from './money';

export const moneyRange = gql`
    ${money}

    fragment MoneyRange on MoneyRange {
        min {
            ...Money
        }
        max {
            ...Money
        }
    }
`;
