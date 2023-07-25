// import { getProducts } from "./lib/rest";
import { productsMock } from "../mocks/products";

export const productsResolver = {
    resolve: () => {
        return productsMock;
    },
};
