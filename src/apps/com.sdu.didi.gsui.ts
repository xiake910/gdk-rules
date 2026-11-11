// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sdu.didi.gsui",
  "name": "滴滴车主",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".main.MainActivity",
          "matches": "[vid=\"main_dialog_banner_image_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13958887"
        }
      ]
    }
  ]
} as any);
