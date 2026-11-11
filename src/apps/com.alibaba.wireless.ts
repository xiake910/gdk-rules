// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.alibaba.wireless",
  "name": "阿里巴巴",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "rules": [
        {
          "key": 0,
          "activityIds": [
            ".launch.home.V5HomeActivity",
            ".workbench.myali.MyAliSettingActivity"
          ],
          "matches": "[vid=\"update_button_cancel\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12684422",
            "https://i.gkd.li/i/12684426"
          ]
        },
        {
          "key": 1,
          "activityIds": ".launch.home.V5HomeActivity",
          "matches": "[vid=\"update_pop_cancel_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/15004486"
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "全屏广告-首页弹窗广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".launch.home.V5HomeActivity",
          "matches": "@Image[text*=\"FXa-124-124\"][visibleToUser=true] <<n [vid=\"v_yacht_float_cell\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13683509",
            "https://i.gkd.li/i/13683510"
          ]
        }
      ],
      "enable": true
    },
    {
      "key": 3000,
      "name": "全屏广告-首页-弹窗广告",
      "fastQuery": true,
      "activityIds": ".launch.home.V5HomeActivity",
      "rules": [
        {
          "matches": "WebView >n View > Image[text*=\"FXa-124-124\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13683509",
            "https://i.gkd.li/import/13683510"
          ]
        }
      ],
      "enable": true
    }
  ]
} as any);
