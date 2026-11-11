// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xiaomi.bluetooth",
  "name": "小米蓝牙扩展 (Bluetooth Extension)",
  "groups": [
    {
      "key": 1,
      "name": "功能类-耳机配对弹窗（仅限澎湃os3）",
      "desc": "点击右上角的x",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.android.bluetooth.ble.app.fastconnect.MiuiFastConnectActivity",
          "matches": "[vid=\"pairingClosable\"]",
          "snapshotUrls": "https://i.gkd.li/i/22922962"
        }
      ]
    }
  ]
} as any);
