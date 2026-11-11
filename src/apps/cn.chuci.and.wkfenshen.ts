// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.chuci.and.wkfenshen",
  "name": "猴子分身",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-购买会员弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".ActMain",
          "matches": [
            "[vid=\"dialog_local_buy_btn\"]",
            "[vid=\"action_close\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13226988"
        }
      ]
    }
  ]
} as any);
