// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.onethingcloud.android",
  "name": "网心云",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "action": "clickCenter",
          "matches": "@View[desc*=\"跳过\"][desc.length<10][visibleToUser=true] < View < View < View < View < FrameLayout < [id=\"android:id/content\"]",
          "exampleUrls": "https://e.gkd.li/0d0560e5-2b7d-4599-8336-a5254d5e13ea",
          "snapshotUrls": "https://i.gkd.li/i/18094505"
        }
      ],
      "order": -10,
      "enable": true
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true][index=parent.childCount.minus(1)] <(2,3) View[getChild(0).text=null] < View < View[childCount=2] < View < FrameLayout < [id=\"android:id/content\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14766665",
            "https://i.gkd.li/i/16438609"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/18094505"
        }
      ],
      "enable": true
    },
    {
      "key": 3000,
      "name": "全屏广告-广告弹窗",
      "activityIds": "com.onethingcloud.android.MainActivity",
      "rules": "FrameLayout >8 View > ImageView + ImageView + ImageView[clickable=true]",
      "snapshotUrls": "https://i.gkd.li/import/12841171",
      "enable": true
    }
  ]
} as any);
