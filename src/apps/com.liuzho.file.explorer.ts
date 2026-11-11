// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.liuzho.file.explorer",
  "name": "流舟文件",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-升级pro弹窗",
      "desc": "点击x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".DocumentsActivity",
          "matches": "[desc=\"关闭\"] < @View[clickable=true] <2 View < ScrollView < View < View <2 View < View < View < ViewGroup < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/27544788",
          "exampleUrls": "https://e.gkd.li/67d6d50b-73fa-488f-8fe3-512cf353f6af"
        }
      ]
    }
  ]
} as any);
