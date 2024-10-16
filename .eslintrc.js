module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: ['airbnb-base', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'next/core-web-vitals'],
  plugins: ['react', 'styled-components-config', 'eslint-plugin-no-inline-styles', '@typescript-eslint'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    project: ['./tsconfig.json', 'tsconfig.eslint.json'],
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  rules: {
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens',
      assignment: 'parens',
      return: 'parens',
      arrow: 'parens',
      condition: 'parens',
      logical: 'parens',
      prop: 'parens',
    }],
    'react/self-closing-comp': 'error',
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never', propElementValues: 'always' }],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'proportional-always',
      afterOpening: 'never',
      beforeClosing: 'proportional-always',
    }],
    'jsx-quotes': ['error', 'prefer-double'],
    'react/prop-types': 'off',
    'react/no-unused-state': 2,
    'react/no-access-state-in-setstate': 2,
    'react/no-direct-mutation-state': 2,
    'styled-components-config/rule-name': 'off',
    'object-curly-spacing': ['error', 'always'],
    'eol-last': ['error', 'always'],
    'no-plusplus': 'off',
    'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'prefer-destructuring': 'off',
    'arrow-parens': ['error', 'always'],
    'arrow-body-style': 'off',
    'object-curly-newline': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    'no-restricted-syntax': 'off',
    camelcase: 'off',
    'no-continue': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'react/display-name': 'off',
    'consistent-return': 'off',
    'function-paren-newline': ['error', 'consistent'],
    'no-inline-styles/no-inline-styles': 2,
    'quote-props': 2,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 'off',
    'padded-blocks': ['error', 'never'],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['store', 'acc'] }],
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/consistent-generic-constructors': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: 'variable', format: ['camelCase', 'PascalCase', 'UPPER_CASE'] },
      { selector: 'class', format: ['PascalCase'] },
      { selector: 'enum', format: ['PascalCase'], suffix: ['ENUM'] },
      { selector: 'interface', format: ['PascalCase'], prefix: ['I'] },
      { selector: 'typeAlias', format: ['PascalCase'], suffix: ['Type'] },
    ],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {},
    },
  ],
};
