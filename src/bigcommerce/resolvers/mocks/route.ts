import { productsMock } from "./products";

export const mockRoute = {
    relative_url: "men.html",
    redirect_code: 0,
    // products for ... on CategoryTree {} are nested in products.items
    products: productsMock,
    // products for ... on ConfigurableProduct {} are at the root level
    ...productsMock.items[0],
    type: "CATEGORY",
};
