// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.huaban.android",
  "name": "花瓣",
  "groups": [
    {
      "key": 1,
      "fastQuery": true,
      "name": "更新提示-版本更新弹窗",
      "desc": "点击不再提示",
      "rules": [
        {
          "matches": "[vid=\"tv_update\"] + * > [text=\"不再提示\"]",
          "snapshotUrls": "https://i.gkd.li/import/13832253"
        }
      ],
      "enable": false
    }
  ]
} as any);
