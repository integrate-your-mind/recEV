module.exports = {
    parser: '@typescript-eslint/parser', //option to specify eslint parser
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    rules: {
        '@typescript-eslint/ban-ts-comment': ['error'],
        'brace-style': 'off',
        '@typescript-eslint/brace-style': ['error'],
        '@typescript-eslint/class-name-casing': ['error'],
        '@typescript-eslint/comma-spacing': ['error'],
        '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'explicit' }],
        '@typescript-eslint/explicit-module-boundary-types': ['error'],
        '@typescript-eslint/func-call-spacing': ['error'],
        '@typescript-eslint/indent': ['error', 2],
        '@typescript-eslint/interface-name-prefix': ['error', { prefixWithI: 'never' }],
    },
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
};
