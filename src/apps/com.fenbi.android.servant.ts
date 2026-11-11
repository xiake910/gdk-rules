// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.fenbi.android.servant",
  "name": "粉笔",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "activityIds": "com.fenbi.android.module.home.HomeActivity",
      "rules": [
        {
          "matches": "[id=\"com.fenbi.android.servant:id/close\"]",
          "snapshotUrls": "https://i.gkd.li/import/12999725"
        }
      ],
      "enable": false
    }
  ]
} as any);
