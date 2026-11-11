// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.yaxisvip.pubgtool.iueg",
  "name": "次元城动画",
  "groups": [
    {
      "key": 1,
      "name": "通知提示-公告",
      "rules": [
        {
          "activityIds": "top.cycdm.cycapp.MainActivity",
          "matches": "[text=\"我知道了\"] < @[clickable=true] -n * > [text=\"重要通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/24331012"
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "全屏广告",
      "rules": [
        {
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "@Image[childCount=0][text=\"\"] < View[childCount=1] < View[childCount=1] - View[childCount=1] > [text=\"反馈\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/24331009"
        }
      ],
      "enable": false
    }
  ]
} as any);
