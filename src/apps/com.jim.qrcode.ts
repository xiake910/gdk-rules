// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jim.qrcode",
  "name": "随便扫",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-顶部卡片广告",
      "desc": "点击卡片右上角关闭按钮",
      "activityIds": [
        ".MainActivity",
        "com.miui.home.launcher.Launcher"
      ],
      "rules": "TextView[text.length>0] < FrameLayout + FrameLayout > ImageView",
      "snapshotUrls": [
        "https://i.gkd.li/i/12606861",
        "https://i.gkd.li/i/12606862"
      ]
    },
    {
      "key": 3000,
      "name": "局部广告-顶部广告卡片",
      "desc": "点击卡片右上角关闭按钮",
      "activityIds": [
        "com.jim.qrcode.MainActivity",
        "com.miui.home.launcher.Launcher"
      ],
      "rules": "TextView[text.length>0] < FrameLayout + FrameLayout > ImageView",
      "snapshotUrls": [
        "https://i.gkd.li/import/12606861",
        "https://i.gkd.li/import/12606862"
      ],
      "enable": false
    }
  ]
} as any);
