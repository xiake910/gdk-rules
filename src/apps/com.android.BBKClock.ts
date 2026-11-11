// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.android.BBKClock",
  "name": "Clock",
  "groups": [
    {
      "key": 1,
      "name": "功能类-自动关闭闹钟提示",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".alarmclock.view.activity.AlarmAlertFullScreen",
          "matches": "[vid=\"snooze_clock_view\"] + [vid=\"close_button\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/25462593"
        }
      ]
    }
  ]
} as any);
