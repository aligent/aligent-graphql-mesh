import { QueryResolvers } from '@aligent/orocommerce-resolvers';
import { CurrencyClient } from '../../apis/rest/currency';
import { CurrencyTransformerChain } from '../../transformers/currency/transform-currency-data';

export const currencyResolver: QueryResolvers['currency'] = {
    resolve: async (_root, _args, context, _info) => {
        const currencyClient: CurrencyClient = context.injector.get(CurrencyClient);

        // TODO: For currency Id implemented depend on the answer on slack
        // https://aligent.slack.com/archives/C011EJXLCQ0/p1696488453167849
        const oroCurrency = await currencyClient.getCurrency('NZD');

        const currencyTransformerChain: CurrencyTransformerChain =
            context.injector.get(CurrencyTransformerChain);

        return currencyTransformerChain.transform({ data: { currency: oroCurrency } });
    },
};
