import { uniqueId } from 'lodash';
import { OroCmsBlock } from '../../../../types/cms-blocks';

export const getMockOroCmsBlocks = (): OroCmsBlock[] => [
    {
        id: uniqueId(),
        type: 'orocmsblock',
        attributes: {
            id: Math.floor(Math.random() * 99999) + 10,
            content: '<div><span>Mock content 1</span></div>',
            identifier: 'Mock identifier 1',
            title: 'Mock title 1',
        },
    },
    {
        id: uniqueId(),
        type: 'orocmsblock',
        attributes: {
            id: Math.floor(Math.random() * 99999) + 10,
            content: '<div><span>Mock content 2</span></div>',
            identifier: 'Mock identifier ',
            title: 'Mock title 2',
        },
    },
    {
        id: uniqueId(),
        type: 'orocmsblock',
        attributes: {
            id: Math.floor(Math.random() * 99999) + 10,
            content: '<div><span>Mock content 3</span></div>',
            identifier: 'Mock identifier 3',
            title: 'Mock title 3',
        },
    },
];
