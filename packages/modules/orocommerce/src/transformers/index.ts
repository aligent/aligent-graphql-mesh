import { Provider } from 'graphql-modules';
import {
    StoreLocationsTransformer,
    StoreLocationsTransformerChain,
} from './store-locations/store-locations-transformer';

export const getOroTransformers = (): Array<Provider> => {
    return [
        {
            provide: StoreLocationsTransformerChain,
            useClass: StoreLocationsTransformerChain,
            global: true,
        },

        {
            provide: StoreLocationsTransformer,
            useFactory: (transformerChain) => {
                const transformer = new StoreLocationsTransformer();
                transformerChain.addTransformer(transformer);
                return transformer;
            },
            deps: [StoreLocationsTransformerChain],
        },
    ];
};
