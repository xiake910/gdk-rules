// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
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
      ],
      "enable": false
    }
  ]
} as any);
