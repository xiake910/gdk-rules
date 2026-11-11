// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wifi.masterkey.lite',
  name: '万能钥匙',
  groups: [
    {
      key: 1,
      name: '分段广告-首页卡片广告',
      fastQuery: true,
      activityIds: 'com.wifitutu.ui.main.HomeMainActivity',
      rules: [
        {
          key: 0,
          matches:
            '@[id="com.zm.wfsdk:id/wf_sdk_native_express_close_rl"] - FrameLayout >2 [text="免费直连"]',
          exampleUrls: 'https://e.gkd.li/87fe7de1-ba4b-4922-941b-96a88e67f1b0',
          snapshotUrls: 'https://i.gkd.li/i/22801665',
        },
        {
          preKeys: [0],
          matches: '[text="不感兴趣"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/1b66dbd9-85b7-4287-bf3c-7d6723b8afe8',
          snapshotUrls: 'https://i.gkd.li/i/22801668',
        },
      ],
      enable: true,
    },
  ],
} as any);
