import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

export default defineConfig(
  {
    // scripts/*.cjs 是构建辅助脚本（CommonJS + Node API），不参与类型检查，跳过 lint
    ignores: ['dist/**', 'node_modules/**', 'scripts/**/*.cjs'],
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx,mts,cts}'],
    rules: {
      'no-undef': 'off',
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx,mts,cts}'],
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': 'error',
    },
  },
  {
    // src/apps/** 和 src/categories.ts、src/globalGroups.ts 由脚本从 JSON 生成，
    // 结构依赖 `as any` 才能通过类型检查，这里放行
    files: ['src/apps/**/*.ts', 'src/categories.ts', 'src/globalGroups.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  pluginPrettier,
);
