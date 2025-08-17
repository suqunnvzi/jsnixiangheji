import axios from 'axios';
import CryptoJS from 'crypto-js';
import crypto from 'crypto';
const o = (str) => {
  return CryptoJS.MD5(str).toString()
}
function c(e, t) {
  var n = function (e, t, n) {
    var r, i = "";
    void 0 === e && (e = 6),
      "string" == typeof t && (n = t),
      r = t && "number" == typeof t ? Math.round(Math.random() * (t - e)) + e : e,
      n = n || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var o = 0; o < r; o++) {
      var a = Math.round(Math.random() * (n.length - 1));
      i += n.substring(a, a + 1)
    }
    return i
  }()
    , r = o(n);
  return o(r + e + t) + "." + n
}
const _0x4f7bb4 = c;
function f(e, t) {
  return t ? t.$cookies.get(e) : o.a.get(e)
}
const signature = _0x4f7bb4(void 0, void 0);
console.log(signature);

class aaaa {
  constructor() {
    
  }

  isArray(e) {
    return Array.isArray(e)
  }

  isFunction(e) {
    return typeof e === 'function'
  }
}

var i = new aaaa();
const makeTracingHeaders = function (e, t, n, r, o) {
  void 0 === o && (o = {});
  var a = {}
    , s = n ? "1" : "0";
  r.includes("sw8") && (r = ["sw8"]);
  (0,
    i.isArray)(r) || (r = [r]);
  r.forEach((function (n) {
    switch (n) {
      case "jaeger":
        a["uber-trace-id"] = e + ":" + t + ":0:" + s;
        break;
      case "b3":
        a.b3 = e + "-" + t + "-" + s;
        break;
      case "b3multi":
        a["X-B3-TraceId"] = e,
          a["X-B3-SpanId"] = t,
          a["X-B3-Sampled"] = s;
        break;
      case "sw8":
        if ((0,
          i.isFunction)(btoa)) {
          var r = btoa(e)
            , c = btoa(t)
            , u = btoa(o.appId)
            , l = btoa(o.appVersion)
            , d = btoa(o.viewName)
            , p = btoa(o.host);
          a.sw8 = s + "-" + r + "-" + c + "-0-" + u + "-" + l + "-" + d + "-" + p
        }
        break;
      default:
        a.traceparent = "00-" + e + "-" + t + "-0" + s,
          o.tracestate && (a.tracestate = o.tracestate)
    }
  }
  )),
    o.baggage && (a.baggage = o.baggage);
  return a
}
function generateTraceId() {
  let e = crypto.randomUUID().replace(/-/g, "");
  if (e[0] === "0") e = "1" + e.substring(1);
  if (e[16] === "0") e = e.substring(0, 16) + "1" + e.substring(17);
  return e;
}
const traceId = generateTraceId();
console.log(traceId);
function s(e, t) {
  void 0 === e && (e = 16),
    void 0 === t && (t = 16);
  for (var n = "", r = 0; r < e; r++)
    n += Math.floor(Math.random() * t).toString(t);
  return n
}
const spanId = s(void 0, void 0);
console.log(spanId);
const r = ["tracecontext"]
const o2 = {
  "tracestate": "rum=v2&browser&fyw9n1jhpf@3a1b5a97673481b&9120e45985d24ee78084aa1a768156e7&uid_cd3ger559nlkkdfh",
  "appId": "fyw9n1jhpf@3a1b5a97673481b",
  "appVersion": "1.0.0",
  "viewName": "/search-company",
  "host": "qiye.qizhidao.com"
}
// console.log(makeTracingHeaders(traceId, spanId, true, r, o2));
const headers = makeTracingHeaders(traceId, spanId, true, r, o2);

const response = await axios.post(
  'https://app.qizhidao.com/qzd-bff-pcweb/qzd/v1/search/enterprisea/suggestPredict',
  {
    'category_new': [],
    'prefix': '速创昕高',
    'size': 5,
    'status': '',
    'type': 0
  },
  {
    headers: {
      'accept': 'application/json, text/plain, */*',
      'accept-language': 'zh-CN,zh;q=0.9,es;q=0.8',
      'cache-control': 'no-cache',
      'content-type': 'application/json; charset=UTF-8',
      'device-id': 'BLgy4kGJb/Gu2m+jsh7gLO9GO6N8DVnC2Ts3QeNcj2VpiMgOdfL6k7zUd6QEotLoO0O+W3VPD7ZxUGZrim5gksQ==',
      'h5version': 'v1.0.0',
      'pragma': 'no-cache',
      'priority': 'u=1, i',
      'referer': 'https://qiye.qizhidao.com/search-company?key=%E9%80%9F%E5%88%9B%E6%98%95%E9%AB%98&businessSource=PC%E6%9F%A5%E4%BC%81%E4%B8%9A%E9%A6%96%E9%A1%B5&pageTitle=undefined&searchMode=%E8%BE%93%E5%85%A5%E6%90%9C%E7%B4%A2&searchTab=1',
      'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'signature': signature,
      'traceparent': headers.traceparent,
      'tracestate': headers.tracestate,
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
      'user-agent-web': 'X/428edbc5f901b25b498320bf71597712',
      'cookie': 'sajssdk_2015_cross_new_user=1; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2219845263ceec28-054bec0dc405568-26011151-3686400-19845263cef2468%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTk4NDUyNjNjZWVjMjgtMDU0YmVjMGRjNDA1NTY4LTI2MDExMTUxLTM2ODY0MDAtMTk4NDUyNjNjZWYyNDY4In0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%2219845263ceec28-054bec0dc405568-26011151-3686400-19845263cef2468%22%7D; acw_tc=ac11000117535067977435096e007bd632e9d004a9f693571f9defcf17dfec; sensorsdata2015jssdkchannel=%7B%22prop%22%3A%7B%22_sa_channel_landing_url%22%3A%22%22%7D%7D; wz_uuid=X/428edbc5f901b25b498320bf71597712; x-web-ip=111.172.4.228, 119.23.123.186, 120.78.44.179, 100.121.108.23'
    }
  }
);

console.log(response.data.data);
