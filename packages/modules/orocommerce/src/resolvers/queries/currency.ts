import { QueryResolvers } from '@aligent/orocommerce-resolvers';
import { CurrencyClient } from '../../apis/rest/currency';
import { transformCurrency } from '../../transformers/transform-currency-data';

export const currencyResolver: QueryResolvers['currency'] = {
    resolve: async (_root, _args, context, _info) => {
        const currencyClient: CurrencyClient = context.injector.get(CurrencyClient);

        // TODO: For currency Id implemented depend on the answer on slack
        // https://aligent.slack.com/archives/C011EJXLCQ0/p1696488453167849
        const oroCurrencies = await currencyClient.getCurrency('NZD');

        return transformCurrency(oroCurrencies);
    },
};
