// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.clggjv.xcjfmd.ffo",
  "name": "Lanerc",
  "groups": [
    {
      "key": 1,
      "name": "通知提示-公告弹窗",
      "desc": "点击[已知晓]",
      "matchTime": 14000,
      "forcedTime": 14000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@Button[desc=\"已知晓\"][clickable=true] <2 View[childCount=2][desc!=null][visibleToUser=true] <<6 FrameLayout < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/29703051",
          "exampleUrls": "https://e.gkd.li/96567525-3f64-4e6e-af40-6e41a81fac96"
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "全屏广告-弹窗广告",
      "desc": "倒计时结束后点击[暂时跳过]",
      "rules": [
        {
          "fastQuery": true,
          "matchRoot": true,
          "activityIds": ".MainActivity",
          "matches": "@View[desc*=\"\\n暂时跳过\\n\"][childCount=4][desc!=null][desc.length>20] <<6 FrameLayout < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/29703246",
          "excludeSnapshotUrls": "https://i.gkd.li/i/29703192",
          "exampleUrls": "https://e.gkd.li/93c04052-3d24-4684-83ec-ccaf13557f22"
        }
      ],
      "enable": true
    }
  ]
} as any);
