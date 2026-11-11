// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.cn21.ecloud",
  "name": "天翼云盘",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-首页弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activity.MainPageActivity",
          "matches": "FrameLayout > View[childCount=1] > View[childCount=1] >(1,4) View[childCount=2][desc=null] > @ImageView[clickable=true][visibleToUser=true] <<n [vid=\"content_frame\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12865488",
            "https://i.gkd.li/i/16653930",
            "https://i.gkd.li/i/16647901"
          ]
        }
      ],
      "enable": true
    },
    {
      "key": 2,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activity.MainPageActivity",
          "matches": "[vid=\"ivCancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13399488"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-首页弹窗",
      "activityIds": [
        "com.cn21.ecloud.activity.MainPageActivity"
      ],
      "rules": "[id=\"com.cn21.ecloud:id/content_frame\"] >n FrameLayout >n @ImageView[desc=null] - View < View[childCount=2]",
      "snapshotUrls": [
        "https://i.gkd.li/import/12865481",
        "https://i.gkd.li/import/12865488"
      ],
      "enable": true
    }
  ]
} as any);
