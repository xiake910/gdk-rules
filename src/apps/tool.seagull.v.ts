// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "tool.seagull.v",
  "name": "海鸥加速器",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-卡片广告",
      "rules": [
        {
          "key": 0,
          "name": "卡片广告-1",
          "activityIds": "io.github.trojan_gfw.igniter.MainActivity",
          "matches": "View[childCount=2] > @Button[clickable=true] - View > View > View > Image",
          "snapshotUrls": "https://i.gkd.li/i/13413556"
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "全屏广告-谷歌广告",
      "rules": [
        {
          "key": 0,
          "name": "谷歌广告-1",
          "activityIds": [
            "io.github.trojan_gfw.igniter.MainActivity",
            "com.google.android.gms.ads.AdActivity"
          ],
          "matches": "[desc=\"OPEN\" || desc=\"開啟\"] - @View[clickable=true][visibleToUser=true] > [text=\"关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13426255",
            "https://i.gkd.li/i/13459399"
          ]
        },
        {
          "key": 1,
          "name": "谷歌广告-2",
          "activityIds": "com.google.android.gms.ads.AdActivity",
          "matches": "@Button[clickable=true][childCount=0] < View[childCount=1] <2 View[childCount=2] - View >3 [desc=\"開啟\"]",
          "snapshotUrls": "https://i.gkd.li/i/13476799"
        },
        {
          "key": 2,
          "name": "谷歌广告-3",
          "activityIds": "com.google.android.gms.ads.AdActivity",
          "matches": "[desc=\"Interstitial close button\"]",
          "snapshotUrls": "https://i.gkd.li/i/13476579"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "局部广告-卡片式广告",
      "rules": [
        {
          "key": 0,
          "name": "卡片式广告-1",
          "activityIds": "io.github.trojan_gfw.igniter.MainActivity",
          "matches": "View[childCount=2] > @Button[clickable=true] - View > View > View > Image",
          "snapshotUrls": "https://i.gkd.li/import/13413556"
        }
      ],
      "enable": false
    }
  ]
} as any);
