module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': 'production' === process.env.NODE_ENV ? 'warn' : 'off',
    'no-debugger': 'production' === process.env.NODE_ENV ? 'warn' : 'off',
    yoda: ['error', 'always'],
  },
};
