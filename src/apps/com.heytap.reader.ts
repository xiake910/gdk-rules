// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.heytap.reader",
  "name": "阅读",
  "groups": [
    {
      "key": 2,
      "name": "全屏广告-首页弹窗广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf",
          "matches": "[id=\"com.zhangyue.commonplugin:id/dialog_welfare_card_close\"]",
          "exampleUrls": "https://e.gkd.li/76f226bb-fcd4-439a-9eed-520a9c35a0c0",
          "snapshotUrls": "https://i.gkd.li/i/19890575"
        }
      ],
      "enable": false
    },
    {
      "key": 3,
      "name": "局部广告-首页浮窗广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf",
          "matches": "[vid=\"float_delete\"]",
          "exampleUrls": "https://m.gkd.li/6328439/860371ea-1f09-4f82-8ed6-1436eca4a50d",
          "snapshotUrls": "https://i.gkd.li/i/13387138"
        }
      ],
      "enable": false
    },
    {
      "key": 4,
      "name": "局部广告-今日推荐",
      "rules": [
        {
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf",
          "matches": "[vid=\"iv_float_read_continue_close\"]",
          "exampleUrls": "https://m.gkd.li/6328439/3ee7210c-970e-4c9a-acb6-9254245c27a0",
          "snapshotUrls": "https://i.gkd.li/i/13387159"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-首页广告",
      "rules": [
        {
          "fastQuery": true,
          "matches": "[id=\"com.zhangyue.commonplugin:id/dialog_welfare_card_close\"]",
          "exampleUrls": "https://m.gkd.li/6328439/4feb19d4-f90f-4ed5-b025-9c2a6e4fc479",
          "snapshotUrls": "https://i.gkd.li/import/13387130"
        }
      ],
      "enable": false
    },
    {
      "key": 3001,
      "name": "局部广告-首页浮窗",
      "rules": [
        {
          "activityIds": "com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf",
          "fastQuery": true,
          "matches": "[id=\"com.heytap.reader:id/float_delete\"]",
          "exampleUrls": "https://m.gkd.li/6328439/860371ea-1f09-4f82-8ed6-1436eca4a50d",
          "snapshotUrls": "https://i.gkd.li/import/13387138"
        }
      ],
      "enable": false
    },
    {
      "key": 3002,
      "name": "全屏广告-今日推荐",
      "rules": [
        {
          "activityIds": "com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf",
          "fastQuery": true,
          "matches": "[id=\"com.heytap.reader:id/iv_float_read_continue_close\"]",
          "exampleUrls": "https://m.gkd.li/6328439/3ee7210c-970e-4c9a-acb6-9254245c27a0",
          "snapshotUrls": "https://i.gkd.li/import/13387159"
        }
      ],
      "enable": false
    }
  ]
} as any);
