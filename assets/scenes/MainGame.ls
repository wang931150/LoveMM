{
  "_$ver": 1,
  "_$id": "lx8mwule",
  "_$runtime": "res://1855299c-ec53-40d2-8b25-e35e38316c47",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "_$comp": [
    {
      "_$type": "eaa5673d-525b-41a7-b898-5ed955285f62",
      "scriptPath": "../src/scenes/MainGameModel.ts",
      "dropItem": {
        "_$uuid": "5eb575c5-ce78-42c2-abd0-9b06684bff29",
        "_$type": "Prefab"
      },
      "count": 4,
      "speed": 2000
    }
  ],
  "_$child": [
    {
      "_$id": "xwjaj2fj",
      "_$var": true,
      "_$type": "Box",
      "name": "mainBox",
      "width": 0,
      "height": 0,
      "visible": false,
      "_mouseState": 2
    },
    {
      "_$id": "wsiqaomu",
      "_$var": true,
      "_$type": "Box",
      "name": "readyBox",
      "x": 585,
      "y": 1266,
      "width": 1170,
      "height": 2532,
      "anchorX": 0.5,
      "anchorY": 0.5,
      "_mouseState": 2,
      "centerX": 0,
      "centerY": 0,
      "_$child": [
        {
          "_$id": "v8finn3p",
          "_$var": true,
          "_$type": "Button",
          "name": "startBtn",
          "x": 585,
          "y": 1266,
          "width": 1170,
          "height": 2532,
          "anchorX": 0.5,
          "anchorY": 0.5,
          "_mouseState": 2,
          "left": 0,
          "right": 0,
          "top": 0,
          "bottom": 0,
          "skin": "",
          "label": "",
          "labelSize": 20,
          "labelAlign": "center",
          "labelVAlign": "middle"
        },
        {
          "_$id": "1y7gp19r",
          "_$var": true,
          "_$type": "Text",
          "name": "tips",
          "x": 585.0000000000005,
          "y": 1033.5,
          "width": 301,
          "height": 98,
          "anchorX": 0.5,
          "anchorY": 0.5,
          "scaleX": 2.5,
          "scaleY": 2.5,
          "text": "接住落下来的发财\n建议开启音量哦~",
          "fontSize": 20,
          "color": "rgba(101, 77, 77, 1)",
          "align": "center",
          "valign": "middle",
          "leading": 2
        },
        {
          "_$id": "klxt5rwl",
          "_$type": "Text",
          "name": "Text(1)",
          "x": 585.0000000000005,
          "y": 1474.5,
          "width": 301,
          "height": 92.25,
          "anchorX": 0.5,
          "anchorY": 0.5,
          "scaleX": 4,
          "scaleY": 4,
          "text": "点击屏幕开始",
          "fontSize": 20,
          "color": "rgba(101, 77, 77, 1)",
          "align": "center",
          "valign": "middle",
          "leading": 2
        }
      ]
    },
    {
      "_$id": "glntj5v9",
      "_$var": true,
      "_$type": "Box",
      "name": "topBox",
      "x": 585,
      "y": 121,
      "width": 1170,
      "height": 241,
      "anchorX": 0.5,
      "anchorY": 0.5,
      "top": 0,
      "centerX": 0,
      "_$child": [
        {
          "_$id": "dbf14r3j",
          "_$type": "Image",
          "name": "Image",
          "width": 1170,
          "height": 241,
          "visible": false,
          "left": 0,
          "right": 0,
          "top": 0,
          "bottom": 0,
          "skin": "res://00000000-0000-0000-0001-000000000000",
          "color": "#cbe986"
        },
        {
          "_$id": "gm5zzfgc",
          "_$var": true,
          "_$type": "Text",
          "name": "timeTxt",
          "x": 585.0000000000001,
          "width": 301,
          "height": 65.25,
          "anchorX": 0.5,
          "scaleX": 4,
          "scaleY": 4,
          "fontSize": 20,
          "color": "rgba(101, 77, 77, 1)",
          "align": "center",
          "valign": "middle",
          "leading": 2
        }
      ]
    },
    {
      "_$id": "k7btl7ns",
      "_$var": true,
      "_$type": "Box",
      "name": "showBox",
      "x": 585,
      "y": 1266,
      "width": 1170,
      "height": 2532,
      "anchorX": 0.5,
      "anchorY": 0.5,
      "visible": false,
      "_mouseState": 2,
      "centerX": 0,
      "centerY": 0,
      "_$comp": [
        {
          "_$type": "Animator2D",
          "controller": {
            "_$uuid": "9ecf34a1-b660-4206-8b6b-fa1ddb2c3ed3",
            "_$type": "AnimationController2D"
          },
          "controllerLayers": [
            {
              "_$type": "AnimatorControllerLayer2D",
              "name": "Base Layer",
              "states": [
                {
                  "_$type": "AnimatorState2D",
                  "name": "showAnimation",
                  "clipStart": 0,
                  "clip": {
                    "_$uuid": "b8add42d-97d5-4e9f-9007-6eb6ff1373e4",
                    "_$type": "AnimationClip2D"
                  },
                  "soloTransitions": []
                }
              ],
              "playOnWake": false,
              "defaultStateName": "showAnimation"
            }
          ]
        }
      ],
      "_$child": [
        {
          "_$id": "6oh6kfic",
          "_$var": true,
          "_$type": "Box",
          "name": "show1",
          "x": 585,
          "y": 1266,
          "width": 1170,
          "height": 2532,
          "anchorX": 0.5,
          "anchorY": 0.5,
          "_mouseState": 2,
          "centerX": 0,
          "centerY": 0,
          "_$comp": [
            {
              "_$type": "Animator2D",
              "controller": {
                "_$uuid": "9ecf34a1-b660-4206-8b6b-fa1ddb2c3ed3",
                "_$type": "AnimationController2D"
              },
              "controllerLayers": [
                {
                  "_$type": "AnimatorControllerLayer2D",
                  "name": "Base Layer",
                  "states": [
                    {
                      "_$type": "AnimatorState2D",
                      "name": "showAnimation",
                      "clipStart": 0,
                      "clip": {
                        "_$uuid": "b8add42d-97d5-4e9f-9007-6eb6ff1373e4",
                        "_$type": "AnimationClip2D"
                      },
                      "soloTransitions": []
                    }
                  ],
                  "playOnWake": false,
                  "defaultStateName": "showAnimation"
                }
              ]
            }
          ],
          "_$child": [
            {
              "_$id": "2ncnvql9",
              "_$var": true,
              "_$type": "Text",
              "name": "timeTxt1",
              "x": 617,
              "y": 1084,
              "width": 198,
              "height": 65.25,
              "anchorX": 0.5,
              "anchorY": 0.5,
              "scaleX": 4,
              "scaleY": 4,
              "text": "16秒",
              "fontSize": 20,
              "color": "rgba(101, 77, 77, 1)",
              "align": "center",
              "valign": "middle",
              "leading": 2
            },
            {
              "_$id": "xe3m5r9x",
              "_$var": true,
              "_$type": "Text",
              "name": "tips",
              "x": 585,
              "y": 934,
              "width": 301,
              "height": 98,
              "anchorX": 0.5,
              "anchorY": 0.5,
              "scaleX": 2.5,
              "scaleY": 2.5,
              "alpha": 0,
              "text": "谢谢你",
              "fontSize": 20,
              "color": "rgba(101, 77, 77, 1)",
              "valign": "middle",
              "leading": 2
            },
            {
              "_$id": "7d636pnx",
              "_$var": true,
              "_$type": "Text",
              "name": "tips(1)",
              "x": 585,
              "y": 1084,
              "width": 301,
              "height": 98,
              "anchorX": 0.5,
              "anchorY": 0.5,
              "scaleX": 2.5,
              "scaleY": 2.5,
              "alpha": 0,
              "text": "愿意花费你的",
              "fontSize": 20,
              "color": "rgba(101, 77, 77, 1)",
              "valign": "middle",
              "leading": 2
            },
            {
              "_$id": "sy9psly6",
              "_$var": true,
              "_$type": "Text",
              "name": "tips(2)",
              "x": 585,
              "y": 1234,
              "width": 301,
              "height": 98,
              "anchorX": 0.5,
              "anchorY": 0.5,
              "scaleX": 2.5,
              "scaleY": 2.5,
              "alpha": 0,
              "text": "来见证我们用",
              "fontSize": 20,
              "color": "rgba(101, 77, 77, 1)",
              "valign": "middle",
              "leading": 2
            },
            {
              "_$id": "pb2em745",
              "_$var": true,
              "_$type": "Text",
              "name": "tips(3)",
              "x": 585,
              "y": 1384,
              "width": 301,
              "height": 98,
              "anchorX": 0.5,
              "anchorY": 0.5,
              "scaleX": 2.5,
              "scaleY": 2.5,
              "alpha": 0,
              "text": "走进的婚姻",
              "fontSize": 20,
              "color": "rgba(101, 77, 77, 1)",
              "valign": "middle",
              "leading": 2
            },
            {
              "_$id": "nkjbz0gv",
              "_$var": true,
              "_$type": "Text",
              "name": "timeTxt(1)",
              "x": 617,
              "y": 1234,
              "width": 198,
              "height": 65.25,
              "anchorX": 0.5,
              "anchorY": 0.5,
              "scaleX": 4,
              "scaleY": 4,
              "alpha": 0,
              "text": "16年",
              "fontSize": 20,
              "color": "rgba(101, 77, 77, 1)",
              "align": "center",
              "valign": "middle",
              "leading": 2
            }
          ]
        },
        {
          "_$id": "wt1mmj0h",
          "_$var": true,
          "_$type": "Box",
          "name": "show2",
          "x": 585,
          "y": 1266,
          "width": 1170,
          "height": 2532,
          "anchorX": 0.5,
          "anchorY": 0.5,
          "visible": false,
          "_mouseState": 2,
          "centerX": 0,
          "centerY": 0,
          "_$comp": [
            {
              "_$type": "Animator2D",
              "controller": {
                "_$uuid": "3df7e2a9-b249-412f-8121-2370a01e7c8d",
                "_$type": "AnimationController2D"
              },
              "controllerLayers": [
                {
                  "_$type": "AnimatorControllerLayer2D",
                  "name": "Base Layer",
                  "states": [
                    {
                      "_$type": "AnimatorState2D",
                      "name": "showAnimation2",
                      "clipStart": 0,
                      "clip": {
                        "_$uuid": "d01ed6ea-5fb0-461e-be15-711845cbee61",
                        "_$type": "AnimationClip2D"
                      },
                      "soloTransitions": []
                    }
                  ],
                  "playOnWake": false,
                  "defaultStateName": "showAnimation2"
                }
              ]
            }
          ],
          "_$child": [
            {
              "_$id": "bzygca21",
              "_$type": "Image",
              "name": "Image",
              "x": 574,
              "y": 488,
              "width": 708,
              "height": 472,
              "rotation": 22,
              "skin": "res://ea93ac22-34d5-4160-9eb2-635642a46f27",
              "useSourceSize": true,
              "color": "#ffffff"
            },
            {
              "_$id": "adwccevk",
              "_$type": "Image",
              "name": "Image(2)",
              "x": 657.9999999999999,
              "y": 1066,
              "width": 535,
              "height": 802,
              "rotation": 12,
              "skin": "res://951d63c6-33f7-4314-8f21-6103ab02f5fb",
              "useSourceSize": true,
              "color": "#ffffff"
            },
            {
              "_$id": "iz1act8q",
              "_$type": "Image",
              "name": "Image(1)",
              "x": 28,
              "y": 1371,
              "width": 472,
              "height": 708,
              "rotation": -19,
              "skin": "res://97eaaecc-3640-41e8-997b-15d05be6615a",
              "useSourceSize": true,
              "color": "#ffffff"
            },
            {
              "_$id": "7ttjmz4a",
              "_$type": "Image",
              "name": "Image(3)",
              "x": 6,
              "y": 806,
              "width": 708,
              "height": 472,
              "rotation": -9,
              "skin": "res://9f1e2ccd-99a6-43c4-80ae-bf1759bd0175",
              "useSourceSize": true,
              "color": "#ffffff"
            }
          ]
        },
        {
          "_$id": "fxovhqjb",
          "_$var": true,
          "_$type": "Box",
          "name": "show3",
          "x": 585,
          "y": 1266,
          "width": 1170,
          "height": 2532,
          "anchorX": 0.5,
          "anchorY": 0.5,
          "visible": false,
          "_mouseState": 2,
          "centerX": 0,
          "centerY": 0,
          "_$child": [
            {
              "_$id": "qbgy8pb1",
              "_$type": "Image",
              "name": "Image",
              "width": 1170,
              "height": 2532,
              "visible": false,
              "left": 0,
              "right": 0,
              "top": 0,
              "bottom": 0,
              "skin": "res://00000000-0000-0000-0001-000000000000",
              "color": "#cbe986"
            },
            {
              "_$id": "wegotewt",
              "_$var": true,
              "_$type": "Text",
              "name": "tips",
              "x": 585,
              "y": 934,
              "width": 301,
              "height": 98,
              "anchorX": 0.5,
              "anchorY": 0.5,
              "scaleX": 2.5,
              "scaleY": 2.5,
              "text": "地址：长沙小天鹅洋湖婚庆园\n         （岳麓区湘浦路343号）",
              "fontSize": 20,
              "color": "rgba(101, 77, 77, 1)",
              "valign": "middle",
              "leading": 2
            },
            {
              "_$id": "zuwy06yv",
              "_$var": true,
              "_$type": "Text",
              "name": "tips(1)",
              "x": 585,
              "y": 1084,
              "width": 301,
              "height": 98,
              "anchorX": 0.5,
              "anchorY": 0.5,
              "scaleX": 2.5,
              "scaleY": 2.5,
              "text": "时间：2024年7月13日",
              "fontSize": 20,
              "color": "rgba(101, 77, 77, 1)",
              "valign": "middle",
              "leading": 2
            }
          ]
        }
      ]
    }
  ]
}