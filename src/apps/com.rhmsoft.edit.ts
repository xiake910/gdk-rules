// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.rhmsoft.edit",
  "name": "QuickEdit",
  "groups": [
    {
      "key": 1,
      "name": "功能类-自动点击完成",
      "desc": "保存成功后点击完成",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.MainActivity",
          "matches": "@[text=\"完成\"][clickable=true] - * > [text^=\"保存成功\"]",
          "snapshotUrls": "https://i.gkd.li/i/24842648"
        }
      ]
    }
  ]
} as any);
