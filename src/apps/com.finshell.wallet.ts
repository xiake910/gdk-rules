// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.finshell.wallet",
  "name": "钱包",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.finshell.homepage.WalletNativeActionActivity",
          "matches": "[vid=\"ivClose\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/b5a04cd0-2f5a-4161-838b-422552f1ba9e",
          "snapshotUrls": "https://i.gkd.li/i/16451563"
        }
      ],
      "enable": false
    }
  ]
} as any);
