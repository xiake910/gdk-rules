// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.qc.mycomic",
  "name": "MyComic",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "fastQuery": true,
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "@[clickable=true] > [text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/15443225"
        }
      ],
      "order": -10,
      "enable": true
    }
  ]
} as any);
