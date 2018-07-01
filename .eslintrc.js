module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': [1],
    'no-debugger': [1],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ["error", "always"],
    'space-before-function-paren': ['error', {'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always'}]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}