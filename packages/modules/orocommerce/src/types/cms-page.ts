import { Entity, Attributes } from '.';

export interface OroLandingPage extends Entity {
    type: 'landingpages';
    attributes: OroLandingPageAttributes;
}

export interface OroLandingPageAttributes extends Attributes {
    title: string;
    createdAt: string;
    url: string;
    urls: string[];
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    content: string;
}
