// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.romielf.mrsc",
  "name": "每日赛车",
  "groups": [
    {
      "key": 1,
      "name": "分段广告-新闻页面摇一摇广告",
      "desc": "点击准确率灵敏度不太高",
      "activityIds": ".MainActivity",
      "rules": [
        {
          "key": 1,
          "matches": "@Image < View -n View >2 View[text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/12667539"
        },
        {
          "preKeys": [
            1
          ],
          "key": 2,
          "matches": "[id=\"com.byted.pangle:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12667549"
        }
      ]
    },
    {
      "name": "全屏广告-新闻页面摇一摇广告",
      "key": 3000,
      "enable": false,
      "activityIds": "com.romielf.mrsc.MainActivity",
      "desc": "点击准确率灵敏度不太高",
      "rules": [
        {
          "matches": "@Image < View -n View >2 View[text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/import/12667539"
        },
        {
          "matches": "[id=\"com.byted.pangle:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/import/12667549"
        }
      ]
    }
  ]
} as any);
