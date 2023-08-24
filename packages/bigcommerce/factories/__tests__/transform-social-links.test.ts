import { getTransformedSocialLinks } from '../transform-social-links';

describe('Transform social links', () => {
    it('Transforms BC social links AC', () => {
        expect(
            getTransformedSocialLinks([
                {
                    name: 'Twitter',
                    url: 'https://twitter.com/aligent',
                },
                {
                    name: 'LinkedIn',
                    url: 'https://www.linkedin.com/company/aligent-consulting',
                },
                {
                    name: 'Facebook',
                    url: 'http://www.facebook.com/aligent',
                },
            ])
        ).toEqual([
            {
                name: 'Twitter',
                destination: 'https://twitter.com/aligent',
            },
            {
                name: 'LinkedIn',
                destination: 'https://www.linkedin.com/company/aligent-consulting',
            },
            {
                name: 'Facebook',
                destination: 'http://www.facebook.com/aligent',
            },
        ]);
    });
});
