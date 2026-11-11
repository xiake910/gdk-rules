// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yuque.mobile.android.app',
  name: '语雀',
  groups: [
    {
      key: 0,
      name: '局部广告-[用语雀公众号]横幅提示',
      desc: '点x取消提示',
      rules: [
        {
          activityIds: '.rn.activity.ReactNativeMainActivity',
          matches: 'TextView[text="了解更多"] + ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12911014',
        },
      ],
      enable: true,
    },
    {
      key: 1,
      name: '功能类-自动原图',
      desc: '如果没有勾选原图, 则勾选',
      rules: [
        {
          activityIds: '.rn.activity.ReactNativeMainActivity',
          matches: 'ViewGroup[desc="原图未勾选"][clickable=true][childCount=2]',
          snapshotUrls: 'https://i.gkd.li/i/12911013',
        },
      ],
      enable: false,
    },
    {
      key: 3000,
      name: '局部广告-"用语雀公众号"横幅提示',
      desc: '点x取消提示',
      rules: [
        {
          activityIds:
            'com.yuque.mobile.android.app.rn.activity.ReactNativeMainActivity',
          matches: 'TextView[text="了解更多"] + ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12911014',
        },
      ],
      enable: true,
    },
    {
      key: 3001,
      name: '全屏广告-横幅提示',
      desc: '点x取消提示',
      activityIds:
        'com.yuque.mobile.android.app.rn.activity.ReactNativeMainActivity',
      rules: [
        {
          matches: 'TextView[text="了解更多"] + ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12911014',
        },
      ],
      enable: true,
    },
  ],
} as any);
