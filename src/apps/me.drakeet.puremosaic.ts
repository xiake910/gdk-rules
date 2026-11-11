// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
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
      ],
      "enable": false
    }
  ]
} as any);
