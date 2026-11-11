// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.duokan.phone.remotecontroller",
  "name": "万能遥控",
  "groups": [
    {
      "key": 4,
      "name": "权限提示-定位权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.xiaomi.mitv.phone.remotecontroller.HoriWidgetMainActivityV2",
          "matches": "[vid=\"ll_permission\"] >2 [text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/13642080"
        }
      ]
    },
    {
      "key": 5,
      "name": "局部广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.xiaomi.mitv.phone.remotecontroller.HoriWidgetMainActivityV2",
          "matches": "[vid=\"image_close_banner\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/bf36812a-1bf9-43dc-aca5-f351c2f8d1f6",
          "snapshotUrls": "https://i.gkd.li/i/22451785"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-底部横幅广告",
      "activityIds": "com.xiaomi.mitv.phone.remotecontroller.HoriWidgetMainActivityV2",
      "rules": "ImageView[id=`com.duokan.phone.remotecontroller:id/image_close_banner`]",
      "enable": false
    },
    {
      "key": 3000,
      "name": "权限提示-申请定位",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "activityIds": "com.xiaomi.mitv.phone.remotecontroller.HoriWidgetMainActivityV2",
      "rules": "[id=\"com.duokan.phone.remotecontroller:id/ll_permission\"] [text=\"取消\"]",
      "snapshotUrls": "https://i.gkd.li/import/13642080",
      "enable": false
    }
  ]
} as any);
