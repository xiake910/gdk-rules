// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.abdownloadmanager",
  "name": "AB DM",
  "groups": [
    {
      "key": 1,
      "name": "功能类-自动展开各下载线程",
      "desc": "正在下载-左下角展开下载线程",
      "actionMaximum": 1,
      "forcedTime": 5000,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".android.pages.singledownload.SingleDownloadPageActivity",
            ".android.pages.browser.BrowserActivity"
          ],
          "matches": "@View[width<102 && height<102][clickable=true] <3 [childCount=5] <6 View <4 * << * <2 * <<2 [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/28308427",
          "exampleUrls": "https://e.gkd.li/36c7ceea-a13f-4567-87d9-f3708c1de031"
        }
      ]
    }
  ]
} as any);
