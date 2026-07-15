import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([

  ...nextVitals,

  ...nextTs,

  {

    rules: {

      /**
       * React Compiler Rule
       * False positive pada hook async
       */

      "react-hooks/set-state-in-effect": "off",

      /**
       * Kita memang masih punya beberapa
       * console.error() untuk debugging
       */

      "no-console": "off",

      /**
       * Kadang dipakai untuk callback
       */

      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

    },

  },

  globalIgnores([

    ".next/**",

    "out/**",

    "build/**",

    "next-env.d.ts",

    "node_modules/**",

    "coverage/**",

    "*.log",

  ]),

]);

export default eslintConfig;