import { ChainTransformer, Transformer, TransformerContext } from '@aligent/utils';
import { OroSocialLinkApiData } from '../../types/social-links';
import { SocialLink } from '@aligent/orocommerce-resolvers';
import { Injectable } from 'graphql-modules';

@Injectable({
    global: true,
})
export class SocialLinksTransformerChain extends ChainTransformer<
    OroSocialLinkApiData,
    SocialLink[] | never[]
> {}

@Injectable()
export class SocialLinksTransformer
    implements Transformer<OroSocialLinkApiData, SocialLink[] | never[]>
{
    public transform(
        context: TransformerContext<OroSocialLinkApiData, SocialLink[] | never[]>
    ): SocialLink[] {
        return Object.values(context?.data?.attributes?.value || {});
    }
}
