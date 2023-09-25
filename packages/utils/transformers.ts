export interface TransformerContext<T, D> {
    data: T;
    result?: D;
    stopExecution?: boolean
}

export interface Transformer<T, D> {
    transform(context: TransformerContext<T, D>): D;
}

export class ChainTransformer<T, D> {
    private transformers: Array<Transformer<T, D>>;

    constructor() {
        this.transformers = [];
    }

    public transform(context: TransformerContext<T, D>): D {
        for (const transformer of this.transformers) {
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

    public addTransformer(transformer: Transformer<T, D>) {
        this.transformers.push(transformer);
    }
}