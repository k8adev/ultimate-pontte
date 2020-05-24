module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '*.spec.js',
          '*.config.js',
          'webpack/*',
          'jest.*.js',
        ],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
  },
};