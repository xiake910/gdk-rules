// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ecellsz.watch.guard",
  "name": "乐康守护",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "matchTime": 10000,
      "resetMatch": "app",
      "actionMaximum": 1,
      "fastQuery": true,
      "rules": "View[clickable=true] <<n [vid=\"splash_container\"]",
      "snapshotUrls": "https://i.gkd.li/import/14039510",
      "order": -10,
      "enable": true
    }
  ]
} as any);
