// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.miui.cleanmaster",
  "name": "垃圾清理",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-添加桌面图标提示",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.miui.optimizecenter.MainActivity",
          "matches": [
            "[text^=\"开启桌面图标\"]",
            "[text=\"不需要\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/30698886"
        }
      ],
      "enable": false
    }
  ]
} as any);
