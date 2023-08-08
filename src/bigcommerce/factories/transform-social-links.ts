import { BC_SocialMediaLink, SocialLink } from '../../meshrc/.mesh';

export const getTransformedSocialLinks = (socialLinks: BC_SocialMediaLink[]): SocialLink[] => {
    return socialLinks.map(({ name, url }) => ({
        destination: url,
        name,
    }));
};
