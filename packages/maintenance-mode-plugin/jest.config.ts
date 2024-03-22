/* eslint-disable */
export default {
    displayName: 'maintenance-mode-plugin',
    preset: '../../../../../jest.preset.js',
    testEnvironment: 'node',
    transform: {
        '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
    },
    moduleFileExtensions: ['ts', 'js', 'html'],
    coverageDirectory:
        '../../../../../coverage/packages/mesh/bigcommerce/src/maintenance-mode-plugin',
};
