// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.iflytek.womusicclient',
  name: '联通视频彩铃',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'android.womusic.com.songcomponent.MainActivity',
          matches: '[vid="iv_img"] + [vid="btn_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/64eb594e-f764-4080-a3e6-620e7174602f',
          snapshotUrls: 'https://i.gkd.li/i/14680681',
        },
      ],
      enable: true,
    },
  ],
} as any);
