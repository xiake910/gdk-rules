// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tongcheng.android",
  "name": "同程旅行",
  "groups": [
    {
      "key": 2,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".TongchengMainActivity",
          "matches": "[vid=\"iv_home_ad_close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/25369e74-1527-4ca5-9f39-77930ee84d1e",
          "snapshotUrls": "https://i.gkd.li/i/20921290"
        }
      ],
      "enable": false
    },
    {
      "key": 3,
      "name": "评价提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".TongchengMainActivity",
          "matches": [
            "[text=\"给个好评鼓励下吧\"][visibleToUser=true]",
            "[vid=\"iv_close\"][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/60949e51-3d07-4eda-ab2d-9ff561d8b58c",
          "snapshotUrls": "https://i.gkd.li/i/20921292"
        }
      ],
      "enable": false
    },
    {
      "key": 1,
      "name": "局部广告-应用内卡片广告",
      "activityIds": "com.tongcheng.android.TongchengMainActivity",
      "rules": [
        {
          "key": 0,
          "matches": "ViewGroup[childCount=2] > ImageView + ViewGroup[childCount=1] > ImageView",
          "snapshotUrls": "https://i.gkd.li/import/13167070"
        },
        {
          "preKeys": 0,
          "key": 1,
          "matches": "@* > * > [id=\"com.tongcheng.android:id/tv_home_banner_pop_up\"][text=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/import/13167149"
        }
      ],
      "enable": false
    }
  ]
} as any);
