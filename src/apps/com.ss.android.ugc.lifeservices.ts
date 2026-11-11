// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ss.android.ugc.lifeservices",
  "name": "抖省省",
  "groups": [
    {
      "key": 1,
      "name": "功能类-自动[放弃支付]",
      "desc": "弹窗-点击[放弃支付]",
      "rules": [
        {
          "activityIds": [
            "com.ss.android.ugc.aweme.main.MainActivity",
            "com.bytedance.locallife.page.pdp.LifePdpActivity"
          ],
          "matches": "[visibleToUser=true][desc^=\"放弃支付\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/30941609",
            "https://i.gkd.li/i/31027911"
          ],
          "exampleUrls": "https://e.gkd.li/f93e7986-a67c-4f9f-a553-82d683a0d42e"
        }
      ],
      "enable": false
    }
  ]
} as any);
