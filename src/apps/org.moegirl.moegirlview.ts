// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "org.moegirl.moegirlview",
  "name": "萌娘百科",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-搜索页广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@ImageView[width<50 && height<50] < FrameLayout <3 FrameLayout[childCount>3] <<7 View - View > EditText <<7 [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/26493172"
        }
      ]
    }
  ]
} as any);
