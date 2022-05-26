/* eslint-disable */
export default {
  displayName: 'example',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['../jest-utils/src/setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/packages/example',
};
