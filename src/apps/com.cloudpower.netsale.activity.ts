// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.cloudpower.netsale.activity",
  "name": "中国人保",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "desc": "点击下次再说",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.picc.aasipods.module.versionupdate.controller.VersionUpdateActivity",
          "matches": "[vid=\"tvw_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/14005533"
        }
      ],
      "enable": false
    }
  ]
} as any);
