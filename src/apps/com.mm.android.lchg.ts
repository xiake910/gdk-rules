// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.mm.android.lchg",
  "name": "乐橙含光",
  "groups": [
    {
      "key": 0,
      "enable": false,
      "name": "更新提示",
      "activityIds": "com.lc.mine.view.activity.AboutActivity",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "matches": "[id=\"com.mm.android.lchg:id/btn_cancel\"][text*=\"稍后再说\"]",
          "snapshotUrls": "https://i.gkd.li/import/13540871"
        }
      ]
    }
  ]
} as any);
