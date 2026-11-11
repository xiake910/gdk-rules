// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.kuaiduizuoye.scan",
  "name": "快对AI",
  "groups": [
    {
      "key": 1,
      "name": "分段广告",
      "desc": "①点击[关闭] ②点击[知道了]",
      "fastQuery": true,
      "activityIds": [
        ".activity.manyquestionsearch.activity.PicManySearchActivity",
        ".picturesearch.pages.whole.PicManySearchNewV3Activity"
      ],
      "rules": [
        {
          "key": 1,
          "name": "①点击[关闭]",
          "matches": "[width>700][height<300] >3 [text=\"关闭\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/33854308",
            "https://i.gkd.li/i/34192315"
          ],
          "exampleUrls": "https://e.gkd.li/e81f7bbd-a5ce-4b57-b09a-185bd9529c9d"
        },
        {
          "key": 20,
          "preKeys": [
            1
          ],
          "name": "②点击[知道了]",
          "matches": "[text=\"知道了\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/34192316",
          "exampleUrls": "https://e.gkd.li/fc3499a7-a8a7-4b7d-9f47-71814bf7e811"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-首页广告弹窗",
      "activityIds": "com.hihonor.android.launcher.drawer.DrawerLauncher",
      "rules": "[id=\"com.kuaiduizuoye.scan:id/iv_advertisement_widget_close\"]",
      "snapshotUrls": "https://i.gkd.li/import/12716285",
      "enable": false
    }
  ]
} as any);
