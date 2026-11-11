// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tuying.kuimg.rjm",
  "name": "热剧猫",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "key": 0,
          "activityIds": ".MainActivity",
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13166088"
        },
        {
          "key": 1,
          "activityIds": ".MainActivity",
          "matches": [
            "[text=\"广告\"]",
            "@ViewGroup > [text=\"跳过\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13166086"
        }
      ],
      "enable": true
    },
    {
      "key": 3000,
      "name": "全屏广告-广告弹窗",
      "activityIds": "com.tuying.kuimg.rjm.MainActivity",
      "rules": [
        {
          "key": 0,
          "matches": "[id=\"com.tuying.kuimg.rjm:id/ksad_tk_view\"] >n @ViewGroup[childCount=1][clickable=true] > ImageView",
          "snapshotUrls": "https://i.gkd.li/import/13166088"
        },
        {
          "key": 1,
          "matches": "[id=\"com.tuying.kuimg.rjm:id/ksad_tk_view\"] >n @ViewGroup > [text=\"跳过\"]",
          "snapshotUrls": "https://i.gkd.li/import/13166086"
        }
      ],
      "enable": true
    }
  ]
} as any);
