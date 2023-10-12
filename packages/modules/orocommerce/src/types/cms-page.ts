import { Entity, Attributes } from '.';

export interface LandingPage extends Entity {
    type: 'landingpages';
    id: string;
    attributes: LandingPageAttributes;
}

export interface LandingPageAttributes extends Attributes {
    title: string;
    createdAt: string;
    url: string;
    urls: string;
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    content: string;
}
