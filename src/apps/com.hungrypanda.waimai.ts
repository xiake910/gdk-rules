// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hungrypanda.waimai",
  "name": "熊猫外卖",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告",
      "rules": [
        {
          "key": 0,
          "fastQuery": true,
          "activityIds": [
            "com.haya.app.pandah4a.ui.sale.home.container.HomeContainerActivity",
            "com.haya.app.pandah4a.ui.pay.success.order.PaySuccessActivity"
          ],
          "matches": [
            "ViewGroup[childCount=2 || childCount=3] > [vid=\"iv_home_ad_close\" || vid=\"iv_close\"][clickable=true][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/25813448",
            "https://i.gkd.li/i/25822079",
            "https://i.gkd.li/i/25813449",
            "https://i.gkd.li/i/25995791"
          ]
        }
      ],
      "enable": false
    }
  ]
} as any);
