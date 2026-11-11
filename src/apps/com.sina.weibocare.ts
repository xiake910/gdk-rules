// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sina.weibocare",
  "name": "WeiboBig",
  "groups": [
    {
      "key": 1,
      "name": "功能类-流量继续播放视频",
      "desc": "点击[播放]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.weico.international.activity.MainFragmentActivity",
          "matches": "[vid=\"ed_btn_positive\"][text=\"播放\"]",
          "snapshotUrls": "https://i.gkd.li/i/13253223"
        }
      ]
    }
  ]
} as any);
