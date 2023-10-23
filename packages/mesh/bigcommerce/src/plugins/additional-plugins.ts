import { useGraphQLModules } from '@envelop/graphql-modules';
import application from '../application';
import { customerImpersonationPlugin } from '@aligent/bigcommerce-graphql-module';
import { addIpAddressToAxiosHeaders } from '@aligent/bigcommerce-graphql-module';

const plugins = [
    useGraphQLModules(application),
    customerImpersonationPlugin,
    addIpAddressToAxiosHeaders,
];

export default plugins;
