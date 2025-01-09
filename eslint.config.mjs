import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';

const ignores = ['**/.vscode/**/*', '**/.idea/**/*', '**/node_modules/**/*', '**/dist/**/*', '**/*.out/**/*', '**/public/**/*', '**/coverage/**/*'];

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.ts'],
    ignores: ignores,
    languageOptions: {
      globals: globals.node,
      parser: tsParser
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier: prettier
    },
    rules: {
      semi: ['error', 'always'],
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/no-explicit-any': ['warn'],
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          printWidth: 120
        }
      ]
    }
  },
  {
    files: ['**/*.test.ts', '**/*.int-test.ts', '**/*.e2e-test.ts'],
    ignores: ignores,
    languageOptions: {
      globals: {
        ...globals.jest
      }
    }
  },
  {
    ignores: ['**/*.js']
  }
];
