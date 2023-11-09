export const arrayFromAsyncGenerator = async <TGeneratorResult>(
    generator: AsyncGenerator<TGeneratorResult>
): Promise<TGeneratorResult[]> => {
    const result: TGeneratorResult[] = [];
    for await (const generatorResult of generator) {
        result.push(generatorResult);
    }
    return result;
};
