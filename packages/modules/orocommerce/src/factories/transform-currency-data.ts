import {Currency as AcCurrency} from '@aligent/orocommerce-resolvers';
import {Currency} from '../types';

export const transformCurrency = (
    oroCurrency: Currency
): AcCurrency => {
    return {
        base_currency_code: oroCurrency.id,
        base_currency_symbol: oroCurrency.attributes.symbol,
        default_display_currency_code: oroCurrency.id,
        default_display_currency_symbol: oroCurrency.attributes.symbol,
        available_currency_codes: [oroCurrency.id],
        exchange_rates: []
    };
};
