// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.superrhino.rarering",
  "name": "Nico",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "desc": "点击跳过",
      "rules": [
        {
          "matches": "@View[clickable=true] <3 * <2 * < FrameLayout[id=\"com.superrhino.rarering:id/fl_container\"]",
          "snapshotUrls": "https://i.gkd.li/import/13853858"
        }
      ],
      "order": -10,
      "enable": true
    }
  ]
} as any);
