import { useGraphQLModules } from '@envelop/graphql-modules';
import application from '../application';
import { customerImpersonationPlugin } from '@aligent/bigcommerce-graphql-module';

const plugins = [useGraphQLModules(application), customerImpersonationPlugin];

export default plugins;
