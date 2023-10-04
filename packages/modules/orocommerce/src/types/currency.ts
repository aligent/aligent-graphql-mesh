import { Entity, Attributes, Relationships } from '.';

export interface Currency extends Entity {
    type: 'currency';
    id: string;
    attributes: CurrencyAttributes;
    relationships?: CurrencyRelationships;
}

export interface CurrencyAttributes extends Attributes {
    base_currency_code: string;
    base_currency_symbol: string;
    default_display_currency_code: string;
    default_display_currency_symbol: string;
    available_currency_codes: string;
}
export interface ExchangeRate extends Entity {
    type: 'exchange_rate';
    id: string;
    attributes: ExchangeRateAttributes;
}

export interface ExchangeRateAttributes extends Attributes {
    currency_to: string;
    rate: number;
}

export interface CurrencyRelationships extends Relationships {
    exchange_rates: {
        data?: Array<ExchangeRate>;
    };
}
