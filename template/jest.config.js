const appConfig = require('./appconfig.development');

module.exports = {
    preset: 'ts-jest',
    'collectCoverageFrom': [
        'src/**/*.ts*',
        '!*.stories.{js,jsx, ts, tsx}',
        '!__snapshots__/**'
    ],
    coveragePathIgnorePatterns: ['.stories.js', '.stories.ts', '.stories.tsx', '.snap'],
    'coverageThreshold': {
        'global': {
            'lines': 50,
            'statements': 50
        }
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest'
    },
    setupFilesAfterEnv: [
        '<rootDir>/jest.setup.ts'
    ],
    moduleNameMapper: {
        '@common/(.*)': '<rootDir>/src/components/Common/$1',
        '@store/(.*)': '<rootDir>/src/store/$1',
        '@api/(.*)': '<rootDir>/src/api/$1',
        '@components/(.*)': '<rootDir>/src/components/$1',
        '@pages/(.*)': '<rootDir>/src/components/Pages/$1',
        '@applayout/(.*)': '<rootDir>/src/components/AppLayout/$1',
        '@hooks/(.*)': '<rootDir>/src/hooks/$1',
        '@utils/(.*)': '<rootDir>/src/utils/$1',
        '@context/(.*)': '<rootDir>/src/context/$1',
        '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules'
    },
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.test.json'
        },
        '__APPCONFIG__': appConfig
    }
};
