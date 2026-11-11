// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.leduoworks.gpstoolbox",
  "name": "GPS工具箱",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-首页占位广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".frmt.MainFrmtActivity",
          "matches": "[vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13062612"
        }
      ],
      "enable": true
    }
  ]
} as any);
