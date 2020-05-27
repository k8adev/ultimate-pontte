module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  rules: {
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
  },
};
