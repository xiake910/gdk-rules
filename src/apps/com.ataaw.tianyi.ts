// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ataaw.tianyi",
  "name": "天翼生活",
  "groups": [
    {
      "key": 2,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        "[vid=\"version\"]",
        "[vid=\"ignore\"]"
      ],
      "snapshotUrls": "https://i.gkd.li/i/13867468",
      "enable": false
    }
  ]
} as any);
