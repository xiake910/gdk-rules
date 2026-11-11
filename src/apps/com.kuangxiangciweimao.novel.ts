// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.kuangxiangciweimao.novel",
  "name": "刺猬猫阅读",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "key": 0,
          "fastQuery": true,
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/fda4f30d-877f-4131-ba56-b6a69e3b7e0c",
          "snapshotUrls": "https://i.gkd.li/i/16893223"
        },
        {
          "key": 1,
          "matches": "[vid=\"mTasksView\"]",
          "snapshotUrls": "https://i.gkd.li/i/13056248"
        },
        {
          "key": 2,
          "fastQuery": true,
          "anyMatches": [
            "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/8359b29b-b99e-4b6e-b748-a10a9f17005c",
          "snapshotUrls": [
            "https://i.gkd.li/i/16901867",
            "https://i.gkd.li/i/16899125"
          ]
        }
      ],
      "order": -10
    },
    {
      "key": 2,
      "name": "功能类-自动签到",
      "desc": "点击[签到]",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activity.frame.MainFrameActivity",
          "matches": "Button[text=\"签到\"]",
          "snapshotUrls": "https://i.gkd.li/i/16897712"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-阅读中-加入书架",
      "desc": "点击 X",
      "fastQuery": true,
      "activityIds": "com.kuangxiangciweimao.novel.activity.bookshelf.reader.ReaderActivity4",
      "rules": "ImageView[id=\"com.kuangxiangciweimao.novel:id/closeImg\"]",
      "snapshotUrls": "https://i.gkd.li/import/15397865",
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-阅读-活动弹窗",
      "desc": "点击 X",
      "activityIds": "com.kuangxiangciweimao.novel.activity.frame.MainFrameActivity",
      "actionMaximum": 1,
      "fastQuery": true,
      "rules": "@[id=\"com.kuangxiangciweimao.novel:id/imgclose\"] - [vid=\"img_activity\"]",
      "snapshotUrls": "https://i.gkd.li/import/16347338",
      "enable": false
    },
    {
      "key": 3,
      "name": "青少年模式",
      "desc": "点击 我知道了",
      "actionMaximum": 1,
      "fastQuery": true,
      "resetMatch": "app",
      "activityIds": "com.kuangxiangciweimao.novel.activity.frame.MainFrameActivity",
      "rules": [
        {
          "matches": [
            "[text=\"我知道了\"]",
            "[id=\"com.kuangxiangciweimao.novel:id/nav_btn\"]"
          ]
        }
      ],
      "snapshotUrls": "https://i.gkd.li/import/17158995",
      "enable": false
    },
    {
      "key": 4,
      "name": "全屏广告-绑定账号",
      "desc": "点击【以后】",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": [
            "@[text=\"绑定账号\"]",
            "@[text=\"以后\"] + [text=\"去绑定\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/17789233"
        }
      ],
      "enable": false
    },
    {
      "key": 5,
      "name": "功能类-签到",
      "desc": "点击【签到】",
      "actionCdKey": 2,
      "fastQuery": true,
      "resetMatch": "app",
      "actionMaximum": 1,
      "activityIds": ".activity.frame.MainFrameActivity",
      "actionDelay": 1000,
      "rules": [
        {
          "key": 0,
          "matches": "[id=\"com.kuangxiangciweimao.novel:id/signBtn\"][text=\"签到\"]",
          "snapshotUrls": "https://i.gkd.li/i/17554248"
        },
        {
          "preKeys": 0,
          "action": "clickCenter",
          "actionDelay": 300,
          "matches": "[id=\"com.kuangxiangciweimao.novel:id/signBtn\"][text=\"每周福利\"]",
          "snapshotUrls": "https://i.gkd.li/i/17686396"
        }
      ],
      "enable": false
    },
    {
      "key": 30,
      "name": "功能类-APP自动点击退出",
      "desc": "点击【确定】",
      "fastQuery": true,
      "resetMatch": "app",
      "actionMaximum": 1,
      "actionDelay": 100,
      "activityIds": [
        "com.kuangxiangciweimao.novel.activity.frame.MainFrameActivity",
        ".activity.bookshelf.detail.BookDetailActivity"
      ],
      "rules": [
        {
          "action": "clickCenter",
          "matches": [
            "[id=\"com.kuangxiangciweimao.novel:id/dia_message\"][text=\"是否退出？\"]",
            "[id=\"com.kuangxiangciweimao.novel:id/pos_btn\"][text=\"确定\"]"
          ]
        }
      ],
      "snapshotUrls": [
        "https://i.gkd.li/import/15294427",
        "https://i.gkd.li/i/20115698"
      ],
      "enable": false
    }
  ]
} as any);
