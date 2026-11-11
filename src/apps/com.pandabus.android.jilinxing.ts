// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.pandabus.android.jilinxing",
  "name": "吉林行",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-开屏小窗广告",
      "desc": "检测到开屏穿山甲广告自动关闭",
      "fastQuery": true,
      "activityIds": [
        "com.pandabus.android.jilinxing.MainActivity"
      ],
      "rules": "@[vid=\"iv_native_dislike\"]",
      "snapshotUrls": [
        "https://i.gkd.li/i/29184757"
      ],
      "enable": false
    }
  ]
} as any);
