import 'reflect-metadata';

import { SocialLinksTransformer } from '../social-links-transformer';
import { oroSocialLinksApiMockData, socialLinksReturnData } from '../__data__/social-links';

describe('Social links data transformation tests', () => {
    test('returns transformed Social links', () => {
        const socialLinksTransformer: SocialLinksTransformer = new SocialLinksTransformer();
        const transformedSocialLinks = socialLinksTransformer.transform({
            data: oroSocialLinksApiMockData[0],
        });
        expect(transformedSocialLinks).toEqual(socialLinksReturnData);
    });

    test(`returns an empty array if social links api data doesn't exist`, () => {
        const socialLinksTransformer: SocialLinksTransformer = new SocialLinksTransformer();
        const transformedSocialLinks = socialLinksTransformer.transform({
            data: {
                ...oroSocialLinksApiMockData[0],
                attributes: {
                    value: {},
                },
            },
        });
        expect(transformedSocialLinks).toEqual([]);
    });
});
