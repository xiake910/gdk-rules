// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.alibaba.aliyun",
  "name": "阿里云",
  "groups": [
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".biz.home.mine.activity.KFeeCenterActivity",
          "matches": "[text^=\"打开手机消息通知\"] + * >2 [text=\"以后再说\"]",
          "snapshotUrls": "https://i.gkd.li/i/13446162"
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "其他-关闭[添加小组件提示]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".biz.home.MainV5Activity",
          "matches": "[vid=\"iv_close_tip\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/26159018"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "权限提示-请求开启通知权限弹窗",
      "fastQuery": true,
      "rules": "[text^=\"打开手机消息通知\"] + * >2 [text=\"以后再说\"]",
      "snapshotUrls": "https://i.gkd.li/import/13446162",
      "enable": false
    }
  ]
} as any);
