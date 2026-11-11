import { defineGkdApp } from '@gkd-kit/define';

/**
 * 红果免费短剧 (com.phoenix.read)
 *
 * 说明:
 * - 规则依据 App 实际界面里的文字/控件写成, 没有照搬别人的订阅
 * - 没在真机上验证过的组会在 desc 里写明, 用一段时间不合适就反馈调整
 * - 功能类(上滑/倍速这种)默认禁用, 需要你在 GKD 里手动打开
 */
export default defineGkdApp({
  id: 'com.phoenix.read',
  name: '红果免费短剧',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '启动时自动点「跳过」(8 秒内最多一次, 没有这个界面就不动作)',
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
    {
      key: 3,
      name: '权限提示-通知权限',
      desc: '弹「开启通知」时点「取消 / 暂不开启」',
      fastQuery: true,
      actionCd: 1500,
      rules: [
        {
          // 只有界面上出现了「开启…通知」这种文案时才去点取消, 避免误点
          anyMatches: '[text*="开启"][text*="通知" || text*="提醒"]',
          matches: '[text="取消" || text="暂不开启"]',
          action: 'clickCenter',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-[上滑]继续看短剧',
      desc: '刷到「上滑继续观看短剧」时自动上滑 (默认禁用, 需要时自己开)',
      enable: false,
      fastQuery: true,
      actionCd: 2000,
      activityIds: [
        'com.dragon.read.pages.main.MainFragmentActivity',
        'com.dragon.read.component.shortvideo.impl.ShortSeriesActivity',
      ],
      rules: [
        {
          matches: '[text="上滑继续观看短剧"][visibleToUser=true]',
          swipeArg: {
            start: { x: 'screenWidth / 2', y: 'screenHeight * 0.7' },
            end: { x: 'screenWidth / 2', y: 'screenHeight * 0.3' },
            duration: 220,
          },
        },
      ],
    },
  ],
});
