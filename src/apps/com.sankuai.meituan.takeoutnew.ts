// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sankuai.meituan.takeoutnew",
  "name": "美团外卖",
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
          "activityIds": "com.sankuai.waimai.business.page.homepage.MainActivity",
          "matches": "[vid=\"wm_upgrade_force_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13415044"
        }
      ],
      "enable": false
    },
    {
      "key": 3,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "key": 0,
          "activityIds": "com.sankuai.waimai.bussiness.order.detail.WMOrderDetailActivity",
          "matches": "@ImageView[clickable=true] - FrameLayout > FrameLayout > FrameLayout TextView[text=\"点我领取\"]",
          "snapshotUrls": "https://i.gkd.li/i/13175526"
        },
        {
          "key": 1,
          "fastQuery": true,
          "activityIds": "com.sankuai.waimai.business.page.homepage.MainActivity",
          "matches": "ImageView < @[clickable=true] - FrameLayout >5 [text=\"外卖神券\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/25865139",
          "exampleUrls": "https://e.gkd.li/b82ac99a-4902-453f-a59d-a11bf55560aa"
        }
      ],
      "enable": false
    },
    {
      "key": 4,
      "name": "局部广告-直播悬浮窗",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.sankuai.waimai.business.restaurant.poicontainer.WMRestaurantActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true] + [text=\"正在讲解\"]",
          "exampleUrls": "https://e.gkd.li/d7119268-6710-4bf4-a46c-eaefa4105791",
          "snapshotUrls": "https://i.gkd.li/i/16359035"
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "全屏广告-关闭美食广告弹窗",
      "activityIds": "com.sankuai.waimai.platform.mach.dialog.DynamicDialog",
      "rules": [
        "@[desc=\"关闭\"][clickable=true] > ImageView"
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-付款后广告弹窗",
      "activityIds": "com.sankuai.waimai.bussiness.order.detail.WMOrderDetailActivity",
      "rules": [
        {
          "key": 0,
          "name": "美团买药弹窗-点击[暂时放弃]",
          "matches": "[text=\"送亲友\"] <2 FrameLayout[childCount=2] > [text=\"暂时放弃\"][clickable=true]"
        },
        {
          "key": 1,
          "name": "领取外卖神卷-点击底部【x】",
          "matches": "@ImageView[clickable=true] - FrameLayout > FrameLayout > FrameLayout TextView[text=\"点我领取\"]",
          "snapshotUrls": "https://i.gkd.li/import/13175526"
        }
      ],
      "enable": false
    }
  ]
} as any);
