import globals from "globals";
import pluginJs from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tseslint from "@typescript-eslint/eslint-plugin";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: globals.browser,
      parser: tsParser, // Use the TypeScript parser
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json", // Ensure your project has a valid tsconfig.json
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
  {
    ignores: [".node_modules/*", "**/dist/**"],
  },
  {
    plugins: {
      "@typescript-eslint": tseslint, // Register the TypeScript ESLint plugin
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...eslintPluginPrettier.configs.recommended.rules,
      "@typescript-eslint/ban-ts-comment": "warn", // Example of using a specific TypeScript ESLint rule
    },
  },
];
