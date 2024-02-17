/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: 'tsconfig.eslint.json',
    extraFileExtensions: ['.vue'],
  },
  rules: {
    // Отступы в 2 пробела
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2, {
      SwitchCase: 1,
    }],

    // Предупреждение о неиспользуемых переменных
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': ['error', {
      args: 'after-used',
      ignoreRestSiblings: true,
    }],

    // Точки с запятой не нужны
    semi: 0,
    '@typescript-eslint/semi': ['error', 'never'],

    // Одинарные кавычки вместо двойных
    quotes: 0,
    '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],

    'max-len': [2, {
      code: 120,
      tabWidth: 2,
      ignoreTemplateLiterals: true,
    }],

    'no-undef': 0,

    // Предупреждения о console.log
    'no-console': 'warn',

    // Предупреждения о debugger
    'no-debugger': 'warn',

    // Экспорт дефолт не всегда удобен
    'import/prefer-default-export': 0,

    // Нормально не работает
    'import/extensions': 0,

    'linebreak-style': 0,

    // Больше мешает
    'import/no-extraneous-dependencies': 0,

    // Нормально не работает
    'import/no-unresolved': 0,

    // Использование короткой записи для стрелочных функций зачастую сильно увеличивает длину строки
    'arrow-body-style': 0,

    // Без грамотной настройки больше мешает, чем помогает
    'import/order': 0,

    // Безопасно при грамотном использовании
    'vue/no-v-html': 0,

    'vue/multi-word-component-names': 0,

    'vue/require-explicit-emits': ['error'],

    'object-curly-newline': 0,
  },
}
