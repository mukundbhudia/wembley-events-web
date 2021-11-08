// .eslintrc.js

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte']
  },
  env: {
    es6: true,
    browser: true
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  settings: {
    'svelte3/typescript': require('typescript'),
    // ignore style tags in Svelte because of Tailwind CSS
    // See https://github.com/sveltejs/eslint-plugin-svelte3/issues/70
    'svelte3/ignore-styles': () => true
  },
  plugins: ['svelte3', '@typescript-eslint'],
  ignorePatterns: ['node_modules'],
  rules: {
    "no-console": 0,
    "no-underscore-dangle": 2,
    "no-case-declarations": 2,
    "no-tabs": 2,
    "arrow-parens": 2,
    "quotes": [
      2,
      "single"
    ],
    "comma-style": 2,
    "comma-dangle": [
      2,
      "only-multiline"
    ],
    "quote-props": [
      2,
      "as-needed"
    ]
  }
}