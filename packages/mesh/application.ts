import { createApplication } from 'graphql-modules';
import bigcommerceModule from "@aligent/bigcommerce-graphql-module"

export default createApplication({
    modules: [bigcommerceModule],
});
