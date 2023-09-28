import { getJestProjects } from '@nx/jest';

export default {
  projects: getJestProjects(),
  modulePathIgnorePatterns: ['__data__'],
  coverageThreshold: {
    global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
    },
 },
};
