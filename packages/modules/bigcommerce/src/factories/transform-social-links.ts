import { SocialMediaLink } from '@aligent/bigcommerce-operations';
import { SocialLink } from '@aligent/bigcommerce-resolvers';

export const getTransformedSocialLinks = (socialLinks: SocialMediaLink[]): SocialLink[] => {
    return socialLinks.map(({ name, url }) => ({
        destination: url,
        name,
    }));
};
