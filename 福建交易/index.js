// https://ggzyfw.fujian.gov.cn/business/list
import axios from 'axios';
import crypto from 'crypto';
import CryptoJS from 'crypto-js';
const r = {
  "e": "EB444973714E4A40876CE66BE45D5930",
  "i": "B5A8904209931867",
  "a": "B3978D054A72A7002063637CCDF6B2E5"
}
const l = (t, e) => {
  return t.toString().toUpperCase() > e.toString().toUpperCase() ? 1 : t.toString().toUpperCase() == e.toString().toUpperCase() ? 0 : -1
}
const u = (t) => {
  for (var e = Object.keys(t).sort(l), n = "", a = 0; a < e.length; a++)
    if (void 0 !== t[e[a]])
      if (t[e[a]] && t[e[a]] instanceof Object || t[e[a]] instanceof Array) {
        var i = JSON.stringify(t[e[a]]);
        n += e[a] + i
      } else
        n += e[a] + t[e[a]];
  return n
}
const f = {
  getSign: (t) => {
    for (var e in t)
      "" !== t[e] && void 0 !== t[e] || delete t[e];
    var n = r["a"] + u(t);
    // return s(n).toLocaleLowerCase()
    // md5加密
    return crypto.createHash('md5').update(n).digest('hex').toLocaleLowerCase()
  }
}

const aaa = (t) => {
  let e = {};
  e["ts"] = (new Date).getTime(),
    "string" === typeof t.data && (t.data = JSON.parse(t.data)),
    "post" === t.method && t.data && Object.assign(e, t.data),
    // t.headers["portal-sign"] = f.getSign(e),
    "post" == t.method ? t.data = Object.assign(Object.assign({}, t.data), {}, {
      ts: e["ts"]
    }) : "get" == t.method && (t.params = Object.assign(Object.assign({}, t.params), {}, {
      ts: e["ts"]
    }))
  return {
    data: e,
    sign: f.getSign(e)
  };
}
const t1 = {
  "method": "post",
  "data": {
    "pageNo": 2,
    "pageSize": 20,
    "total": 2714,
    "AREACODE": "",
    "M_PROJECT_TYPE": "",
    "KIND": "GCJS",
    "GGTYPE": "1",
    "PROTYPE": "",
    "timeType": "6",
    "BeginTime": "2025-01-23 00:00:00",
    "EndTime": "2025-07-23 23:59:59",
    "createTime": ""
  },
  "headers": {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    "put": {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    "patch": {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    "content-type": "application/json;charset=UTF-8"
  }
}
const data = aaa(t1);
// console.log('data', data);

const response = await axios.post(
  'https://ggzyfw.fujian.gov.cn/FwPortalApi/Trade/TradeInfo',
  data.data,
  {
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Accept-Language': 'zh-CN,zh;q=0.9,ja;q=0.8',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Content-Type': 'application/json;charset=UTF-8',
      'Origin': 'https://ggzyfw.fujian.gov.cn',
      'Pragma': 'no-cache',
      'Referer': 'https://ggzyfw.fujian.gov.cn/business/list',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
      'portal-sign': data.sign,
      'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"'
    }
  }
);
// console.log(response.data);
const miwen = response.data.Data;
const h = {
  a: CryptoJS
}
function b(t) {
  // console.log(t);

  var e = h.a.enc.Utf8.parse(r["e"])
    , n = h.a.enc.Utf8.parse(r["i"])
    , a = h.a.AES.decrypt(t, e, {
      iv: n,
      mode: h.a.mode.CBC,
      padding: h.a.pad.Pkcs7
    });
  return a.toString(h.a.enc.Utf8)
}
console.log(b(miwen));