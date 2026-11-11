// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.phoenix.read",
  "name": "红果免费短剧",
  "groups": [
    {
      "key": 1,
      "name": "功能类-[上滑]继续看短剧",
      "desc": "①读秒结束后[上滑] ②未显示[选集]时,每5秒[上滑]1次",
      "fastQuery": true,
      "activityIds": [
        "com.dragon.read.component.shortvideo.impl.ShortSeriesActivity",
        "com.dragon.read.component.shortvideo.impl.fullscreen.ShortSeriesLandActivity",
        "com.dragon.read.pages.main.MainFragmentActivity"
      ],
      "rules": [
        {
          "key": 1,
          "name": "①读秒结束后[上滑]",
          "swipeArg": {
            "start": {
              "x": "screenWidth/2",
              "y": "screenHeight * 0.7"
            },
            "end": {
              "x": "screenWidth/2",
              "y": "screenHeight * 0.3"
            },
            "duration": 200
          },
          "matches": "[text=\"上滑继续观看短剧\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/32430183",
          "excludeSnapshotUrls": "https://i.gkd.li/i/32430193",
          "exampleUrls": "https://e.gkd.li/248c4c7b-469c-459b-a489-23c123f35766"
        },
        {
          "key": 2,
          "name": "②5秒[上滑]1次",
          "actionCd": 4000,
          "actionDelay": 1000,
          "swipeArg": {
            "start": {
              "x": "screenWidth/2",
              "y": "screenHeight * 0.7"
            },
            "end": {
              "x": "screenWidth/2",
              "y": "screenHeight * 0.3"
            },
            "duration": 200
          },
          "excludeMatches": [
            "[text=\"选集\" || text*=\"剧评\"][visibleToUser=true]",
            "[text*=\"剧备字\" || text=\"全屏观看\"][height>0]",
            "TextView[text$=\"%\"][text.length<5][height>-50 && height<1]"
          ],
          "matches": "[text=\"选集\"][visibleToUser=false]",
          "snapshotUrls": [
            "https://i.gkd.li/i/32429827",
            "https://i.gkd.li/i/32429877",
            "https://i.gkd.li/i/32429830"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/32430107",
            "https://i.gkd.li/i/34210794",
            "https://i.gkd.li/i/32434872",
            "https://i.gkd.li/i/33193929",
            "https://i.gkd.li/i/32683026",
            "https://i.gkd.li/i/33289353",
            "https://i.gkd.li/i/34212237"
          ],
          "exampleUrls": [
            "https://e.gkd.li/0128820c-4e8d-44ed-9ebc-ef2d5a062e26",
            "https://e.gkd.li/b70813b8-1377-4210-be6c-fe04f3c9c701",
            "https://e.gkd.li/38c5c9d1-9962-4e07-a7de-49999d3ddf2b"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "权限提示-通知权限",
      "desc": "点击[取消]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "matches": [
            "[text*=\"开启\"][text*=\"提醒\" || text*=\"通知\"]",
            "[text=\"取消\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/33926663"
        }
      ],
      "enable": false
    },
    {
      "key": 2000,
      "name": "开屏广告",
      "desc": "启动时自动点「跳过」(8 秒内最多一次, 没有这个界面就不动作)",
      "fastQuery": true,
      "matchTime": 8000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[text*=\"跳过\"]",
          "action": "clickCenter"
        }
      ],
      "enable": true
    },
    {
      "key": 2001,
      "name": "更新提示",
      "desc": "自动点「以后再说 / 暂不更新」",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[text=\"以后再说\" || text=\"暂不更新\" || text=\"稍后再说\"]",
          "action": "clickCenter"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "局部广告-阅读-底部卡片广告",
      "desc": "点击X",
      "fastQuery": true,
      "activityIds": "com.dragon.read.reader.ui.ReaderActivity",
      "rules": [
        {
          "key": 1,
          "actionDelay": 200,
          "matches": "ImageView < @ViewGroup <3 ViewGroup[childCount=5] <n * <n * <n * <n * <n * <n * <n * <n * <n * <n [id=\"com.phoenix.read:id/root_view\"]",
          "snapshotUrls": "https://i.gkd.li/i/27986281"
        },
        {
          "preKeys": 1,
          "matches": "TextView[text=\"关闭此广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/28024153"
        }
      ],
      "enable": true
    },
    {
      "key": 3001,
      "name": "全屏广告-阅读-视频广告",
      "desc": "滑动翻页",
      "fastQuery": true,
      "activityIds": "com.dragon.read.reader.ui.ReaderActivity",
      "rules": [
        {
          "matches": "[text=\"点击关闭广告并退出小说\"][visibleToUser=true]",
          "excludeMatches": "[text$=\"秒后，继续阅读下一页\"]",
          "forcedTime": 3600000,
          "action": "swipe",
          "swipeArg": {
            "start": {
              "x": "screenWidth*0.8",
              "y": "screenHeight/2"
            },
            "end": {
              "x": "screenWidth*0.2",
              "y": "screenHeight/2"
            },
            "duration": 300
          },
          "snapshotUrls": "https://i.gkd.li/i/27988263",
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/27988163",
            "https://i.gkd.li/i/28187435",
            "https://i.gkd.li/i/28187442"
          ]
        }
      ],
      "enable": true
    }
  ]
} as any);
