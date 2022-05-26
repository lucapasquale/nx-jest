/* eslint-disable */
export default {
  displayName: 'jest-utils',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['./src/setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/packages/jest-utils',
};
