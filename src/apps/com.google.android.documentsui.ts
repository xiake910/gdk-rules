// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
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
      ],
      "enable": false
    }
  ]
} as any);
