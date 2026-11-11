// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.youdao.translator",
  "name": "有道翻译官",
  "groups": [
    {
      "key": 1,
      "name": "分段广告-翻译结果下方广告",
      "desc": "①点击[x]掉 ②点击[不再展示]",
      "fastQuery": true,
      "activityIds": ".activity.trans.TransResultActivity",
      "rules": [
        {
          "key": 0,
          "name": "①点击[x]掉",
          "matches": "@ImageView[vid=\"close_iv\"] + [vid=\"native_ad_flag_tv\"]",
          "snapshotUrls": "https://i.gkd.li/i/13259910"
        },
        {
          "preKeys": [
            0
          ],
          "name": "②点击[不再展示]",
          "matches": "[text*=\"不再展示\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/30857016",
          "exampleUrls": "https://e.gkd.li/7975274a-aa0b-4021-9624-5c1c3477cb9a"
        }
      ]
    },
    {
      "key": 3000,
      "name": "局部广告-翻译界面-结果下方广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.youdao.translator.activity.trans.TransResultActivity",
          "matches": "@ImageView[id=\"com.youdao.translator:id/close_iv\"] + [id=\"com.youdao.translator:id/native_ad_flag_tv\"]",
          "snapshotUrls": "https://i.gkd.li/i/13259910"
        }
      ]
    }
  ]
} as any);
