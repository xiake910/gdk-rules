// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.miaoying.appmy",
  "name": "天空影视",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-应用内广告弹窗",
      "rules": [
        {
          "key": 0,
          "activityIds": "com.huawei.android.launcher.unihome.UniHomeLauncher",
          "matches": "ImageView - FrameLayout > FrameLayout > ImageView",
          "snapshotUrls": "https://i.gkd.li/import/12846524"
        }
      ],
      "enable": false
    }
  ]
} as any);
