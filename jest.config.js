module.exports = {
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
  ],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
  snapshotSerializers: [
    'enzyme-to-json/serializer',
    'jss-snapshot-serializer',
  ],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: ['src/**/*.jsx?'],
};
