// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.mmbox.xbrowser",
  "name": "X浏览器",
  "groups": [
    {
      "key": 1,
      "name": "功能类-自动允许打开外部App",
      "desc": "是否允许打开外部应用? -> 允许",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".BrowserActivity",
          "matches": "[vid=\"message_bar\"][childCount=2] > [text=\"是否允许打开外部应用?\"][visibleToUser=true] + [text=\"允许\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/34007323",
          "exampleUrls": "https://e.gkd.li/402beb6f-6777-423c-9db1-7f06ba46a034"
        }
      ]
    }
  ]
} as any);
