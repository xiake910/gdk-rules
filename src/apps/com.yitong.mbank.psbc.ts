// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.yitong.mbank.psbc",
  "name": "邮储银行",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            ".module.home.view.activity.MainActivity",
            ".module.app.view.customview.dialog.DialogUpdateApk"
          ],
          "matches": "Button[vid=\"bt_cancel\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12685350",
            "https://i.gkd.li/i/13695462"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "全屏广告-首页弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".module.home.view.activity.MainActivity",
          "matches": "[vid=\"iv_theme\"] + [vid=\"iv_theme_close_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/12755516"
        }
      ],
      "enable": false
    },
    {
      "key": 3,
      "name": "局部广告-首页-浮窗广告",
      "rules": [
        {
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".module.home.view.activity.MainActivity",
          "matches": "[vid=\"img_close_float_window\"]",
          "snapshotUrls": "https://i.gkd.li/i/13797314"
        }
      ],
      "enable": false
    },
    {
      "key": 4,
      "name": "其他-无视网络代理风险[继续]使用",
      "desc": "点击[知晓风险, 继续使用]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".module.home.view.activity.MainActivity",
          "matches": "[text*=\"正在使用网络代理\"] +n [text$=\"继续使用\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/27544847"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-首页广告弹窗",
      "activityIds": "com.yitong.mbank.psbc.module.home.view.activity.MainActivity",
      "rules": "[id=\"com.yitong.mbank.psbc:id/iv_theme\"] + [id=\"com.yitong.mbank.psbc:id/iv_theme_close_btn\"]",
      "snapshotUrls": "https://i.gkd.li/import/12755516",
      "enable": false
    }
  ]
} as any);
