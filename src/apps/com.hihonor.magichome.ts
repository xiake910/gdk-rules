// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hihonor.magichome",
  "name": "荣耀智慧空间",
  "groups": [
    {
      "key": 10,
      "name": "局部广告-首页顶部广告",
      "activityIds": ".business.MainActivity",
      "rules": "[vid=\"item_close_image\"]",
      "snapshotUrls": "https://i.gkd.li/i/12843930",
      "enable": true
    },
    {
      "key": 11,
      "name": "其他-推荐服务声明",
      "desc": "推荐服务声明弹窗。默认点击\"取消\"按钮",
      "activityIds": ".business.MainActivity",
      "rules": "[text$=\"推荐服务声明\"] < LinearLayout < LinearLayout + LinearLayout > [vid=\"negative_btn\"]",
      "snapshotUrls": "https://i.gkd.li/i/12843976",
      "enable": false
    },
    {
      "key": 12,
      "name": "更新提示",
      "desc": "点击以后再说",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".business.MainActivity",
          "matches": "TextView[text=\"立即更新\"] -2 [vid=\"negative_btn\"][text=\"以后再说\"]",
          "snapshotUrls": "https://i.gkd.li/i/12916700"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-推荐服务声明",
      "enable": true,
      "desc": "推荐服务声明弹窗。默认点击【取消】按钮",
      "activityIds": "com.hihonor.magichome.business.MainActivity",
      "rules": "[text$=\"推荐服务声明\"] < LinearLayout < LinearLayout + LinearLayout > [id=\"com.hihonor.magichome:id/negative_btn\"]",
      "snapshotUrls": "https://i.gkd.li/import/12843976"
    },
    {
      "key": 3001,
      "name": "全屏广告-升级提示",
      "desc": "点击以后再说",
      "activityIds": "com.hihonor.magichome.business.MainActivity",
      "fastQuery": true,
      "rules": "TextView[text=\"立即更新\"] -2 [id=\"com.hihonor.magichome:id/negative_btn\"][text=\"以后再说\"]",
      "snapshotUrls": "https://i.gkd.li/import/12916700",
      "enable": true
    }
  ]
} as any);
