// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.smzdm.client.android",
  "name": "什么值得买",
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
          "activityIds": ".app.HomeActivity",
          "matches": "[vid=\"dialog_home_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12695751"
        }
      ],
      "enable": false
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
          "activityIds": ".app.HomeActivity",
          "matches": "[vid=\"tv_version\"] +2 [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13198016"
        }
      ],
      "enable": false
    },
    {
      "key": 10,
      "name": "权限提示-请求读取剪贴板权限弹窗",
      "desc": "点击暂不允许",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".app.HomeActivity",
          "matches": "@[text=\"暂不允许\"] + [text=\"允许\"]",
          "snapshotUrls": "https://i.gkd.li/i/13198020"
        }
      ],
      "enable": false
    },
    {
      "key": 3,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            ".module.haojia.detail.HaojiaDetailActivity",
            ".module.community.module.bask.BaskDetailActivity",
            ".app.HomeActivity"
          ],
          "matches": [
            "TextView[text^=\"开启推送通知\"]",
            "[vid=\"iv_close\" || vid=\"ib_close\"][visibleToUser=true]"
          ],
          "exampleUrls": [
            "https://e.gkd.li/2e979f31-7498-497f-a4ed-b82b884e2d8d",
            "https://e.gkd.li/a52462c1-e3bf-45ad-8639-6fa764f2135d"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13438810",
            "https://i.gkd.li/i/13626746",
            "https://i.gkd.li/i/18150286"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "fastQuery": true,
      "name": "全屏广告-APP内弹窗广告",
      "activityIds": "com.smzdm.client.android.app.HomeActivity",
      "rules": "[id=\"com.smzdm.client.android:id/dialog_home_close\"]",
      "snapshotUrls": "https://i.gkd.li/import/12695751",
      "enable": false
    },
    {
      "key": 3001,
      "name": "全屏广告-请求读取剪贴板权限弹窗",
      "fastQuery": true,
      "activityIds": "com.smzdm.client.android.app.HomeActivity",
      "rules": "@[text=\"暂不允许\"] + [text=\"允许\"]",
      "snapshotUrls": "https://i.gkd.li/import/13198020",
      "enable": false
    },
    {
      "key": 3002,
      "name": "全屏广告-通知弹窗",
      "fastQuery": true,
      "actionMaximum": 1,
      "activityIds": [
        "com.smzdm.client.android.module.community.module.bask.BaskDetailActivity",
        "com.smzdm.client.android.module.haojia.detail.HaojiaDetailActivity"
      ],
      "rules": "ImageView[id=\"com.smzdm.client.android:id/ib_close\"]",
      "snapshotUrls": [
        "https://i.gkd.li/import/13438810",
        "https://i.gkd.li/import/13626746"
      ],
      "enable": false
    }
  ]
} as any);
