// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "yyc.xk",
  "name": "星空视频壁纸",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.MainActivity",
          "matches": "[vid=\"gm信息流广告关闭\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/972de09c-a399-4b7d-b7c4-e03c072a7170",
          "snapshotUrls": "https://i.gkd.li/i/20863704"
        }
      ],
      "enable": true
    }
  ]
} as any);
