// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.koudai.weidian.buyer",
  "name": "微店",
  "groups": [
    {
      "key": 6,
      "name": "全屏广告-首页红包弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.vdian.android.wdb.main.ui.activity.MainTabsActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true][childCount=0] <2 RelativeLayout[childCount=2] < FrameLayout <2 [parent=null]",
          "snapshotUrls": "https://i.gkd.li/i/13646151"
        }
      ],
      "enable": false
    }
  ]
} as any);
