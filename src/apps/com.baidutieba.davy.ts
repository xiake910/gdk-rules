// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.baidutieba.davy",
  "name": "贴吧一键签到大师",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-内部弹窗广告",
      "activityIds": "com.davy.commonlibrary.utils.DialogUtil",
      "rules": [
        {
          "matches": "[vid=\"exit\"]",
          "snapshotUrls": "https://i.gkd.li/i/12504289"
        },
        {
          "matches": "[vid=\"mimo_interstitial_close_img\"]",
          "snapshotUrls": "https://i.gkd.li/i/12504291"
        }
      ]
    }
  ]
} as any);
