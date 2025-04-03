import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'

export default [
  {
    languageOptions: {
      globals: globals.browser,
    }
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  { ignores: ['dist'] },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      ...prettier.configs.recommended.rules,
      '@typescript-eslint/no-unused-expressions': 'off',
      'no-undef': 'off',
      indent: ['error', 2, { SwitchCase: 1, 'offsetTernaryExpressions': true }],
      'no-multiple-empty-lines': ['error', { max: 3, maxEOF: 0, maxBOF: 0 }],
      quotes: ['error', 'single', { 'allowTemplateLiterals': true }],
      semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }],
      'semi-spacing': ['error', { after: true, before: false }],
      'semi-style': ['error', 'first'],
      'no-extra-semi': 'error',
      'no-unexpected-multiline': 'error',
      'no-unreachable': 'error',
    },
  },
]
