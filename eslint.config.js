import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import eslintJsPlugin from '@eslint/js';

export default [
  eslintJsPlugin.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    files: ['**/*.ts'],
    ignores: ['node_modules', 'built', 'dist'],
    rules: {
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'no-constant-binary-expression': 'off',
      'import/prefer-default-export': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: ['__tests__/**/*.ts'],
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.mocha,
      },
    },
  },
];
