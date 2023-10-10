import { Currency as AcCurrency } from '@aligent/orocommerce-resolvers';
import { Currency } from '../types';
import { Injectable } from 'graphql-modules';
import { ChainTransformer, Transformer, TransformerContext } from '@aligent/utils';

export interface CurrencyTransformerInput {
    currency: Currency;
}
@Injectable()
export class CurrencyTransformerChain extends ChainTransformer<
    CurrencyTransformerInput,
    AcCurrency
> {}

@Injectable()
export class CurrencyTransformer implements Transformer<CurrencyTransformerInput, AcCurrency> {
    public transform(
        context: TransformerContext<CurrencyTransformerInput, AcCurrency>
    ): AcCurrency {
        // TODO: use context.data for correct get data from api
        const oroCurrency = context.data.currency;

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
