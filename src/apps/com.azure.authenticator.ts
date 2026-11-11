// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.azure.authenticator",
  "name": "Authenticator",
  "groups": [
    {
      "key": 1,
      "name": "评价提示",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.ngc.msa.MsaSessionActivity",
          "matches": "[childCount=3] >2 ScrollView >2 [text$=\"推荐此应用?\"]",
          "action": "back",
          "snapshotUrls": "https://i.gkd.li/i/26644370",
          "exampleUrls": "https://e.gkd.li/cc8d99b6-c44d-4377-ab1f-2af85019d3c4"
        }
      ]
    }
  ]
} as any);
