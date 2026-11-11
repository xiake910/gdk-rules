// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hose.ekuaibao",
  "name": "易快报",
  "groups": [
    {
      "key": 1,
      "matchTime": 10000,
      "actionMaximum": 2,
      "resetMatch": "app",
      "name": "局部广告-首页横幅广告",
      "rules": "[text=\"不感兴趣\"][visibleToUser=true]",
      "snapshotUrls": [
        "https://i.gkd.li/i/12649616",
        "https://i.gkd.li/i/18455642"
      ],
      "enable": true
    },
    {
      "key": 3000,
      "name": "全屏广告-首页-横幅广告",
      "activityIds": "com.hose.ekuaibao.view.activity.EkbProActivity",
      "rules": "View[childCount=2] > TextView + TextView[text=\"不感兴趣\"][clickable=true]",
      "snapshotUrls": [
        "https://i.gkd.li/import/12649616"
      ],
      "enable": true
    }
  ]
} as any);
