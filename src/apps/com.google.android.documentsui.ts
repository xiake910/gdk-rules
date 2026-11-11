// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.google.android.documentsui",
  "name": "Android 系统文件选择器",
  "groups": [
    {
      "key": 10,
      "name": "功能类-授权第三方应用访问文件夹",
      "desc": "自动点击\"使用此文件夹\"->\"允许\"",
      "activityIds": "com.android.documentsui.picker.PickActivity",
      "rules": [
        {
          "key": 0,
          "matches": "[text=\"使用此文件夹\"]",
          "snapshotUrls": "https://i.gkd.li/i/12799610"
        },
        {
          "preKeys": 0,
          "key": 1,
          "matches": "[text=\"取消\"] + [text=\"允许\"]",
          "snapshotUrls": "https://i.gkd.li/i/12799603"
        }
      ]
    }
  ]
} as any);
