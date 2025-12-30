import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import sveltePlugin from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';
import tsParser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  ...sveltePlugin.configs['flat/recommended'],
  {
    plugins: {
      '@typescript-eslint': tsPlugin
    },
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        extraFileExtensions: ['.svelte']
      },
      globals: {
        console: 'readonly',
        fetch: 'readonly',
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly'
      }
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      'no-console': 0,
      'no-underscore-dangle': 2,
      'no-case-declarations': 2,
      'no-tabs': 2,
      'arrow-parens': 2,
      'quotes': [2, 'single'],
      'comma-style': 2,
      'comma-dangle': [2, 'only-multiline'],
      'quote-props': [2, 'as-needed']
    }
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tsParser
      }
    }
  },
  {
    ignores: ['node_modules/**', 'public/**', 'rollup.config.js']
  }
];
