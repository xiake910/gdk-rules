// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
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
