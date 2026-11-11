// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.motoband",
  "name": "摩托邦",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": "@View[clickable=true] <3 * <2 * < [vid=\"splash_container_half_size\"]",
      "snapshotUrls": "https://i.gkd.li/import/13849831",
      "order": -10,
      "enable": true
    }
  ]
} as any);
