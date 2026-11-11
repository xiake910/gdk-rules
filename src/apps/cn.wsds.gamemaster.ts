// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.wsds.gamemaster",
  "name": "迅游手游加速器",
  "groups": [
    {
      "key": 2,
      "name": "分段广告-卡片广告",
      "desc": "点击关闭-点击不感兴趣",
      "fastQuery": true,
      "rules": [
        {
          "key": 0,
          "activityIds": ".ui.gamedetails.ActivityGameDetails",
          "matches": "ViewGroup[childCount=2] > @ImageView[childCount=0][index=1][clickable=true][visibleToUser=true] - [text=\"立即下载\"]",
          "snapshotUrls": "https://i.gkd.li/i/13930398"
        },
        {
          "preKeys": [
            0
          ],
          "activityIds": ".ui.gamedetails.ActivityGameDetails",
          "matches": "[text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13930399"
        }
      ]
    }
  ]
} as any);
