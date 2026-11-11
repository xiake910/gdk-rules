// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "io.github.samolego.canta",
  "name": "Canta",
  "groups": [
    {
      "key": 1,
      "name": "其他-卸载应用后弹窗",
      "desc": "点击[取消]",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "[text=\"取消\"] < @[clickable=true] -2 [text^=\"您已成功卸载\"]",
          "snapshotUrls": "https://i.gkd.li/i/28225422"
        }
      ]
    }
  ]
} as any);
