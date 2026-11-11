// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "camera.timestamp.mark.watermark",
  "name": "今日水印相机",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-谷歌广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.google.android.gms.ads.AdActivity",
          "matches": "@ImageButton[desc=\"Interstitial close button\"][visibleToUser=true] < FrameLayout <2 RelativeLayout < [id=\"android:id/content\"]",
          "exampleUrls": "https://e.gkd.li/1ab940d5-88b8-4088-81fe-9cb72c4cbd53",
          "snapshotUrls": "https://i.gkd.li/i/17058992"
        }
      ]
    }
  ]
} as any);
