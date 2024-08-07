module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:storybook/recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    "prettier/prettier": "error",
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "vue/multi-word-component-names": "off",
    "require-await": "error",
    "no-return-await": "error",
    "no-case-declarations": "off",
    "no-empty": "off",
    "prefer-const": "off",
    "no-fallthrough": "off"
  },
  overrides: [
    {
      parser: "@typescript-eslint/parser",
      extends: ["prettier", "plugin:@typescript-eslint/recommended"],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.eslint.json"]
      },
      plugins: ["@typescript-eslint"],
      env: {
        node: true,
        es6: true
      },
      files: ["docs/**/snippets/**/*"],
      rules: {
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-this-alias": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-non-null-assertion": "off"
      }
    }
  ]
};
