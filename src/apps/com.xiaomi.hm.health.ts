// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xiaomi.hm.health",
  "name": "Zepp Life",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-首页-底部广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.ChannelMainTabActivity",
          "matches": "ImageView[vid=\"close_icon\"]",
          "snapshotUrls": "https://i.gkd.li/i/13695424"
        }
      ]
    }
  ]
} as any);
