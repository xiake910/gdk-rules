// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sina.oasis",
  "name": "绿洲",
  "groups": [
    {
      "key": 1,
      "name": "分段广告-首页推荐广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "key": 0,
          "matches": "ImageView[vid=\"gdt_v2_banner_ad_close_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/13434468"
        },
        {
          "preKeys": [
            0
          ],
          "matches": "@LinearLayout > [text*=\"关闭此广告\"][text.length<=10]",
          "snapshotUrls": "https://i.gkd.li/i/13498631"
        }
      ]
    }
  ]
} as any);
