// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hnnx.pmbank",
  "name": "河南农信",
  "groups": [
    {
      "key": 3,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.yitong.mbank.app.android.activity.SplashActivity",
      "rules": "[text=\"是否下载最新版客户端？\"] <<n [id=\"android:id/parentPanel\"] Button[text=\"取消\"]",
      "snapshotUrls": "https://i.gkd.li/import/13536762",
      "enable": false
    }
  ]
} as any);
