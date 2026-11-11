// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.gamestar.perfectpiano",
  "name": "完美钢琴",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-VIP会员弹窗",
      "desc": "按[返回键]",
      "rules": [
        {
          "fastQuery": true,
          "action": "back",
          "matches": "[text=\"已完成付费，恢复VIP状态?\"] -n [text*=\"永久VIP\"]",
          "snapshotUrls": "https://i.gkd.li/i/34023961",
          "exampleUrls": "https://e.gkd.li/8a52c238-04f7-4880-bc16-5f6c879ef034"
        }
      ]
    }
  ]
} as any);
