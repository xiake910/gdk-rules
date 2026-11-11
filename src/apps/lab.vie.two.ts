// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "lab.vie.two",
  "name": "LIBVIO",
  "groups": [
    {
      "key": 1,
      "name": "其他-账号注册说明弹窗",
      "desc": "每次打开app的弹窗提示，自动点击\"我知道了\"",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "[desc=\"账号注册说明\"] +2 [desc=\"我知道了\"]",
          "snapshotUrls": "https://i.gkd.li/i/13379070"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-账号注册说明弹窗",
      "desc": "每次打开app的弹窗提示，本规则自动点击【我知道了】",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": "[desc=\"账号注册说明\"] +2 [desc=\"我知道了\"]",
      "snapshotUrls": "https://i.gkd.li/import/13379070",
      "enable": false
    }
  ]
} as any);
