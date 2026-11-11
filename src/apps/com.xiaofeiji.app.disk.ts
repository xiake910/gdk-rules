// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xiaofeiji.app.disk",
  "name": "小飞机网盘",
  "groups": [
    {
      "key": 1,
      "name": "分段广告",
      "desc": "点击关闭-点击不感兴趣",
      "rules": [
        {
          "key": 0,
          "activityIds": ".MainActivity",
          "matches": "@Image[visibleToUser=true] < View + View >2 [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13857392"
        },
        {
          "preKeys": [
            0
          ],
          "key": 1,
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13857537"
        }
      ],
      "enable": true
    }
  ]
} as any);
