// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.alicloud.databox",
  "name": "阿里云盘",
  "groups": [
    {
      "key": 0,
      "name": "功能类-自动签到",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": [
        ".MainActivity",
        ".navigation.NavigationFragmentContainerActivity"
      ],
      "rules": [
        {
          "key": 0,
          "matches": "[text=\"领取\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/15573070",
            "https://i.gkd.li/i/15573233"
          ]
        },
        {
          "preKeys": [
            0
          ],
          "key": 1,
          "action": "back",
          "matches": "[vid=\"ivCardBackBackground\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/15144565"
        }
      ],
      "enable": false
    },
    {
      "key": 1,
      "name": "全屏广告-活动弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "@TextView[clickable=true][visibleToUser=true] - Image[text!=null] < View < View < View < WebView < WebView < [vid=\"webContainer\"]",
          "snapshotUrls": "https://i.gkd.li/i/14235204"
        }
      ],
      "enable": false
    },
    {
      "key": 3,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "[text*=\"新版本\"] -n @[clickable=true][getChild(0).name$=\"Image\"] <<4 [id=\"root\"] <<3 [vid=\"webContainer\"]",
          "snapshotUrls": "https://i.gkd.li/i/13806865"
        }
      ],
      "enable": false
    },
    {
      "key": 4,
      "name": "功能类-[开启相册自动备份功能]弹窗",
      "desc": "关闭弹窗",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@TextView[childCount=0][clickable=true][visibleToUser=true] <4 View[childCount=4] < View < View < WebView < WebView < [vid=\"webContainer\"]",
          "snapshotUrls": "https://i.gkd.li/i/14414446"
        }
      ],
      "enable": false
    },
    {
      "key": 5,
      "name": "功能类-扫描二维码登录时自动点击登录",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.taobao.login4android.scan.QrScanActivity",
          "matches": "[text=\"确认并登录\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/14414503"
        }
      ],
      "enable": false
    },
    {
      "key": 6,
      "name": "全屏广告-[容量使用超限]提示",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": [
            "[text=\"容量使用超限\"]",
            "[vid=\"layout_close\"]"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/a219a480-c0a3-4064-832d-533f66995fed",
          "snapshotUrls": "https://i.gkd.li/i/15158788"
        }
      ],
      "enable": false
    },
    {
      "key": 7,
      "name": "局部广告-卡片广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "key": 0,
          "activityIds": ".transferpage.TransferListActivity",
          "matches": "[vid=\"close\"]",
          "snapshotUrls": "https://i.gkd.li/i/15433289"
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "功能类-时光设备间-自动点击“开心收下”",
      "activityIds": "com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main",
      "actionMaximum": 1,
      "resetMatch": "activity",
      "matchTime": 10000,
      "rules": "View[childCount=9] > @Image -2 View[childCount=5]",
      "snapshotUrls": "https://i.gkd.li/import/13596924",
      "enable": false
    },
    {
      "key": 3000,
      "name": "更新提示-版本更新",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "activityIds": "com.alicloud.databox.MainActivity",
      "rules": [
        {
          "matches": "[text^=\"立即了解\"] -3 View[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/import/13806865"
        }
      ],
      "enable": false
    }
  ]
} as any);
