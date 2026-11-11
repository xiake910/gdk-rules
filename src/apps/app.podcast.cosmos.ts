// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "app.podcast.cosmos",
  "name": "小宇宙",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-内容推荐",
      "desc": "x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "io.iftech.android.podcast.app.home.index.view.HomeActivity",
          "matches": "[vid=\"clSubscribeBsd\"] > [vid=\"ivCancel\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/25470023"
        }
      ]
    }
  ]
} as any);
