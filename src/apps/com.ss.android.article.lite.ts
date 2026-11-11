// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ss.android.article.lite",
  "name": "今日头条极速版",
  "groups": [
    {
      "key": 1,
      "name": "功能类-全自动续听书时长",
      "desc": "<03:45有效,时长不足自动看广告",
      "fastQuery": true,
      "activityIds": [
        "com.ss.android.list.news.activity.AudioNewsListActivity",
        "com.ss.android.excitingvideo.ExcitingVideoActivity"
      ],
      "rules": [
        {
          "key": 0,
          "name": "③已完成-关闭",
          "matches": "[text^=\"03:\" && text.substring(3,5).toInt()>45] - [text=\"剩余时长\"] < * -3 @ImageView[width<102 && height<102] + [text^=\"领取成功\"]",
          "snapshotUrls": "https://i.gkd.li/i/26456102"
        },
        {
          "key": 1,
          "name": "①点击看视频",
          "matches": "[text.get(1).toInt()<3 || (text^=\"03:\" && text.substring(3,5).toInt()<45)] - [text=\"剩余时长\"] < * + [text^=\"看视频领取\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/26456075",
          "exampleUrls": "https://e.gkd.li/dec3910f-ee59-482b-99e0-aba6de33c67c"
        },
        {
          "preKeys": [
            1
          ],
          "name": "②领取成功x掉",
          "matches": "ImageView < @ViewGroup[childCount=1][visibleToUser=true] <n ViewGroup[childCount>6] <<6 [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/26456098",
          "excludeSnapshotUrls": "https://i.gkd.li/i/26456099",
          "exampleUrls": "https://e.gkd.li/720a223e-70af-455a-965c-dcf1a7228921"
        }
      ]
    }
  ]
} as any);
