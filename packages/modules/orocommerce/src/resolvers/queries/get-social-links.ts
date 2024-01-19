import { QueryResolvers } from '@aligent/orocommerce-resolvers';
import { StoreConfigApiClient } from '../../apis/rest/store-config-api-client';
import { SocialLinksTransformerChain } from '../../transformers/social-links/social-links-transformer';

export const getSocialLinksResolver: QueryResolvers['getSocialLinks'] = {
    resolve: async (_root, _args, context, _info) => {
        const storeConfigApiClient: StoreConfigApiClient =
            context.injector.get(StoreConfigApiClient);
        const oroSocialLinks = await storeConfigApiClient.getSocialLinks();

        const socialLinksTransformerChain: SocialLinksTransformerChain = context.injector.get(
            SocialLinksTransformerChain
        );

        return socialLinksTransformerChain.transform({
            data: oroSocialLinks[0],
        });
    },
};
