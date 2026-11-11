// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
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
      ],
      "enable": true
    }
  ]
} as any);
