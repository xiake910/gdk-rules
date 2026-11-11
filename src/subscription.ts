import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  /**
   * 订阅 ID, 必须是随机的大数字, 不能和其它订阅重复
   * 提交前可以搜一下有没有撞车:
   * https://github.com/search?q=export+default+defineGkdSubscription%28%7B+++id%3A+&type=code
   */
  id: 2026111101,
  name: 'GDK规则',
  version: 0,
  author: 'xiake910',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/xiake910/gdk-rules',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
