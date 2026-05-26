import baseConfig from './base.js';

import reactHooks from 'eslint-plugin-react-hooks';
import reactPlugin from 'eslint-plugin-react';

export default [
  ...baseConfig,

  {
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
    },

    rules: {
      ...reactHooks.configs.recommended.rules,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
