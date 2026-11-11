// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xfinity.digitalhome",
  "name": "Xfinity",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".features.overview.activities.MainActivity",
          "matches": "@[clickable=true][visibleToUser=true] > [desc=\"close\"] <<n [vid=\"details_modal_compose_body\"]",
          "exampleUrls": "https://e.gkd.li/23c04f23-efb1-4562-a376-151ee4749e8d",
          "snapshotUrls": "https://i.gkd.li/i/18563031"
        }
      ],
      "enable": true
    }
  ]
} as any);
