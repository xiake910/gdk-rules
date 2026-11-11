// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
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
      ],
      "enable": false
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
