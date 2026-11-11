// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
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
      ]
    }
  ]
} as any);
