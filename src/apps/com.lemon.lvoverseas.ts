// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.lemon.lvoverseas",
  "name": "CapCut",
  "groups": [
    {
      "key": 1,
      "name": "功能类-取消登录弹窗",
      "desc": "点击x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.lemon.account.view.LoginActivity",
          "matches": "@[vid=\"ivCloseRight\"] + [visibleToUser=true] > [vid=\"login_btn_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/34135382",
          "exampleUrls": "https://e.gkd.li/258a96fc-23c3-4509-908e-ef6073dcacbe"
        }
      ],
      "enable": false
    }
  ]
} as any);
