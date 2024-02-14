import { Breadcrumb } from '@aligent/orocommerce-resolvers';
import { Category as OroMasterCategory, WebCatalogTree as OroWebCategory } from '../../types';
import { btoa, ChainTransformer, Transformer, TransformerContext } from '@aligent/utils';
import { Injectable } from 'graphql-modules';

@Injectable({
    global: true,
})
export class BreadcrumbsTransformerChain extends ChainTransformer<
    Array<OroMasterCategory | OroWebCategory>,
    Breadcrumb[]
> {}

@Injectable()
export class BreadcrumbsTransformer
    implements Transformer<Array<OroMasterCategory | OroWebCategory>, Breadcrumb[]>
{
    public transform(
        context: TransformerContext<Array<OroMasterCategory | OroWebCategory>, Breadcrumb[]>
    ): Breadcrumb[] {
        const categories = context.data;
        return categories.map((category, index) => {
            index++;
            return category.type === 'webcatalogtree'
                ? this.transformBreadcrumbsFromWebcatalog(category)
                : this.transformBreadcrumbsFromMastercatalog(category, index);
        });
    }

    protected transformBreadcrumbsFromWebcatalog(category: OroWebCategory): Breadcrumb {
        return {
            category_level: category.attributes.level,
            category_name: category.attributes.title,
            category_url_path: category.attributes.url,
            category_url_key: null,
            category_id: Number(category.id),
            category_uid: btoa(category.id.toString()),
        };
    }

    protected transformBreadcrumbsFromMastercatalog(
        category: OroMasterCategory,
        index: number
    ): Breadcrumb {
        return {
            category_level: index,
            category_name: category.attributes.title,
            category_url_path: category.attributes.url,
            category_url_key: null,
            category_id: Number(category.id),
            category_uid: btoa(category.id.toString()),
        };
    }
}
