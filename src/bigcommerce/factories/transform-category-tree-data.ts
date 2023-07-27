import { btoa } from '../../utils/encode-decode';
import { AcCategoryItem, BcCategoryTree } from '../types';

export const getTransformedCategoryTreeData = (category: BcCategoryTree): AcCategoryItem => {
    const { children, description, entityId, name, path, productCount } = category;

    const children_count = children ? children.length : 0;
    return {
        children: children ? children.map(getTransformedCategoryTreeData) : [],
        children_count: String(children_count),
        description,
        id: entityId,
        include_in_menu: 1, // BC doesn't support
        meta_description: '',
        name,
        position: 0,
        product_count: productCount,
        uid: btoa(entityId.toString()),
        url_path: path.replace(/(^\/|\/$)/g, ''),
        url_suffix: '',
    };
};
