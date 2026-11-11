// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sjm.zhuanzhuan.mcy",
  "name": "喵次元",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "key": 1,
          "action": "back",
          "matches": "[text=\"立即升级\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/13392514"
        }
      ],
      "enable": false
    }
  ]
} as any);
