// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jym.mall",
  "name": "交易猫",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-升级弹窗",
      "rules": "[id=\"com.jym.mall:id/tv_cancel\"][text=\"下次再说\"]",
      "snapshotUrls": "https://i.gkd.li/import/12496974",
      "enable": false
    }
  ]
} as any);
