import { Currency as AcCurrency } from '@aligent/orocommerce-resolvers';
import { OroCurrency } from '../../types';
import { Injectable } from 'graphql-modules';
import { ChainTransformer, Transformer, TransformerContext } from '@aligent/utils';

@Injectable({
    global: true
})
export class CurrencyTransformerChain extends ChainTransformer<OroCurrency, AcCurrency> {}

@Injectable()
export class CurrencyTransformer implements Transformer<OroCurrency, AcCurrency> {
    public transform(context: TransformerContext<OroCurrency, AcCurrency>): AcCurrency {
        const oroCurrency = context.data;

        return {
            base_currency_code: oroCurrency.id,
            base_currency_symbol: oroCurrency.attributes.symbol,
            default_display_currency_code: oroCurrency.id,
            default_display_currency_symbol: oroCurrency.attributes.symbol,
            available_currency_codes: [oroCurrency.id],
            exchange_rates: [],
        };
    }
}
