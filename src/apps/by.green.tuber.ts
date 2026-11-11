// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "by.green.tuber",
  "name": "YouTube",
  "groups": [
    {
      "key": 1,
      "name": "功能类-关闭底部播放横条",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "ImageButton[desc=\"预览缩略图\"] +2 LinearLayout > ImageButton + ImageButton[visibleToUser=true][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/24590682"
        }
      ]
    }
  ]
} as any);
