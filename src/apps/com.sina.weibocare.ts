// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
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
    },
    {
      "enable": false,
      "key": 3000,
      "name": "全屏广告-流量继续播放视频",
      "desc": "点击[播放]",
      "fastQuery": true,
      "activityIds": "com.weico.international.activity.MainFragmentActivity",
      "rules": "[id=\"com.sina.weibocare:id/ed_btn_positive\"][text=\"播放\"]",
      "snapshotUrls": "https://i.gkd.li/import/13253223"
    }
  ]
} as any);
