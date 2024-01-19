import { Entity } from '.';

export type OroSocialLink = {
    destination: string;
    name: string;
};

export interface OroSocialLinkApiData extends Entity {
    type: string;
    id: string;
    attributes: {
        value?: {
            [key: string]: OroSocialLink;
        };
    };
    links: {
        self: string;
    };
}
