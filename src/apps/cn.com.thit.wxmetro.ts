// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.com.thit.wxmetro",
  "name": "码上行",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            "com.bwton.metro.bwtadui.business.popup.PopDialogFixActivity",
            "com.bwton.metro.tabindicator.business.MainTabActivity"
          ],
          "matches": "[vid=\"iv_close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/398fe885-755b-4929-82f6-92a14157bac7",
          "snapshotUrls": [
            "https://i.gkd.li/i/20655916",
            "https://i.gkd.li/i/20665105"
          ]
        }
      ]
    }
  ]
} as any);
