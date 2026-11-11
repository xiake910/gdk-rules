// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
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
    }
  ]
} as any);
