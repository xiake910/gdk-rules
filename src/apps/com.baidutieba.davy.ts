// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.baidutieba.davy",
  "name": "贴吧一键签到大师",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-内部弹窗广告",
      "activityIds": "com.davy.commonlibrary.utils.DialogUtil",
      "rules": [
        {
          "matches": "[vid=\"exit\"]",
          "snapshotUrls": "https://i.gkd.li/i/12504289"
        },
        {
          "matches": "[vid=\"mimo_interstitial_close_img\"]",
          "snapshotUrls": "https://i.gkd.li/i/12504291"
        }
      ],
      "enable": false
    }
  ]
} as any);
