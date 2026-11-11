// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
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
      ],
      "enable": false
    }
  ]
} as any);
