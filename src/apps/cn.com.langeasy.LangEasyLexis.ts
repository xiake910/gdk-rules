// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
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
    }
  ]
} as any);
