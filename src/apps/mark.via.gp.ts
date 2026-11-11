// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "mark.via.gp",
  "name": "Via(谷歌版)",
  "groups": [
    {
      "key": 1,
      "name": "功能类-自动[确认]下载",
      "desc": "自动点击下载弹窗中的[确定]按钮",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "mark.via.Shell",
          "matches": "@[text=\"确定\" || text=\"確定\" || text=\"OK\"] -n [text*=\"下载\" || text*=\"下載\" || text*=\"download\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/34131392",
          "exampleUrls": "https://e.gkd.li/5728704f-d52e-4267-b0b2-1f66fda88909"
        }
      ]
    }
  ]
} as any);
