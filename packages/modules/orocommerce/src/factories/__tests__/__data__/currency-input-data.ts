import {Currency} from "../../../types";

export const oroCurrency: Currency[] = [
    {
        "id": "3",
        "type": "currency",
        "attributes": {
            "base_currency_code": "AUD",
            "base_currency_symbol": "A$",
            "default_display_currency_code": "AUD",
            "default_display_currency_symbol": "A$",
            "available_currency_codes": "AUD"
        },
        "relationships": {
            "exchange_rate": {
                "data": [{

                    "id": "AUD",
                    "type": "exchange_rate",
                    "attributes": {
                        "currency_to": "AUD",
                        "rate": 1
                    }
                }]
            }
        }
    }
];
