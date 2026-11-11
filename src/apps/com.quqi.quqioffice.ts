// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.quqi.quqioffice",
  "name": "曲奇云盘",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-私人云看图弹窗广告",
      "desc": "在线私人云看图片自动弹出自动播放可跳过广告",
      "rules": [
        {
          "key": 1,
          "activityIds": "com.qq.e.ads.PortraitADActivity",
          "matches": "TextView[text*=\"应用名称\"] < LinearLayout -(2,3) [childCount=1] > FrameLayout[childCount=1] >(1,2) ImageView[childCount=0][id=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12854650",
            "https://i.gkd.li/i/12854723",
            "https://i.gkd.li/i/12854664"
          ]
        },
        {
          "key": 2,
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "TextView[text$=\"s\"] + TextView[text$=\"跳过\"]",
          "snapshotUrls": "https://i.gkd.li/i/12877535"
        },
        {
          "key": 3,
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "ImageView[id=\"com.byted.pangle:id/tt_reward_full_count_down_after_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12877540"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-私人云-看图-弹窗广告",
      "desc": "在线私人云看图片自动弹出自动播放可跳过广告",
      "activityIds": [
        "com.qq.e.ads.PortraitADActivity",
        "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
      ],
      "rules": [
        {
          "matches": "LinearLayout > FrameLayout > FrameLayout > ImageView[id=null]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12854650",
            "https://i.gkd.li/import/12854723"
          ]
        },
        {
          "matches": "TextView[text$=\"s\"] + TextView[text$=\"跳过\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12877535"
          ]
        },
        {
          "matches": "TextView[text*=\"应用名称\"] < LinearLayout -2n FrameLayout > FrameLayout > ImageView[id=null]",
          "snapshotUrls": "https://i.gkd.li/import/12854664"
        },
        {
          "matches": "ImageView[id=\"com.byted.pangle:id/tt_reward_full_count_down_after_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/12877540"
        }
      ],
      "enable": false
    }
  ]
} as any);
