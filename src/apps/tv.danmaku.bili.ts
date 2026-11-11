import { defineGkdApp } from '@gkd-kit/define';

/**
 * 哔哩哔哩 (tv.danmaku.bili)
 *
 * 只写了最通用、最不容易误触的两组, 默认开启:
 * - 开屏广告: 启动 8 秒内找「跳过」, 最多点一次
 * - 更新提示: 点「以后再说 / 暂不更新」
 *
 * 其他广告位(首页推荐卡片、视频页横幅等)样式经常变, 没有真机快照不敢乱写,
 * 需要的话把 GKD 抓到的界面发我, 我再加。
 */
export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '启动时自动点「跳过」',
      fastQuery: true,
      matchTime: 8000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text*="跳过"]',
          action: 'clickCenter',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      desc: '自动点「以后再说 / 暂不更新」',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text="以后再说" || text="暂不更新" || text="稍后再说"]',
          action: 'clickCenter',
        },
      ],
    },
  ],
});
