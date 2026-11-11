// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.com.hkgt.gasapp",
  "name": "易捷加油",
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
          "activityIds": ".dialog.BannerDialog",
          "matches": "ImageView[vid=\"exit\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12744270"
        }
      ],
      "enable": true
    },
    {
      "key": 2,
      "name": "权限提示-定位权限",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.main.HkMainActivity",
          "matches": "@[vid=\"close_open\"] -2 [text*=\"开启定位\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/82022058-fadc-43de-baca-d254249b6c51",
          "snapshotUrls": "https://i.gkd.li/i/20961130"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-广告弹窗",
      "fastQuery": true,
      "activityIds": "cn.com.hkgt.gasapp.dialog.BannerDialog",
      "rules": "ImageView[id=\"cn.com.hkgt.gasapp:id/exit\"][clickable=true]",
      "snapshotUrls": "https://i.gkd.li/import/12744270",
      "enable": true
    }
  ]
} as any);
