import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import pluginVue from "eslint-plugin-vue"
import { defineConfig } from "eslint/config"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"
// 也可以通过fs来处理
import { createRequire } from "module"
const require = createRequire(import.meta.url)
const autoInport = require("./types/autoImport/.eslintrc-auto-import.json")
export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
        plugins: { js },
        extends: ["js/recommended"],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...autoInport.globals,
            },
        },
    },
    tseslint.configs.recommended,
    pluginVue.configs["flat/essential"],
    {
        files: ["**/*.vue"],
        languageOptions: { parserOptions: { parser: tseslint.parser } },
    },
    eslintPluginPrettierRecommended,
    {
        rules: {
            "vue/multi-word-component-names": [
                "error",
                {
                    ignores: ["index"], // 忽略名为 index 的组件
                },
            ],
        },
    },
])
