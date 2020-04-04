module.exports = {
    parser: "@typescript-eslint/parser", //option to specify eslint parser
    extends: ["eslint:recommended", "plugin:@typescript-eslint/eslint-recommended", "plugin:@typescript-eslint/recommended"], //option to set rules for eslint; currenlty using the recommended for ts
    rules: {
        "@typescript-eslint/ban-ts-comment": ["error"],
        "brace-style": "off",
        "@typescript-eslint/brace-style": ["error"],
        camelcase: "off",
        "@typescript-eslint/camelcase": ["error", { properties: "always" }],
        "@typescript-eslint/class-name-casing": ["error"],
        "@typescript-eslint/comma-spacing": ["error"],
        "@typescript-eslint/explicit-member-accessibility": ["error", { accessibility: "explicit" }],
        "@typescript-eslint/explicit-module-boundary-types": ["error"],
        "@typescript-eslint/func-call-spacing": ["error"],
        "@typescript-eslint/indent": ["error", 2],
        "@typescript-eslint/interface-name-prefix": ["error", { prefixWithI: "never" }]
    }
};
