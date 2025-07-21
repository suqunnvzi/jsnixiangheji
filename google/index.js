import axios from 'axios';
import { HttpsProxyAgent } from 'https-proxy-agent';
const obj1 = {
  T: {
    "oG": null
  }
}
const obj = {
  "generic": {
    "Qk": {
      "Qk": "MkEWBc",
      "Op": null,
      "oK": null,
      "pW": "/DataService.GetTranslation",
      "Pv": [
        {
          "key": {
            "j": "frontendMethodType"
          },
          "value": true
        },
        {
          "key": {
            "j": "unobfuscatedRpcId"
          },
          "value": "/DataService.GetTranslation"
        }
      ]
    },
    "j": [
      [
        "你hao",
        "zh-CN",
        "en",
        1
      ],
      []
    ],
    "sideChannel": {},
    "vc": {
      "j": {
        "frontendMethodType": true,
        "unobfuscatedRpcId": "/DataService.GetTranslation"
      }
    }
  }
}
// console.log(text1);
const text = `[[["MkEWBc","[[\\"你好\\",\\"zh-CN\\",\\"en\\",1],[]]",null,"generic"]]]`;
console.log(text);
// [[["MkEWBc","[[\"非常满意。\",\"zh-CN\",\"en\",1],[]]",null,"generic"]]]
// console.log(encodeURIComponent(text));

