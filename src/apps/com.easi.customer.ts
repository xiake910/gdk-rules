// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.easi.customer',
  name: 'EASI',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            'com.haya.app.pandah4a.ui.sale.home.container.HomeContainerActivity',
            'com.haya.app.pandah4a.ui.pay.success.order.PaySuccessActivity',
          ],
          matches: [
            'ViewGroup[childCount=2 || childCount=3] > [vid="iv_home_ad_close" || vid="iv_close"][clickable=true][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/27085660',
            'https://i.gkd.li/i/27085659',
            'https://i.gkd.li/i/27085658',
          ],
        },
      ],
      enable: true,
    },
  ],
} as any);
