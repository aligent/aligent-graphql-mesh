import { Provider } from 'graphql-modules';
import { CurrencyTransformer, CurrencyTransformerChain } from './currency/transform-currency-data';

import {
    CmsBlocksTransformer,
    CmsBlocksTransformerChain,
} from './cms-blocks/cms-blocks-transformer';

export const getOroTransformers = (): Array<Provider> => {
    return [
        // Register Chain transformers
        {
            provide: CmsBlocksTransformerChain,
            useClass: CmsBlocksTransformerChain,
            global: true,
        },

        // Create default transformers and register them with their chain transformers
        {
            provide: CmsBlocksTransformer,
            useFactory: (transformerChain) => {
                const cmsBlocksTransformer = new CmsBlocksTransformer();

                // Add to the chain transformer
                transformerChain.addTransformer(cmsBlocksTransformer);

                return cmsBlocksTransformer;
            },
            deps: [CmsBlocksTransformerChain],
        },

        // Currency Register Chain transformers
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