try {
  const agent = new HttpsProxyAgent('http://127.0.0.1:10809');
  const response = await axios.post(
    'https://translate.google.com/_/TranslateWebserverUi/data/batchexecute',
    'f.req=' + encodeURIComponent(text),
    {
      httpsAgent: agent,
      params: {
        'rpcids': 'MkEWBc',
        'source-path': '/',
        'f.sid': '-793645597522159129',
        'bl': 'boq_translate-webserver_20250716.06_p0',
        'hl': 'zh-CN',
        'soc-app': '1',
        'soc-platform': '1',
        'soc-device': '1',
        '_reqid': '1465440',
        'rt': 'c'
      },
      headers: {
        'accept': '*/*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'pragma': 'no-cache',
        'priority': 'u=1, i',
        'referer': 'https://translate.google.com/',
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
        'sec-ch-ua-arch': '"x86"',
        'sec-ch-ua-bitness': '"64"',
        'sec-ch-ua-form-factors': '"Desktop"',
        'sec-ch-ua-full-version': '"138.0.7204.158"',
        'sec-ch-ua-full-version-list': '"Not)A;Brand";v="8.0.0.0", "Chromium";v="138.0.7204.158", "Google Chrome";v="138.0.7204.158"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-model': '""',
        'sec-ch-ua-platform': '"Windows"',
        'sec-ch-ua-platform-version': '"19.0.0"',
        'sec-ch-ua-wow64': '?0',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2025 Google LLC. All rights reserved.',
        'x-browser-validation': '6h3XF8YcD8syi2FF2BbuE2KllQo=',
        'x-browser-year': '2025',
        'x-client-data': 'CJe2yQEIpbbJAQipncoBCNGgygEI7e3KAQiWocsBCIWgzQEI/aXOAQji8M4BCKH7zgEI4PvOAQid/M4BCOj8zgEIhf3OAQiK/c4BCLr9zgEY4OLOARjp7c4BGND6zgE=',
        'x-goog-batchexecute-bgr': '[";k424jdXQAAZq8xlESvNfx6zsSacVsrYmADQBEArZ1JWjHqePHOUHSYS_5pwSImBtXDUbQqTwFjNRJxvWLRjaeg-a8ZQxRw91ZQ0bymj9HwAAAEZPAAAAAXUBB2MAQcF-GNNdf21TzfKcOL5zh_nK2DFKOKnGK39nKnl0xgejGGDXMKq3fGT0UC2c_pve9fpa8EgLYHb8JC8r4RhMsn4NhAMssHzeQb-m-fofXR9nVFfyrZuuL6MBkVQoHgeTRdx_FhLkpiR7pAsmhlVLEh2Aa-rsBcP5pX-pvuxwjXnAi-gYgjQILZ99Xmd3i1eDSjpeMqYvOp0-y75qyidp5W5uzFoM3Fe3o6V5jlXjNrhC14VcbMRRAH4nZanoH5gDgAn7kalBI_dw2Z4Z5MsHy7avAWkkGBvY94cH2zgy0TmqxX6WCRnJVx0188seMXh7149TWb97Nf2qNN4MLeprXYxS92iMvasdzq1TuzSzi5FJS4gko700GYWotZCMU1z4I87ekK421Hs2I0eTaPGraE9XY56-Sd-GEQn9oLTImxkkiy8WXyQfwMAQEqt4EQ67RRTKmUHaQdMb3aaUCOsivDASz9vdrFmJQByzSejusuYAjv6ioMSlYQFhpAHvsepEikIEmojbDrlNcFvifyBMZZnAPmRTwENXejDz9-01ay2LLMY2KC2Sekpr1ycpLZAM-8p_fC5vJjDtxYV27uQnBryjXwDJgLCD-HTDAYGdzL62tALsxzXQVYt4hvEWbryRp8yABpQC6vf8KyCTr3quNPFFE9Ztht8ua5tavC0eGrR680CZv40T6mByaO8SBI3hAo7VD7CCX7uXSESVboyBK0HD0jIxDD6k9cJiuzrX-XCjkYie8upR5mVvRHJwghoXE6CghRCm6iSjIGjN5pyv_GG3oze6urkcc23Upo773uiNyVxHbNqxkJ8WqL7N12jZShUtzEV-LxZxH-903pjK3Imx47DmIDojpD_-QJzVlEZnH2i1Svq5gVdNZbeVO5U7eIlZpZJJKl4dHt6guLhA5Qji4kB9KiX8QJ7HXHCqmAi6R89F39kFMcy-F8q4LpD-ntQGWKCay-G8KsuJO7WWAgH5c2-JfEHijCnE3k8kdtzzHtzOnFMkwst_0N7U8OqKlFgubkGzsooiSM2U5Wm9Cl68GSu9bwBdhz8ldgoizgmSSxWlouPDRB_OQqxUzl8Qj1AAay_R8IL0f7T2xO5v6X5uKeTn2VncJj9f5akV25-SSZVHHJ_qyDTx4Jo2j2MSjE_x9x_pMhslsUGZxwkVfiY",null,null,9,null,null,null,0,"2"]',
        'x-same-domain': '1',
        'cookie': 'OTZ=8160571_24_24__24_; AEC=AVh_V2j0O7cPbQitLpJ5YNndkylZZRQhaP1PLpbPxPsDnPFs0GQPsxA1jSE; NID=525=W4i6mYKFQl2kGL1as9OtVqbwcQK_Q1mhbwnncF--2QM9A5vm_WW6YW_eUZDBZFprw_A3qm8vGskrWkg_HqvypRSwXRPPflFwPqiu9lF_-KljufPc7OVsBLZwujghom3V-QLHQctppIOLDo7fn6x_GVyxshWXBbqyQulX7J1Uzy24mblq2ODyJkYG_95F4Ypn4F4ESYfmDPBEZfNWLqFwol4qKwh8sX5WaRRyLkl99lKPL_kXqx6XKkXzpSKFvv4Q3hJO3g'
      }
    }
  );

  console.log('响应数据:', response.data);
} catch (error) {
  console.log(error.message);
}

// [["wrb.fr","MkEWBc","[[null,[[[null,\"按要求完成调查、浏览广告\\u003cem\\u003e的\\u003c/em\\u003e任务即可获得奖励。\"],null,2,[1],\"按要求完成调查、浏览广告的任务即可获得奖励。\"]],null,[[[0,[[[null,22]],[true]]]],22],null,null,[\"按要求完成调查、浏览广告等任务即可获得奖励。\",\"zh-CN\",\"en\",true]],[[[null,null,null,null,null,[[\"Complete surveys, advertising browsing and other tasks as required to receive rewards.\",null,null,null,null,null,\"按要求完成调查、浏览广告等任务即可获得奖励。\",1]],null,null,null,[]]],\"en\",1,\"zh-CN\",[\"按要求完成调查、浏览广告等任务即可获得奖励。\",\"zh-CN\",\"en\",true]],\"zh-CN\"]",null,null,null,"generic"],["di",52],["af.httprm",52,"-6922304200556117179",0]]
// 25
// [["e",4,null,null,852]]