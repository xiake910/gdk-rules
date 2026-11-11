// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.aurora_tec.downloader",
  "name": "极光下载器",
  "groups": [
    {
      "key": 1,
      "name": "通知提示-系统公告",
      "desc": "点击[确定]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".HomeActivity",
          "matches": "[text=\"系统公告\"] +2 [text=\"确定\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/45886cda-e54a-4a1f-b136-949b59704f0c",
          "snapshotUrls": "https://i.gkd.li/i/24726084"
        }
      ]
    }
  ]
} as any);
