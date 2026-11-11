// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sankakucomplex.channel.black",
  "name": "Sankaku Black",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.sc.channel.MainActivity",
          "matches": "ImageView[childCount=0] < ViewGroup[childCount=1] < @ViewGroup[clickable=true] +4 ViewGroup > [text*=\"UPGRADE NOW\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/5ff482ad-639e-42a0-86db-19df81689e2e",
          "snapshotUrls": "https://i.gkd.li/i/23687159"
        }
      ]
    }
  ]
} as any);
