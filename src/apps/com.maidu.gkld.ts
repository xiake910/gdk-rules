// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.maidu.gkld',
  name: '公考雷达',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/34117369',
        },
      ],
      order: -10,
      enable: true,
    },
    {
      key: 2,
      name: '局部广告-首页右侧悬浮广告',
      rules: [
        {
          activityIds: '.ui.main.MainActivity',
          matches: '[vid="fl_float"] + [vid="close_image_view"]',
          snapshotUrls: 'https://i.gkd.li/i/12715291',
        },
      ],
      enable: true,
    },
    {
      key: 10,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[vid="ll_open_app_notice"] + [vid="iv_cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/12715250',
        },
      ],
      enable: false,
    },
    {
      key: 3000,
      name: '更新提示',
      activityIds: 'com.maidu.gkld.ui.main.MainActivity',
      rules: '[id="com.maidu.gkld:id/tv_update_next"]',
      snapshotUrls: 'https://i.gkd.li/import/12715215',
      enable: false,
    },
    {
      enable: true,
      key: 3001,
      name: '全屏广告-请求通知权限弹窗',
      activityIds: 'com.maidu.gkld.ui.main.MainActivity',
      rules:
        '[id="com.maidu.gkld:id/ll_open_app_notice"] + [id="com.maidu.gkld:id/iv_cancel"]',
      snapshotUrls: 'https://i.gkd.li/import/12715250',
    },
  ],
} as any);
