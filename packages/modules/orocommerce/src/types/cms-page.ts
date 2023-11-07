import { Entity, Attributes } from '.';

export interface OroLandingPage extends Entity {
    type: 'landingpages';
    id: string;
    links: {
        self: string;
    };
    attributes: OroLandingPageAttributes;
}

export interface OroLandingPageAttributes extends Attributes {
    title: string;
    createdAt: string;
    url: string;
    urls: string[];
    metaTitle: string | null;
    metaDescription: string | null;
    metaKeywords: string | null;
    content: string;
}
