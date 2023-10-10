import { ChainTransformer, Transformer, TransformerContext } from '../transformers';

class StringToNumberTransformer implements Transformer<string, number> {
    public transform(context: TransformerContext<string, number>): number {
        return parseInt(context.data);
    }
}

describe('Transformer tests', () => {
    test('Transforms a string to a number', () => {
        const chainTransformer = new ChainTransformer<string, number>();
        chainTransformer.addTransformer(new StringToNumberTransformer());
        const data = '123';
        const result = chainTransformer.transform({ data });
        expect(result).toStrictEqual(123);
    });

    test('Transforms stops execution and throws error', () => {
        const chainTransformer = new ChainTransformer<string, number>();
        chainTransformer.addTransformer(new StringToNumberTransformer());
        expect(() => {
            chainTransformer.transform({ data: '123', stopExecution: true });
        }).toThrow();
    });
});
