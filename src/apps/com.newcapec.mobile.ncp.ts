// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
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
      ]
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
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-密码过期提示弹窗",
      "desc": "密码过期提示弹窗，点击【取消】按钮。（需手动开启）",
      "enable": false,
      "activityIds": "com.wanxiao.ui.activity.IndexActivity",
      "rules": "[id=\"com.newcapec.mobile.ncp:id/dialog_oppotion\"]",
      "snapshotUrls": "https://i.gkd.li/import/12843399"
    }
  ]
} as any);
