import { uniqueId } from 'lodash';
import { OroCmsBlock } from '../../../../types/cms-blocks';

export const getMockOroCmsBlocks = (): OroCmsBlock[] => [
    {
        id: uniqueId(),
        type: 'orocmsblock',
        attributes: {
            id: Math.floor(Math.random() * 99999) + 10,
            title: 'Mock title 1',
            contentVariant: {
                content: '<div><span>Mock content 1</span></div>',
                style: '',
            },

            alias: 'alias 1',
            enabled: true,
            createdAt: '2024-01-08T06:23:48Z',
            updatedAt: '2024-01-08T06:23:48Z',
        },
    },
    {
        id: uniqueId(),
        type: 'orocmsblock',
        attributes: {
            id: Math.floor(Math.random() * 99999) + 10,
            title: 'Mock title 2',
            contentVariant: {
                content: '<div><span>Mock content 2</span></div>',
                style: '',
            },

            alias: 'alias 2',
            enabled: true,
            createdAt: '2024-01-08T06:23:48Z',
            updatedAt: '2024-01-08T06:23:48Z',
        },
    },
    {
        id: uniqueId(),
        type: 'orocmsblock',
        attributes: {
            id: Math.floor(Math.random() * 99999) + 10,
            title: 'Mock title 3',
            contentVariant: {
                content: '<div><span>Mock content 3</span></div>',
                style: '',
            },

            alias: 'alias 3',
            enabled: true,
            createdAt: '2024-01-08T06:23:48Z',
            updatedAt: '2024-01-08T06:23:48Z',
        },
    },
];
