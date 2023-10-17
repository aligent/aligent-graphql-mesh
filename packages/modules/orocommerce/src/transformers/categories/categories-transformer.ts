import { CategoryTree } from '@aligent/orocommerce-resolvers';
import { WebCatalogTree as OroCategory } from '../../types';
import {btoa, ChainTransformer, Transformer, TransformerContext} from '@aligent/utils';
import {Injectable} from "graphql-modules";

/**
 * Transforms category data into a shape the PWA is expecting
 * @param categories - The current category object
 */
@Injectable()
export class CategoriesTransformerChain extends ChainTransformer<
    OroCategory[],
    CategoryTree[]
> {}

@Injectable()
export class CategoriesTransformer implements Transformer<OroCategory[], CategoryTree[]> {
    public transform(
        context: TransformerContext<OroCategory[], CategoryTree[]>
    ): CategoryTree[] {
        const categories = context.data;
        const hashTable = Object.create(null);
        categories.forEach(
            (category) =>
                (hashTable[category.id] = {
                    id: Number(category.id),
                    uid: btoa(category.id.toString()),
                    position: category.attributes.order,
                    level: category.attributes.level,
                    name: category.attributes.title,
                    url_path: category.attributes.url,
                    url_suffix: '',
                    meta_title: category.attributes.metaTitle,
                    meta_description: category.attributes.metaDescription,
                    meta_keywords: category.attributes.metaKeywords,
                    include_in_menu: 1,
                    staged: false,
                    redirect_code: 0,
                    children_count: '0',
                    children: [],
                })
        );
        const categoryTreeArray: Array<CategoryTree> = [];
        categories.forEach((category) => {
            const parentId = category.relationships?.parent.data?.id;
            if (parentId && hashTable[parentId]) {
                hashTable[parentId].children.push(hashTable[category.id]);
                hashTable[parentId].children_count = hashTable[parentId].children.length.toString();
            } else categoryTreeArray.push(hashTable[category.id]);
        });
        return categoryTreeArray;
    }
}
