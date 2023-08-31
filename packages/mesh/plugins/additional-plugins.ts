import { useGraphQLModules } from '@envelop/graphql-modules';
import application from '../application';

const plugins = [useGraphQLModules(application)];

export default plugins;
