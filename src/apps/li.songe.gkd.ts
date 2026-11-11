// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "li.songe.gkd",
  "name": "GKD",
  "groups": [
    {
      "key": 1,
      "name": "功能类-删除快照二次提示",
      "desc": "二次确认?-确定",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@[clickable=true] -3 [text=\"删除快照\"] <<6 [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/25569635"
        }
      ]
    }
  ]
} as any);
