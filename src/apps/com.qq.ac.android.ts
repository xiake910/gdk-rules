// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.qq.ac.android",
  "name": "腾讯动漫",
  "groups": [
    {
      "key": 2,
      "name": "局部广告-漫画阅读页面-左侧悬浮广告",
      "rules": [
        {
          "activityIds": ".reader.comic.ComicReaderActivity",
          "matches": "[vid=\"operation_ad_view\"] > [vid=\"btn_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12707756"
        }
      ]
    },
    {
      "key": 3,
      "name": "局部广告-信息流广告",
      "desc": "点击关闭",
      "rules": [
        {
          "key": 0,
          "name": "漫画章节之间的广告",
          "fastQuery": true,
          "activityIds": ".reader.comic.ComicReaderActivity",
          "matches": "[vid=\"iv_del\"]",
          "exampleUrls": "https://m.gkd.li/57941037/1be7564d-f6c2-429d-9cb0-3d923adafc8a",
          "snapshotUrls": "https://i.gkd.li/i/14730335"
        }
      ]
    },
    {
      "key": 1,
      "name": "青少年模式",
      "activityIds": [
        "com.qq.ac.android.main.MainActivity"
      ],
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": "[text=\"青少年守护模式\"] - [id=\"com.qq.ac.android:id/close_btn\"]",
      "snapshotUrls": [
        "https://i.gkd.li/import/12707752",
        "https://i.gkd.li/import/13195636"
      ],
      "enable": false
    }
  ]
} as any);
