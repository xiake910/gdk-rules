// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
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
