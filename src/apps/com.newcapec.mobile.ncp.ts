// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.newcapec.mobile.ncp",
  "name": "完美校园",
  "groups": [
    {
      "key": 10,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.wanxiao.basebusiness.activity.SplashActivity",
          "matches": "[vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12843377"
        }
      ],
      "enable": false
    },
    {
      "key": 11,
      "name": "其他-密码过期提示弹窗",
      "desc": "点击\"取消\"按钮",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.wanxiao.ui.activity.IndexActivity",
          "matches": "[vid=\"dialog_oppotion\"]",
          "snapshotUrls": "https://i.gkd.li/i/12843399"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-密码过期提示弹窗",
      "desc": "密码过期提示弹窗，点击【取消】按钮。（需手动开启）",
      "enable": true,
      "activityIds": "com.wanxiao.ui.activity.IndexActivity",
      "rules": "[id=\"com.newcapec.mobile.ncp:id/dialog_oppotion\"]",
      "snapshotUrls": "https://i.gkd.li/import/12843399"
    }
  ]
} as any);
