// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.heytap.music",
  "name": "音乐",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.allsaints.music.MainActivity",
          "matches": "@ImageView[clickable=true] + [text=\"检测到新版本\"]",
          "snapshotUrls": "https://i.gkd.li/i/14987173"
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            "com.allsaints.ad.sjy.reward.SRewardLoadingActivity",
            "com.allsaints.music.MainActivity"
          ],
          "matches": [
            "[vid=\"btnFreeListening\"][visibleToUser=true]",
            "[vid=\"close\"][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/16200623",
            "https://i.gkd.li/i/21175600"
          ]
        }
      ],
      "enable": true
    }
  ]
} as any);
