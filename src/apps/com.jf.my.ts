// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jf.my",
  "name": "蜜源",
  "groups": [
    {
      "key": 0,
      "name": "更新提示-版本升级弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "rules": [
        {
          "key": 0,
          "activityIds": [
            ".MainActivity",
            "com.lbe.security.ui.CountdownDialogActivity"
          ],
          "matches": "[vid=\"btn_ok\"][text=\"更新\"] - [vid=\"btn_cancel\"][text=\"关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12838034",
            "https://i.gkd.li/i/12840591"
          ]
        },
        {
          "key": 1,
          "matches": "[vid=\"toUpgradeTv\"] - [vid=\"cancelTv\"]",
          "snapshotUrls": "https://i.gkd.li/i/13786867"
        }
      ],
      "enable": false
    },
    {
      "key": 1,
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".main.ui.dialog.HomeRedPackageDialog",
          "matches": "[vid=\"iv_back\"]",
          "snapshotUrls": "https://i.gkd.li/i/12840619"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": [
        "com.lbe.security.ui.CountdownDialogActivity",
        "com.jf.my.MainActivity"
      ],
      "rules": [
        {
          "matches": "[id=\"com.jf.my:id/btn_ok\"][text=\"更新\"] - [id=\"com.jf.my:id/btn_cancel\"][text=\"关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12838034",
            "https://i.gkd.li/import/12840591"
          ]
        },
        {
          "matches": "[id=\"com.jf.my:id/toUpgradeTv\"] - [id=\"com.jf.my:id/cancelTv\"]",
          "snapshotUrls": "https://i.gkd.li/import/13786867"
        }
      ],
      "enable": false
    },
    {
      "key": 3001,
      "name": "全屏广告-首页-广告弹窗",
      "activityIds": "com.jf.my.main.ui.dialog.HomeRedPackageDialog",
      "rules": "[id=\"com.jf.my:id/iv_back\"]",
      "snapshotUrls": "https://i.gkd.li/import/12840619",
      "enable": false
    }
  ]
} as any);
