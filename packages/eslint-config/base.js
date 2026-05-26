import turboConfig from 'eslint-config-turbo/flat';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...turboConfig,
  {
    ignores: ['dist/**', 'node_modules/**'],
    rules: {
      'turbo/no-undeclared-env-vars': [
        'error',
        {
          allowList: ['^ENV_[A-Z]+$'],
        },
      ],
    },
  },
];
