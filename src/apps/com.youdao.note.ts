// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.youdao.note",
  "name": "有道云笔记",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-卡片广告",
      "rules": [
        {
          "key": 1,
          "name": "首页上方卡片广告",
          "fastQuery": true,
          "activityIds": ".activity2.MainActivity",
          "matches": "[vid=\"recycle_view\"] + [vid=\"close_ad\"]",
          "snapshotUrls": "https://i.gkd.li/i/13379524"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-卡片式广告",
      "rules": [
        {
          "key": 1,
          "name": "首页上方卡片广告",
          "activityIds": "com.youdao.note.activity2.MainActivity",
          "fastQuery": true,
          "matches": "[id=\"com.youdao.note:id/recycle_view\"] + [id=\"com.youdao.note:id/close_ad\"]",
          "snapshotUrls": "https://i.gkd.li/import/13379524"
        }
      ],
      "enable": false
    }
  ]
} as any);
