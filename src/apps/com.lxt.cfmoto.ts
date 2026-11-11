// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.lxt.cfmoto",
  "name": "CFMOTO",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "key": 1,
          "name": "首页弹窗广告",
          "fastQuery": true,
          "activityIds": "com.cfmoto.oilmoto.ui.MainCfActivity",
          "matches": "[vid=\"closeClick\"]",
          "snapshotUrls": "https://i.gkd.li/i/13401967"
        }
      ],
      "enable": true
    },
    {
      "key": 3000,
      "name": "局部广告-弹窗广告",
      "rules": [
        {
          "key": 1,
          "name": "首页弹窗广告",
          "activityIds": "com.cfmoto.oilmoto.ui.MainCfActivity",
          "matches": "RelativeLayout[childCount=2] > [id=\"com.lxt.cfmoto:id/image\"] + [id=\"com.lxt.cfmoto:id/closeClick\"]",
          "snapshotUrls": "https://i.gkd.li/import/13401967"
        }
      ],
      "enable": true
    }
  ]
} as any);
