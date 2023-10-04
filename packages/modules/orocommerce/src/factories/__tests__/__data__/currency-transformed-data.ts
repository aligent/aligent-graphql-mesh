import {Currency as AcCurrency} from '@aligent/orocommerce-resolvers';

export const transformedExchangeRates = [
    {
        currency_to: "AUD",
        rate: 1,
        id: 'AUD'
    }
]
export const transformedCurrency: AcCurrency[] = [
    {
        base_currency_code: "AUD",
        base_currency_symbol: "A$",
        default_display_currency_code: "AUD",
        default_display_currency_symbol: "A$",
        available_currency_codes: "AUD",
        exchange_rates: transformedExchangeRates,
    }
];
