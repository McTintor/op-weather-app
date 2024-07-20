import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    extends: ["plugin:prettier/recommended"],
    ignores: ["dist", "vendor", "node_modules"],
    rules: {
      curly: "error",
    },
  },
];
