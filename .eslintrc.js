module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  globals: {
    API: true,
  },
  rules: {
    'no-shadow': 'off',
    'import/prefer-default-export': 'off',
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
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-fragments': 'off',
    'react/no-array-index-key': 'off',
  },
};
