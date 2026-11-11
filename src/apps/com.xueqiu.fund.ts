// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xueqiu.fund",
  "name": "雪球基金",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-基金页面弹窗广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".commonlib.FundHomeActivityV2",
          "matches": "[vid=\"image_cancel\"]",
          "exampleUrls": "https://m.gkd.li/57941037/c43d58ab-a18c-4249-bc35-1c7aeab4c3ff",
          "snapshotUrls": "https://i.gkd.li/i/14163901"
        }
      ]
    }
  ]
} as any);
