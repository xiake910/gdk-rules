// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sjm.zhuanzhuan.mcy",
  "name": "喵次元",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "key": 1,
          "action": "back",
          "matches": "[text=\"立即升级\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/13392514"
        }
      ]
    }
  ]
} as any);
