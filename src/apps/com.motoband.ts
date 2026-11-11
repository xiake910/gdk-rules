// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
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
