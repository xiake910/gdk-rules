// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
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
