import { defineGkdCategories } from '@gkd-kit/define';

/**
 * 规则分类: 名字是「前缀匹配」的
 * 例如 name 为 `开屏广告` 的分类, 会捕获名字以 `开屏广告` 开头的所有规则组
 * (如 `开屏广告`、`开屏广告-1`、`开屏广告-2`)
 *
 * 用户在 GKD 里可以按分类一键启用/禁用, 所以建议给你的规则组起一个统一前缀
 */
export default defineGkdCategories([
  { key: 1, name: '开屏广告' },
  { key: 2, name: '更新提示' },
  { key: 3, name: '权限提示' },
  { key: 4, name: '功能类' },
]);
