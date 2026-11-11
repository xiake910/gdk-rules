// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.boohee.one',
  name: '薄荷健康',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.boohee.library.update.UpdateDialogActivity',
          matches: '@[vid="tv_ignore"] + [vid="tv_update"]',
          snapshotUrls: 'https://i.gkd.li/i/12716918',
        },
      ],
      enable: false,
    },
    {
      key: 2,
      name: '全屏广告-发现页弹窗广告',
      activityIds: 'com.sensorsdata.sf.ui.view.DialogActivity',
      rules:
        'LinearLayout[childCount=2] > @ImageView[id=null][clickable=true] + ImageView',
      snapshotUrls: 'https://i.gkd.li/i/12716970',
      enable: true,
    },
    {
      key: 10,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.app.account.ui.activity.MsgCategoryActivityV2',
          matches: '[vid="img_close_push"]',
          snapshotUrls: 'https://i.gkd.li/i/12716950',
        },
      ],
      enable: false,
    },
    {
      key: 3000,
      name: '全屏广告-发现页广告弹窗',
      activityIds: 'com.sensorsdata.sf.ui.view.DialogActivity',
      rules:
        'LinearLayout[childCount=2] > @ImageView[id=null][clickable=true] + ImageView',
      snapshotUrls: 'https://i.gkd.li/import/12716970',
      enable: true,
    },
    {
      enable: false,
      key: 3001,
      name: '权限提示-请求开启通知权限弹窗',
      desc: '自动点击x按钮',
      activityIds:
        'com.boohee.one.app.account.ui.activity.MsgCategoryActivityV2',
      rules: '[id="com.boohee.one:id/img_close_push"]',
      snapshotUrls: 'https://i.gkd.li/import/12716950',
    },
  ],
} as any);
