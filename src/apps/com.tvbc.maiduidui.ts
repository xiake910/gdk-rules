// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tvbc.maiduidui",
  "name": "埋堆堆",
  "groups": [
    {
      "key": 1,
      "name": "青少年模式",
      "fastQuery": true,
      "activityIds": "com.tvbc.maiduidui.MainHomeActivity",
      "matchTime": 10000,
      "resetMatch": "app",
      "actionMaximum": 1,
      "rules": "@[vid=\"tv_ok\"] - [vid=\"tv_open_child_model\"]",
      "snapshotUrls": "https://i.gkd.li/import/13847804",
      "enable": false
    }
  ]
} as any);
