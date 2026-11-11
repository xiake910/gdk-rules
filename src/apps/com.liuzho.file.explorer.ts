// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
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
      ],
      "enable": false
    }
  ]
} as any);
