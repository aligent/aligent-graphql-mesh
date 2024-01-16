import 'reflect-metadata';

import { CmsBlocksTransformer, CmsBlocksTransformerChain } from '../cms-blocks-transformer';
import { getMockOroCmsBlocks } from './__data__/cms-blocks-data';

describe('Cms Blocks data transformation tests', () => {
    const mockBlocks = getMockOroCmsBlocks();

    const chain = new CmsBlocksTransformerChain();
    chain.addTransformer(new CmsBlocksTransformer());

    const output = chain.transform({ data: mockBlocks });

    test('Check whether the transformed cms blocks contain the expected properties', () => {
        expect(output).toHaveProperty('__typename');
        expect(output).toHaveProperty('items');
        expect(output).toHaveProperty('items[0].__typename');
        expect(output).toHaveProperty('items[0].content');
        expect(output).toHaveProperty('items[0].identifier');
        expect(output).toHaveProperty('items[0].title');
    });

    test('Check whether the transformed cms blocks contain expected data', () => {
        expect(output.__typename).toStrictEqual('CmsBlocks');

        for (const blockIndex in output.items!) {
            const blockAttrs = mockBlocks[blockIndex].attributes;

            const transformedBlock = output.items[blockIndex]!;
            expect(transformedBlock.content).toStrictEqual(blockAttrs.contentVariant.content);
            expect(transformedBlock.identifier).toStrictEqual(mockBlocks[blockIndex].id.toString());
            expect(transformedBlock.title).toStrictEqual(blockAttrs.title);
            expect(transformedBlock.__typename).toStrictEqual('CmsBlock');
        }
    });
});
