// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.njh.biubiu",
  "name": "biubiu加速器",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.njh.ping.speedup.detail.fragment.LaunchVPNActivity",
          "matches": "[vid=\"iv_listitem_dislike\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/13a828c7-b94d-463f-bceb-a92fa7ff069a",
          "snapshotUrls": "https://i.gkd.li/i/19603369"
        }
      ]
    }
  ]
} as any);
