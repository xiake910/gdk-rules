// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "me.drakeet.puremosaic",
  "name": "纯纯打码",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-解锁高级功能",
      "desc": "点击[不]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".MainActivity",
            "me.iwf.photopicker.PhotoPickerActivity"
          ],
          "matches": [
            "[text=\"解锁高级功能\"]",
            "[text=\"不\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/16761630",
            "https://i.gkd.li/i/16761818"
          ]
        }
      ]
    }
  ]
} as any);
