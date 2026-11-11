// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.cmbchina.ccd.pluto.cmbActivity",
  "name": "掌上生活",
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
            ".CMBRootActivityV2",
            ".secplugin.activity.login.fingerprint.cmbR6VH0R"
          ],
          "matches": "[text=\"暂不更新\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12647025",
            "https://i.gkd.li/i/12727203",
            "https://i.gkd.li/i/13345771"
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
      "activityIds": [
        ".CMBRootActivityV2"
      ],
      "rules": "[vid=\"lly_pop_shell\"] > [vid=\"img_cf_view_close\"]",
      "snapshotUrls": [
        "https://i.gkd.li/i/12647000",
        "https://i.gkd.li/i/13360282"
      ],
      "enable": true
    },
    {
      "key": 3,
      "name": "局部广告-右侧悬浮广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 2,
      "resetMatch": "app",
      "rules": [
        {
          "name": "信用卡、我的页面",
          "activityIds": [
            ".CMBRootActivityV2",
            ".secondNav"
          ],
          "matches": "[vid=\"img_floating_ad_cmb\"] - [vid=\"img_close_floating_ad_cmb\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12647039",
            "https://i.gkd.li/i/12647052"
          ]
        },
        {
          "name": "查账页面",
          "activityIds": [
            ".CMBRootActivityV2",
            ".repaymentBillv3.billRepay",
            ".repaymentBillv3.billDetail.view"
          ],
          "matches": "@[vid=\"img_cmb_drag_pendant_close\"] + [vid=\"img_cmb_drag_pendant_bg\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12647127",
            "https://i.gkd.li/i/14209121"
          ]
        },
        {
          "name": "发现页",
          "activityIds": ".CMBRootActivityV2",
          "matches": "[vid=\"view_cat\"] + [vid=\"view_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13402782"
        }
      ],
      "enable": true
    },
    {
      "key": 4,
      "name": "权限提示-通知权限",
      "desc": "点击x按钮，不开启系统通知",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": "[vid=\"btn_open_notify\"] + [vid=\"iv_delete\"]",
      "snapshotUrls": [
        "https://i.gkd.li/i/12647068"
      ],
      "enable": false
    },
    {
      "key": 5,
      "name": "权限提示-定位权限",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": "[text=\"定位服务\"] +n * > [text=\"取消\"]",
      "snapshotUrls": "https://i.gkd.li/i/14209071",
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-首页弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": [
        "com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2"
      ],
      "rules": "[id=\"com.cmbchina.ccd.pluto.cmbActivity:id/lly_pop_shell\"] > [id=\"com.cmbchina.ccd.pluto.cmbActivity:id/img_cf_view_close\"]",
      "snapshotUrls": [
        "https://i.gkd.li/import/12647000",
        "https://i.gkd.li/import/13360282"
      ],
      "enable": true
    },
    {
      "enable": false,
      "key": 3001,
      "name": "权限提示-消息页面-通知开关",
      "desc": "点击x按钮，不开启系统通知",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": [
        "com.cmbchina.ccd.pluto.cmbActivity.messagebox"
      ],
      "rules": "[id=\"com.cmbchina.ccd.pluto.cmbActivity:id/btn_open_notify\"] + [id=\"com.cmbchina.ccd.pluto.cmbActivity:id/iv_delete\"]",
      "snapshotUrls": [
        "https://i.gkd.li/import/12647068"
      ]
    }
  ]
} as any);
