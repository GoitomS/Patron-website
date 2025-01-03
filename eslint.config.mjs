import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // ...compat.extends("next/core-web-vitals", "next/typescript"),
  // {
  //   files: ["**/*.{ts,tsx}"],
  //   rules: {
  //     // Adjust or disable rules here
  //     "@typescript-eslint/no-unused-vars": ["warn"], // Change from 'error' to 'warn'
  //     "react/no-unescaped-entities": "warn",         // Warn instead of error
  //     "react-hooks/exhaustive-deps": "warn",         // Warn for missing dependencies
  //     "@next/next/no-page-custom-font": "off",       // Disable custom font warning if intentional
  //   },
  // },
];

export default eslintConfig;
