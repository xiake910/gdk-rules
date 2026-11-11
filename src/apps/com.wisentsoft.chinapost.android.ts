// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wisentsoft.chinapost.android",
  "name": "中国邮政",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-首页弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "@ImageView[clickable=true] <2 LinearLayout <3 ViewGroup < [vid=\"ll_main\"]",
          "snapshotUrls": "https://i.gkd.li/i/15914347"
        }
      ],
      "enable": false
    }
  ]
} as any);
