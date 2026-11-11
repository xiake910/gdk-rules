// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ecitic.bank.mobile',
  name: '中信银行',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.ui.MainActivity',
          matches: '@[text="暂不更新"] + [text="立即更新"]',
          snapshotUrls: 'https://i.gkd.li/i/12701217',
        },
      ],
      enable: false,
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.ui.MainActivity',
            '.ui.webview.CordovaWebViewActivity',
          ],
          matches: '[vid="close_product_send"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12701230',
            'https://i.gkd.li/i/13402746',
          ],
        },
      ],
      enable: true,
    },
    {
      key: 3,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.ui.MainActivity',
          matches: '@[text="取消"] + [text="立即开启"]',
          snapshotUrls: 'https://i.gkd.li/i/13399102',
        },
      ],
      enable: false,
    },
    {
      key: 4,
      name: '局部广告-理财产品悬浮广告',
      rules: [
        {
          activityIds: '.ui.MainActivity',
          matches:
            '@[clickable=true] +2 [visibleToUser=true][text="恭喜您关注到宝藏基金"] <<n [vid="cordova_view"]',
          snapshotUrls: 'https://i.gkd.li/i/14208637',
        },
      ],
      enable: true,
    },
    {
      key: 3000,
      name: '全屏广告-广告弹窗',
      activityIds: [
        'com.ecitic.bank.mobile.ui.MainActivity',
        'com.ecitic.bank.mobile.ui.webview.CordovaWebViewActivity',
      ],
      rules:
        '[id="com.ecitic.bank.mobile:id/id_cordova_view"] + [id="com.ecitic.bank.mobile:id/close_product_send"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13402746',
        'https://i.gkd.li/import/12701230',
      ],
      enable: true,
    },
    {
      key: 3001,
      name: '全屏广告-请求开通知权限弹窗',
      activityIds: 'com.ecitic.bank.mobile.ui.MainActivity',
      rules: '@[text="取消"] + [text="立即开启"]',
      snapshotUrls: 'https://i.gkd.li/import/13399102',
      enable: true,
    },
  ],
} as any);
