// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.mxbc.ohsa",
  "name": "蜜雪冰城鸿蒙版",
  "groups": [
    {
      "key": 3,
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".modules.main.MainAbilityShellActivity",
          "matches": "@UIComponent[id=\"Id_close\"] <2 UIComponentContainer < UIComponentContainer < UIComponentContainer < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/13728113"
        }
      ],
      "enable": true
    },
    {
      "key": 3000,
      "name": "全屏广告-首页-弹窗广告",
      "rules": [
        {
          "activityIds": "com.mxbc.ohsa.modules.main.MainAbilityShellActivity",
          "matches": "UIComponentContainer > [id=\"Id_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/13728113"
        }
      ],
      "enable": true
    }
  ]
} as any);
