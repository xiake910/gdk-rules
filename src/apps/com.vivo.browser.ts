// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.vivo.browser",
  "name": "vivo浏览器",
  "groups": [
    {
      "key": 1,
      "name": "功能类-免流提示",
      "rules": [
        {
          "activityIds": ".pendant.PendantActivity",
          "matches": "[vid=\"dialog_button_right\"][text=\"继续浏览\"]",
          "snapshotUrls": "https://i.gkd.li/i/12847431"
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "局部广告-天气详情页面",
      "rules": [
        {
          "key": 0,
          "activityIds": ".lightweb.LightWebNomalStartActivity",
          "matches": "[text$=\"广告\"] +5 * > Image",
          "snapshotUrls": "https://i.gkd.li/i/14392332"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-免流提示",
      "activityIds": "com.vivo.browser.pendant.PendantActivity",
      "rules": "[id=\"com.vivo.browser:id/dialog_button_right\"][text=\"继续浏览\"]",
      "snapshotUrls": "https://i.gkd.li/import/12847431",
      "enable": false
    }
  ]
} as any);
