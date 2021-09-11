const prettierrc = require('./.prettierrc.js')

module.exports = {
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      legacyDecorators: true,
      experimentalDecorators: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  plugins: ['prettier'],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    semi: 'off',
    'eol-last': 'warn',
    'no-cond-assign': 'warn',
    'no-trailing-spaces': 'warn',
    'comma-dangle': ['warn', 'always-multiline'],
    // prettier
    'prettier/prettier': ['warn', prettierrc],
  },
}
