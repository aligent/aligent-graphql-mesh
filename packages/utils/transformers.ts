import _ from 'lodash';
export interface TransformerContext<T, D> {
    data: T;
    result?: D;
    stopExecution?: boolean;
}

export interface Transformer<T, D> {
    transform(context: TransformerContext<T, D>): D;
}

export class ChainTransformer<T, D> implements Transformer<T, D> {
    private transformers: Array<{
        instance: Transformer<T, D>;
        priority: number;
    }>;

    constructor() {
        this.transformers = [];
    }

    public transform(context: TransformerContext<T, D>): D {
        const transformers = _.sortBy(this.transformers, ['priority']).map(
            (transformer) => transformer.instance
        );

        for (const transformer of transformers) {
            if (context.stopExecution) {
                break;
            }

            context.result = transformer.transform(context);
        }

        if (context.result) {
            return context.result;
        }

        throw new Error(`Transformer chain failed to return a result.`);
    }

    public addTransformer(instance: Transformer<T, D>, priority = 0) {
        this.transformers.push({ instance, priority });
    }
}
