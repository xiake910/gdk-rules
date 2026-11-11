// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.huawei.smarthome",
  "name": "智慧生活",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "activityIds": "com.huawei.android.launcher.unihome.UniHomeLauncher",
      "rules": "@[text=\"以后再说\"] +2 [text=\"立即更新\"]",
      "snapshotUrls": "https://i.gkd.li/import/12738253",
      "enable": false
    }
  ]
} as any);
