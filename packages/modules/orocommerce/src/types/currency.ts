import {Entity, Attributes} from '.';

export interface Currency extends Entity {
    type: 'currencies';
    id: string;
    attributes: CurrencyAttributes;
}

export interface CurrencyAttributes extends Attributes {
    title: string;
    symbol: string;
    default: boolean;
}
