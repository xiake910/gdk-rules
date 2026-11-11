// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.juduoduo.app",
  "name": "剧多多",
  "groups": [
    {
      "key": 6,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "key": 0,
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13705650"
        },
        {
          "key": 1,
          "matches": "[vid=\"ksad_tk_view\"] @ViewGroup[clickable=true] > [text=\"跳过\"]",
          "snapshotUrls": "https://i.gkd.li/i/13705662"
        }
      ]
    }
  ]
} as any);
