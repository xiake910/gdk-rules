// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.antfortune.wealth",
  "name": "蚂蚁财富",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "resetMatch": "app",
      "actionMaximum": 1,
      "matchTime": 10000,
      "fastQuery": true,
      "rules": "@View[clickable=true] <2 [id=\"com.antfortune.wealth:id/welcome_page\"]",
      "snapshotUrls": "https://i.gkd.li/import/12776577",
      "order": -10,
      "enable": true
    }
  ]
} as any);
