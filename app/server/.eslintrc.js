module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX,
      ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
      sourceType: 'module', // Allows for the use of imports
    },
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off"
    '@typescript-eslint/ban-ts-comment': ['error'],
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error'],
    '@typescript-eslint/class-name-casing': ['error'],
    '@typescript-eslint/comma-spacing': ['error'],
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      { accessibility: 'explicit' },
    ],
    '@typescript-eslint/explicit-module-boundary-types': ['error'],
    '@typescript-eslint/func-call-spacing': ['error'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/interface-name-prefix': [
      'error',
      { prefixWithI: 'never' },
    ],
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
