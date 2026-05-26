import baseConfig from '@hono/eslint-config';
import tseslint from 'typescript-eslint';

export default [
  ...baseConfig,
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ['src/**/*.ts'],

    languageOptions: {
      parserOptions: {
        project: true,
      },
    },

    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/await-thenable': 'error',

      'no-console': 'off',
    },
  },
];
