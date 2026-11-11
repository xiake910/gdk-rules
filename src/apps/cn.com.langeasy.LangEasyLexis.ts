// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.com.langeasy.LangEasyLexis",
  "name": "不背单词",
  "groups": [
    {
      "key": 1,
      "name": "功能类-自动签到",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activity.MainActivity",
          "matches": "[vid=\"bb_checkin\"]",
          "snapshotUrls": "https://i.gkd.li/i/13610321"
        }
      ]
    },
    {
      "key": 2,
      "name": "功能类-右下角年度报告弹窗",
      "desc": "点击关闭",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activity.MainActivity",
          "matches": "[vid=\"close_float_button\"]",
          "snapshotUrls": "https://i.gkd.li/i/13759025"
        }
      ]
    },
    {
      "key": 3000,
      "name": "局部广告-右下角弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": "cn.com.langeasy.LangEasyLexis.activity.MainActivity",
          "matches": "[id=\"cn.com.langeasy.LangEasyLexis:id/close_float_button\"]",
          "snapshotUrls": "https://i.gkd.li/import/13759025"
        }
      ],
      "enable": false
    },
    {
      "key": 3,
      "name": "全屏广告-新功能上线",
      "fastQuery": true,
      "actionMaximum": 1,
      "matchTime": 200000,
      "activityIds": ".activity.MainActivity",
      "rules": [
        {
          "matches": "ImageView[id=\"cn.com.langeasy.LangEasyLexis:id/close_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/18867092"
        }
      ],
      "enable": false
    }
  ]
} as any);
