// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.miHoYo.hkrpg",
  "name": "崩坏：星穹铁道",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告-用户协议",
      "desc": "不接受怎么玩?",
      "fastQuery": true,
      "matchTime": 16000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 16000,
      "rules": [
        {
          "activityIds": "com.combosdk.module.ua.ProtocolActivity",
          "matches": "[text^=\"用户协议\"] +2 LinearLayout > [text=\"拒绝\"] + [text=\"接受\"][clickable=true][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/c5ce0381-bef9-4b0b-90e4-786166d3afc0",
          "snapshotUrls": "https://i.gkd.li/i/25823587"
        }
      ],
      "order": -10,
      "enable": true
    }
  ]
} as any);
