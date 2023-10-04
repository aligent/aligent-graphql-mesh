import {Country as AcCountry} from '@aligent/orocommerce-resolvers';
import {Currency} from '../types';

export const transformCurrency = (
    oroCurrency: Currency[]
) => {
    return oroCurrency.map((Currency) => {
        const exchangeRates = Currency.relationships?.exchange_rate.data?.map((exchangeRate) => {

            return {
                id: exchangeRate.id,
                currency_to: exchangeRate.attributes.currency_to,
                rate: exchangeRate.attributes.rate,
            }
        });
        return {
            base_currency_code: Currency.attributes.base_currency_code,
            base_currency_symbol: Currency.attributes.base_currency_symbol,
            default_display_currency_code: Currency.attributes.default_display_currency_code,
            default_display_currency_symbol: Currency.attributes.default_display_currency_symbol,
            available_currency_codes: Currency.attributes.available_currency_codes,
            exchange_rates: exchangeRates
        };
    });
};
