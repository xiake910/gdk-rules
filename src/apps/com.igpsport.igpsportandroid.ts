// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.igpsport.igpsportandroid",
  "name": "iGPSPORT",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.igpsport.globalapp.main.MainActivity",
          "matches": "@[visibleToUser=true][text=\"忽略本次\"] <<n [vid=\"updateComposeView\"]",
          "exampleUrls": "https://e.gkd.li/57341233-2547-4469-869c-e05fdebb20fc",
          "snapshotUrls": "https://i.gkd.li/i/13797203"
        }
      ]
    }
  ]
} as any);
