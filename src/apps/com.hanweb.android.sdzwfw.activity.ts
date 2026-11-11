// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hanweb.android.sdzwfw.activity",
  "name": "爱山东",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "@[clickable=true] > [text*=\"关闭\" || text*=\"跳过\"][text.length<10]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13407227",
            "https://i.gkd.li/i/30527745"
          ]
        }
      ],
      "order": -10
    }
  ]
} as any);
