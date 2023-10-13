import { Entity, Attributes } from '.';

export interface OroCurrency extends Entity {
    type: 'currencies';
    id: string;
    attributes: OroCurrencyAttributes;
}

export interface OroCurrencyAttributes extends Attributes {
    title: string;
    symbol: string;
    default: boolean;
}
