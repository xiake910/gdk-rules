// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.paget96.batteryguru",
  "name": "Battery Guru",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-卡片广告",
      "desc": "点击[移除广告]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "activities.MainActivity",
          "matches": "[vid=\"remove_ads\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/81d94f93-2308-4401-a151-771e5a94b79a",
          "snapshotUrls": "https://i.gkd.li/i/17538140"
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "全屏广告",
      "desc": "点击关闭",
      "rules": [
        {
          "key": 0,
          "activityIds": "com.google.android.gms.ads.AdActivity",
          "matches": "[id=\"ad_container\"] >3 [id=\"video_container\"] >3 Button[clickable=true][childCount=0][id=null][text=\"\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/40c72a7b-3e68-496f-a993-43ab9c759cbd",
          "snapshotUrls": "https://i.gkd.li/i/23417592"
        },
        {
          "key": 1,
          "activityIds": ".activities.IntroActivity",
          "matches": "@Button[clickable=true][childCount=0][id=null] < View[childCount=1] <3 View - [id=\"app-interstitial-slot\"] >2 [id=\"abgcp\"]",
          "snapshotUrls": "https://i.gkd.li/i/23416244"
        }
      ],
      "enable": false
    }
  ]
} as any);
