import { Provider } from 'graphql-modules';
import { CurrencyTransformer, CurrencyTransformerChain } from './currency/transform-currency-data';

export const getTransformers = (): Array<Provider> => {
    return [
        // Register Chain transformers
        {
            provide: CurrencyTransformerChain,
            useClass: CurrencyTransformerChain,
            global: true,
        },
        {
            provide: CurrencyTransformer,
            useFactory: (transformerChain) => {
                const currencyTransformer = new CurrencyTransformer();
                // Add to the chain transformer
                transformerChain.addTransformer(currencyTransformer);
                return currencyTransformer;
            },
            deps: [CurrencyTransformerChain],
        },
    ];
};
