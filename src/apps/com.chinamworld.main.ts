// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.chinamworld.main",
  "name": "中国建设银行",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "matches": [
            "[vid=\"ll_load\"][visibleToUser=true]",
            "[vid=\"skip\"][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/69567942-f5a1-40f0-b4b6-7f8bf2348052",
          "snapshotUrls": "https://i.gkd.li/i/20649289"
        }
      ],
      "order": -10,
      "enable": true
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.ccb.start.view.startdialog.StartDialogActivity",
          "matches": [
            "[vid=\"tip_view_pager\"][visibleToUser=true]",
            "[vid=\"close\"][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/d1f24a66-8d46-4c0d-9ca9-ac5b540a6548",
          "snapshotUrls": "https://i.gkd.li/i/20649291"
        }
      ],
      "enable": true
    },
    {
      "key": 2,
      "name": "通知提示-VPN风险弹窗",
      "desc": "点击[知晓风险，继续使用]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.ccb.start.MainActivity",
          "matches": "[text=\"知晓风险，继续使用\"]",
          "exampleUrls": "https://e.gkd.li/827582b2-d449-429c-b21d-7277c618d8bf",
          "snapshotUrls": "https://i.gkd.li/i/18113538"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-我的页面-广告弹窗",
      "activityIds": "com.ccb.start.view.startdialog.StartDialogActivity",
      "rules": "[id=\"com.chinamworld.main:id/indicator_container_container\"] + [id=\"com.chinamworld.main:id/close\"]",
      "snapshotUrls": "https://i.gkd.li/import/12726961",
      "enable": true
    }
  ]
} as any);
