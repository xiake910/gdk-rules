// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.excean.splay",
  "name": "OurPlay加速器",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": "[text=\"发现新版本\"] +n * > [text=\"忽略\"]",
      "snapshotUrls": "https://i.gkd.li/import/12684551",
      "enable": false
    }
  ]
} as any);
