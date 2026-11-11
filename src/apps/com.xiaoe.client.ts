// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xiaoe.client",
  "name": "小鹅通",
  "groups": [
    {
      "key": 1,
      "name": "更新提示-版本更新弹窗",
      "desc": "点击暂不更新",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.xiaoe.app.ui.main.XiaoeMainActivity",
          "matches": "FrameLayout[vid=\"centerPopupContainer\"] [text=\"暂不更新\"]",
          "snapshotUrls": "https://i.gkd.li/i/13832282"
        }
      ]
    }
  ]
} as any);
