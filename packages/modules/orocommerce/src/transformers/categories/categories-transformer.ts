import { CategoryTree } from '@aligent/orocommerce-resolvers';
import { WebCatalogTree as OroCategory } from '../../types';
import {
    ChainTransformer,
    slashAtStartOrEnd,
    Transformer,
    TransformerContext,
} from '@aligent/utils';
import { Injectable } from 'graphql-modules';
import { getEncodedCategoryUidFromCategoryData } from '../../utils';

/**
 * Transforms category data into a shape the PWA is expecting
 * @param categories - The current category object
 */
@Injectable({
    global: true,
})
export class CategoriesTransformerChain extends ChainTransformer<OroCategory[], CategoryTree[]> {}

@Injectable()
export class CategoriesTransformer implements Transformer<OroCategory[], CategoryTree[]> {
    public transform(context: TransformerContext<OroCategory[], CategoryTree[]>): CategoryTree[] {
        const categories = context.data;
        const hashTable = Object.create(null);
        categories.forEach(
            (category) =>
                (hashTable[category.id] = {
                    // virtual webcatalogtree id
                    id: Number(category.id),
                    // category tree node can be different entity (mastercatalogcategory, cms page, etc.)
                    // we need an entity type and real id in Mesh to get valid data from Oro
                    uid: getEncodedCategoryUidFromCategoryData(
                        category.relationships.content.data,
                        category.id
                    ),
                    position: category.attributes.order,
                    level: category.attributes.level,
                    name: category.attributes.title,
                    url_path: category.attributes.url.replace(slashAtStartOrEnd, ''),
                    url_suffix: '',
                    meta_title: category.attributes.metaTitle,
                    meta_description: category.attributes.metaDescription,
                    meta_keywords: category.attributes.metaKeywords,
                    include_in_menu: 1,
                    staged: false,
                    redirect_code: 0,
                    children_count: '0',
                    children: [],
                    type: 'CATEGORY',
                    __typename: 'CategoryTree',
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
