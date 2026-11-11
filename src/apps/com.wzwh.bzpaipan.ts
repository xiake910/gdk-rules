// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wzwh.bzpaipan",
  "name": "问真八字排盘",
  "groups": [
    {
      "key": 3,
      "name": "全屏广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.qq.e.ads.PortraitADActivity",
          "matches": "@ImageView[clickable=true] < LinearLayout[childCount=1] <2 FrameLayout[childCount=2] < [id=\"android:id/content\"][childCount=1]",
          "snapshotUrls": "https://i.gkd.li/i/13162912"
        }
      ],
      "enable": false
    }
  ]
} as any);
