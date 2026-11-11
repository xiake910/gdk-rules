// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yaerxing.fkst',
  name: '疯狂刷题',
  groups: [
    {
      key: 1,
      name: '更新提示',
      activityIds: [
        'com.yaerxing.fkst.activity.MainActivity',
        'com.yaerxing.fkst.activity.SplashActivity',
        'com.yaerxing.fkst.activity.SelectModuleActivity',
      ],
      rules:
        '@[id="com.yaerxing.fkst:id/iv_close"] < LinearLayout - LinearLayout > [id="com.yaerxing.fkst:id/btn_update"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12715037',
        'https://i.gkd.li/import/12715047',
        'https://i.gkd.li/import/12715053',
      ],
      enable: false,
    },
  ],
} as any);
