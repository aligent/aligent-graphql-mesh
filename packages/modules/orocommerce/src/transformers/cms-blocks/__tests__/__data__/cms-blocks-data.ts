import { uniqueId } from 'lodash';
import { OroCmsBlock } from '../../../../types/cms-blocks';

export const mockStyles = "#isolation-scope-qofnc7y2lkacl57bib3a2247 #i021{float:none;text-align:center;font-size:12px;background-color:#3669b5;color:white;padding:3px 0 3px 0;}"

export const getMockOroCmsBlocks = (): OroCmsBlock[] => [
    {
        id: uniqueId(),
        type: 'orocmsblock',
        links: { self: 'https://aligent.oro-cloud.com/api/contentblocks/6' },
        attributes: {
            id: Math.floor(Math.random() * 99999) + 10,
            title: 'Mock title 1',
            contentVariant: {
                content: '<div><span>Mock content 1</span></div>',
                style: mockStyles,
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
        links: { self: 'https://aligent.oro-cloud.com/api/contentblocks/7' },
        attributes: {
            id: Math.floor(Math.random() * 99999) + 10,
            title: 'Mock title 2',
            contentVariant: {
                content: '<div><span>Mock content 2</span></div>',
                style: mockStyles,
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
        links: { self: 'https://aligent.oro-cloud.com/api/contentblocks/8' },
        attributes: {
            id: Math.floor(Math.random() * 99999) + 10,
            title: 'Mock title 3',
            contentVariant: {
                content: '<div><span>Mock content 3</span></div>',
                style: mockStyles,
            },
            alias: 'alias 3',
            enabled: true,
            createdAt: '2024-01-08T06:23:48Z',
            updatedAt: '2024-01-08T06:23:48Z',
        },
    },
];
