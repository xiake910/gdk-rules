// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.icbc",
  "name": "中国工商银行",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activity.main.MainActivity",
          "matches": "[vid=\"tv_time\"][text*=\"跳过\"][text.length<=6]",
          "snapshotUrls": "https://i.gkd.li/i/13330431"
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "评价提示",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "matches": [
            "[text^=\"觉得“中国工商银行”好用吗\"]",
            "[text=\"下次再说\"][clickable=true]"
          ],
          "exampleUrls": "https://e.gkd.li/85e48265-4269-4122-a70f-5361698954c0",
          "snapshotUrls": [
            "https://i.gkd.li/i/18296892",
            "https://i.gkd.li/i/24981859"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 3,
      "name": "局部广告-右下角浮标广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".activity.web.ICBCWebView",
            ".activity.main.MainActivity",
            ".mydetail.MyDetailMainActivity"
          ],
          "matches": "[vid=\"iv_close_task_center\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/22616307",
            "https://i.gkd.li/i/23227312"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 4,
      "name": "功能类-未登录时自动点击登录",
      "desc": "仅限老年版和英文版可用",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.main.MainActivity",
          "matches": "[vid=\"rl_remit_login_button_background\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/23227516",
            "https://i.gkd.li/i/23227551"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 5,
      "name": "权限提示-通知权限",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".oisc.UI.mainPage.OISCMainActivity",
          "matches": [
            "[text=\"开启推送通知\"]",
            "[vid=\"close_iv\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/25356505"
        }
      ],
      "enable": false
    },
    {
      "key": 0,
      "name": "全屏广告-第一次启动提示",
      "activityIds": "com.icbc.activity.init.SplashActivity",
      "rules": "[id=\"com.icbc:id/close_btn\"]",
      "enable": false
    }
  ]
} as any);
