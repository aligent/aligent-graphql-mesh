import { OroLandingPage } from '../../../../types';

export const oroLandingPage: OroLandingPage = {
    type: 'landingpages',
    id: '1',
    links: {
        self: 'https://aligent.oro-cloud.com/api/landingpages/1',
    },
    attributes: {
        title: 'About',
        createdAt: '2023-10-12 11:00:00',
        url: '/about',
        urls: ['/about'],
        metaTitle: 'landing page meta title',
        metaDescription: 'meta description landing page',
        metaKeywords: 'Meta keywords landing page',
        content: '<html><head></head><body><h1> Landing page </h1></body></html>',
    },
};
