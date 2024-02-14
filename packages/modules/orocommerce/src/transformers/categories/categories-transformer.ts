import { CategoryTree } from '@aligent/orocommerce-resolvers';
import { Category as OroMasterCategory, WebCatalogTree as OroWebCategory } from '../../types';
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
export class CategoriesTransformerChain extends ChainTransformer<
    Array<OroMasterCategory | OroWebCategory>,
    CategoryTree[]
> {}

@Injectable()
export class CategoriesTransformer
    implements Transformer<Array<OroMasterCategory | OroWebCategory>, CategoryTree[]>
{
    public transform(
        context: TransformerContext<Array<OroMasterCategory | OroWebCategory>, CategoryTree[]>
    ): CategoryTree[] {
        const categories = context.data;
        if (categories.length > 0 && categories[0].type === 'mastercatalogcategories') {
            const categoryTreeArray: Array<CategoryTree> = [];
            (categories as OroMasterCategory[]).forEach((category: OroMasterCategory) =>
                categoryTreeArray.push(this.getMastercatalogCategoryData(category))
            );
            return categoryTreeArray;
        }

        const hashTable = Object.create(null);
        (categories as OroWebCategory[]).forEach(
            (category: OroWebCategory) =>
                (hashTable[category.id] = this.getWebcatalogCategoryData(category))
        );
        const categoryTreeArray: Array<CategoryTree> = [];
        (categories as OroWebCategory[]).forEach((category: OroWebCategory) => {
            const parentId = category.relationships?.parent.data?.id;
            if (parentId && hashTable[parentId]) {
                hashTable[parentId].children.push(hashTable[category.id]);
                hashTable[parentId].children_count = hashTable[parentId].children.length.toString();
            } else categoryTreeArray.push(hashTable[category.id]);
        });
        return categoryTreeArray;
    }

    protected getWebcatalogCategoryData(category: OroWebCategory): CategoryTree {
        return {
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
        };
    }

    protected getMastercatalogCategoryData(category: OroMasterCategory): CategoryTree {
        const {
            title,
            description,
            metaDescription,
            metaKeywords,
            metaTitle,
            url,
            createdAt,
            images,
        } = category.attributes;
        const categoryType = { type: category.type, id: category.id };
        const level = 1;

        return {
            type: 'CATEGORY',
            __typename: 'CategoryTree',
            created_at: createdAt,
            id: Number(category.id),
            uid: category.relationships ? getEncodedCategoryUidFromCategoryData(categoryType) : '',
            staged: true, // Couldnt see equivalent value in ORO
            name: title,
            level: category.relationships
                ? category.relationships.categoryPath.data.length + level
                : level,
            redirect_code: 0, // Couldnt see equivalent value in ORO
            description: description,
            meta_title: metaTitle,
            meta_description: metaDescription,
            meta_keywords: metaKeywords,
            url_path: url,
            image: images.length === 0 ? null : images[0].url,
        };
    }
}
