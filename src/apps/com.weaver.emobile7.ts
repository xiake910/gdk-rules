// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.weaver.emobile7",
  "name": "EMobile7",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "activityIds": "weaver.fw.com.MainActivity",
      "rules": [
        {
          "matches": "@[id=\"com.weaver.emobile7:id/sdl__negative_button\"][text=\"取消\"] +(2) [id=\"com.weaver.emobile7:id/sdl__positive_button\"][text=\"更新\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12673154"
          ]
        }
      ],
      "enable": false
    }
  ]
} as any);
