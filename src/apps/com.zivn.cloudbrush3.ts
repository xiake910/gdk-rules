// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.zivn.cloudbrush3",
  "name": "书法字典大全",
  "groups": [
    {
      "key": 3,
      "name": "分段广告-信息流广告",
      "fastQuery": true,
      "activityIds": ".app.HomeActivity",
      "rules": [
        {
          "key": 0,
          "name": "点击关闭",
          "matches": "@View[clickable=true] < FrameLayout  -2 FrameLayout [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13425305"
        },
        {
          "preKeys": [
            0
          ],
          "name": "点击[不感兴趣]",
          "matches": "@LinearLayout > [id=\"com.byted.pangle.m:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13425306"
        }
      ]
    },
    {
      "enable": false,
      "key": 3000,
      "name": "局部广告-信息流广告",
      "fastQuery": true,
      "activityIds": "com.zivn.cloudbrush3.app.HomeActivity",
      "rules": [
        {
          "key": 0,
          "name": "点击【x】",
          "matches": "@View[clickable=true] < FrameLayout  -2 FrameLayout [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/import/13425305"
        },
        {
          "preKeys": 0,
          "name": "点击【不感兴趣】",
          "matches": "@LinearLayout > [id=\"com.byted.pangle.m:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/import/13425306"
        }
      ]
    }
  ]
} as any);
