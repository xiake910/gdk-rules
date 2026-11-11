// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.BBKClock',
  name: 'Clock',
  groups: [
    {
      key: 1,
      name: '功能类-自动关闭闹钟提示',
      rules: [
        {
          fastQuery: true,
          activityIds: '.alarmclock.view.activity.AlarmAlertFullScreen',
          matches:
            '[vid="snooze_clock_view"] + [vid="close_button"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25462593',
        },
      ],
      enable: false,
    },
  ],
} as any);
