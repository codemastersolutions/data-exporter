const tseslint = await import('typescript-eslint');
const prettier = await import('eslint-plugin-prettier');

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      prettier,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      'prettier/prettier': 'error',
    },
  },
];
