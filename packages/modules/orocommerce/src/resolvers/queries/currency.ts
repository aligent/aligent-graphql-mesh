import { QueryResolvers } from '@aligent/orocommerce-resolvers';
import { CurrencyClient } from '../../apis/rest/currency';
import {
    transformCurrency,
} from '../../factories/transform-currency-data';
export const currencyResolver: QueryResolvers['currency'] = {
    resolve: async (_root, _args, context, _info) => {
        const currencyClient: CurrencyClient = context.injector.get(CurrencyClient);
        const oroCurrency = await currencyClient.getCurrency();
        return transformCurrency(oroCurrency);
    },
};
