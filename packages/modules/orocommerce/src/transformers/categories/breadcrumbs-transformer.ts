import { Breadcrumb } from '@aligent/orocommerce-resolvers';
import { WebCatalogTree as OroCategory } from '../../types';
import {btoa, ChainTransformer, Transformer, TransformerContext} from '@aligent/utils';
import {Injectable} from "graphql-modules";

@Injectable()
export class BreadcrumbsTransformerChain extends ChainTransformer<
    OroCategory[],
    Breadcrumb[]
> {}

@Injectable()
export class BreadcrumbsTransformer implements Transformer<OroCategory[], Breadcrumb[]> {
    public transform(
        context: TransformerContext<OroCategory[], Breadcrumb[]>
    ): Breadcrumb[] {
        const categories = context.data;
        return categories.map((category) => {
            return {
            category_level: category.attributes.level,
            category_name: category.attributes.title,
            category_url_path: category.attributes.url,
            category_url_key: null,
            category_id: Number(category.id),
            category_uid: btoa(category.id.toString()),
            };
        });
    }
}
