// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.nasoft.socmark",
  "name": "手机性能排行",
  "groups": [
    {
      "key": 1,
      "name": "局部广告",
      "desc": "点击x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.SearchScoreActivity",
          "matches": "[vid=\"btn_banner_ad_clear\"]",
          "snapshotUrls": "https://i.gkd.li/i/28173008"
        }
      ],
      "enable": true
    }
  ]
} as any);
