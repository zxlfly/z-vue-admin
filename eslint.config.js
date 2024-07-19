import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginVue from "eslint-plugin-vue"
import { includeIgnoreFile } from "@eslint/compat"
import path from "node:path"
import { fileURLToPath } from "node:url"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gitignorePath = path.resolve(__dirname, ".gitignore")
import configPrettier from "eslint-config-prettier"
import pluginPrettier from "eslint-plugin-prettier"
import eslintPluginImport from "eslint-plugin-import"
import eslintPluginNode from "eslint-plugin-node"
// import babelEslintParse from "@babel/eslint-parse"
// 不支持ESM
import pkg from "vue-eslint-parser"
const { parser: vueEslintparser } = pkg

export default [
    // 关联gitignore里面的配置
    includeIgnoreFile(gitignorePath),
    {
        ignores: ["build/**/*", "cache/**/*", "node_modules/**/*"],
    },
    {
        files: ["**/*.{js,mjs,cjs,ts,vue}"],
        languageOptions: {
            globals: {
                ...globals.commonjs,
                ...globals.browser,
                ...globals.es2025,
                ...globals.node,
            },
            parser: vueEslintparser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                parser: "@typescript-eslint/parser",
                jsxPragma: "React",
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            prettier: pluginPrettier,
            import: eslintPluginImport,
            node: eslintPluginNode,
        },
        rules: {
            ...configPrettier.rules,
            ...pluginPrettier.configs.recommended.rules,
            /*
             * "off" 或 0    ==>  关闭规则
             * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
             * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
             */
            "prettier/prettier": "warn",
            // eslint（https://eslint.bootcss.com/docs/rules/）
            "no-var": "error", // 要求使用 let 或 const 而不是 var
            "no-multiple-empty-lines": ["warn", { max: 1 }], // 不允许多个空行
            "no-console":
                process.env.NODE_ENV === "production" ? "error" : "off",
            "no-debugger":
                process.env.NODE_ENV === "production" ? "error" : "off",
            "no-unexpected-multiline": "error", // 禁止空余的多行
            "no-useless-escape": "off", // 禁止不必要的转义字符

            // typeScript (https://typescript-eslint.io/rules)
            "@typescript-eslint/no-unused-vars": "error", // 禁止定义未使用的变量
            "@typescript-eslint/prefer-ts-expect-error": "error", // 禁止使用 @ts-ignore
            "@typescript-eslint/no-explicit-any": "off", // 禁止使用 any 类型
            "@typescript-eslint/no-non-null-assertion": "off",
            "@typescript-eslint/no-namespace": "off", // 禁止使用自定义 TypeScript 模块和命名空间。
            "@typescript-eslint/semi": "off",

            // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
            "vue/multi-word-component-names": "off", // 要求组件名称始终为 “-” 链接的单词
            "vue/script-setup-uses-vars": "error", // 防止<script setup>使用的变量<template>被标记为未使用
            "vue/no-mutating-props": "off", // 不允许组件 prop的改变
            "vue/attribute-hyphenation": "off", // 对模板中的自定义组件强制执行属性命名样式
            // "vue/v-on-event-hyphenation": [
            //     "error",
            //     "never",
            //     { ignore: ["custom-event"] },
            // ],
            // "vue/v-on-event-hyphenation": "off",
            indent: [
                "error",
                4,
                {
                    ignoredNodes: ["ConditionalExpression", "SwitchCase"],
                },
            ],
            semi: "off",
        },
    },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs["flat/essential"],
    {
        files: ["**/*.vue"],
        languageOptions: { parserOptions: { parser: tseslint.parser } },
    },
]
