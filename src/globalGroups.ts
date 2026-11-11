import { defineGkdGlobalGroups } from '@gkd-kit/define';

/**
 * 全局规则组: 对所有 App 生效的规则(不需要写包名)
 *
 * 如果你的规则组和某个 App 的规则组同名(前缀匹配), 可以用
 * disableIfAppGroupMatch 让全局规则组在那个 App 里自动失效
 *
 * 注意: 全局规则影响面大, 很容易误点, 建议先留空, 需要时再按官方文档加:
 * https://gkd.li/api
 *
 * 示例(默认注释掉, 确认无误后再启用):
 * ```ts
 * export default defineGkdGlobalGroups([
 *   {
 *     key: 1,
 *     name: '开屏广告-全局',
 *     desc: '在所有 App 里自动点「跳过」',
 *     rules: [{ matches: '[text="跳过"]', action: 'clickCenter' }],
 *   },
 * ]);
 * ```
 */
export default defineGkdGlobalGroups([]);
