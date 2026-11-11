// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "tech.pingx.watchface",
  "name": "表盘自定义工具",
  "groups": [
    {
      "key": 1,
      "name": "通知提示-公告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "io.dcloud.PandoraEntryActivity",
          "matches": [
            "[text*=\"请勿\"][text*=\"电子书\"]",
            "[text=\"确定\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/23714166"
        }
      ]
    }
  ]
} as any);
