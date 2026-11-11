// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.flutter3.ctangxin.vf0egg',
  name: '糖心Vlog',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionCd: 100,
      resetMatch: 'app',
      activityIds: 'com.example.flutter3_frame.MainActivity',
      rules: [
        {
          action: 'back',
          matches:
            'FrameLayout > View > View > View[index=0] > View > ImageView[childCount=1] + View[clickable=true && desc=null]',
          snapshotUrls: 'https://i.gkd.li/i/12836891',
        },
      ],
      enable: true,
    },
    {
      key: 2,
      name: '全屏广告-公告弹窗',
      matchTime: 10000,
      resetMatch: 'app',
      activityIds: 'com.example.flutter3_frame.MainActivity',
      rules: [
        {
          action: 'back',
          matches: '[desc="公告"] +2 [desc="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12836854',
        },
      ],
      enable: true,
    },
    {
      enable: true,
      key: 0,
      name: '开屏广告',
      desc: '虚假按钮，实际点击无法跳过，规则暂时保留',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            'FrameLayout > View > View > View > View > @View[clickable=true && desc.length=2] + ImageView[childCount=1]',
          snapshotUrls: 'https://i.gkd.li/import/12836857',
        },
      ],
      order: -10,
    },
    {
      key: 3000,
      name: '全屏广告-广告弹窗',
      matchTime: 10000,
      actionCd: 100,
      resetMatch: 'app',
      activityIds: ['com.example.flutter3_frame.MainActivity'],
      rules: [
        {
          action: 'back',
          matches:
            'FrameLayout > View > View > View[index=0] > View > ImageView[childCount=1] + View[clickable=true && desc=null]',
          snapshotUrls: 'https://i.gkd.li/import/12836891',
        },
      ],
      enable: true,
    },
    {
      key: 3,
      name: '全屏广告-延迟工具(协助key1、2)',
      desc: '5s开屏广告后主动触发匹配',
      matchDelay: 6500,
      matchTime: 10000,
      resetMatch: 'app',
      fastQuery: true,
      rules: 'TextView[text="xxxxx"]',
      enable: true,
    },
  ],
} as any);
