// https://www.xiniudata.com/industry/newest?from=data
import axios from 'axios';
import crypto from 'crypto';
const payload = {
  "sort": 1,
  "start": 80,
  "limit": 20
}
var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
  , _p = "W5D80NFZHAYB8EUI2T649RT2MNRMVE2O";
const u = {
  c: (e) => {
    if (null == e)
      return null;
    for (var t, n, r, o, i, a, u, c = "", l = 0; l < e.length;)
      o = (t = e.charCodeAt(l++)) >> 2,
        i = (3 & t) << 4 | (n = e.charCodeAt(l++)) >> 4,
        a = (15 & n) << 2 | (r = e.charCodeAt(l++)) >> 6,
        u = 63 & r,
        isNaN(n) ? a = u = 64 : isNaN(r) && (u = 64),
        c = c + _keyStr.charAt(o) + _keyStr.charAt(i) + _keyStr.charAt(a) + _keyStr.charAt(u);
    return c
  },
  d: (e) => {
    if (null == (e = _u_e(e)))
      return null;
    for (var t = "", n = 0; n < e.length; n++) {
      var r = _p.charCodeAt(n % _p.length);
      t += String.fromCharCode(e.charCodeAt(n) ^ r)
    }
    return t
  },
  e: (e) => {
    // return md5(e + _p).toUpperCase()
    return crypto.createHash('md5').update(e + _p).digest('hex').toUpperCase()
  },
  a: (e) => {
    var t, n, r, o, i, a, u = "", c = 0;
    for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); c < e.length;)
      t = _keyStr.indexOf(e.charAt(c++)) << 2 | (o = _keyStr.indexOf(e.charAt(c++))) >> 4,
        n = (15 & o) << 4 | (i = _keyStr.indexOf(e.charAt(c++))) >> 2,
        r = (3 & i) << 6 | (a = _keyStr.indexOf(e.charAt(c++))),
        u += String.fromCharCode(t),
        64 != i && (u += String.fromCharCode(n)),
        64 != a && (u += String.fromCharCode(r));
    return u
  },
  b: (e) => {
    for (var t = "", n = 0; n < e.length; n++) {
      var r = _p.charCodeAt(n % _p.length);
      t += String.fromCharCode(e.charCodeAt(n) ^ r)
    }
    return t = _u_d(t)
  }
}
function _u_e(e) {
  if (null == e)
    return null;
  e = e.replace(/\r\n/g, "\n");
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e.charCodeAt(n);
    r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192),
      t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224),
        t += String.fromCharCode(r >> 6 & 63 | 128),
        t += String.fromCharCode(63 & r | 128))
  }
  return t
}
function _u_d(e) {
  for (var t = "", n = 0, r = 0, o = 0, i = 0; n < e.length;)
    (r = e.charCodeAt(n)) < 128 ? (t += String.fromCharCode(r),
      n++) : r > 191 && r < 224 ? (o = e.charCodeAt(n + 1),
        t += String.fromCharCode((31 & r) << 6 | 63 & o),
        n += 2) : (o = e.charCodeAt(n + 1),
          i = e.charCodeAt(n + 2),
          t += String.fromCharCode((15 & r) << 12 | (63 & o) << 6 | 63 & i),
          n += 3);
  return t
}
var f = Object(u.c)(Object(u.d)(JSON.stringify(payload)))
  , p = Object(u.e)(f);
console.log('f', f)
console.log('p', p)
const response = await axios.post(
  'https://www.xiniudata.com/api2/service/x_service/person_industry_list/list_industries_by_sort',
  {
    'payload': f,
    'sig': p,
    'v': 1
  },
  {
    headers: {
      'accept': 'application/json',
      'accept-language': 'zh-CN,zh;q=0.9,ja;q=0.8',
      'cache-control': 'no-cache',
      'content-type': 'application/json',
      'origin': 'https://www.xiniudata.com',
      'pragma': 'no-cache',
      'priority': 'u=1, i',
      'referer': 'https://www.xiniudata.com/industry/newest?from=data',
      'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
      'cookie': 'btoken=EW16ZHGSHNC1WMIO3WP7H539IMWKE3BB; Hm_lvt_42317524c1662a500d12d3784dbea0f8=1752830296; Hm_lpvt_42317524c1662a500d12d3784dbea0f8=1752830296; HMACCOUNT=D56BDDE935CE63F9'
    }
  }
);
// console.log(response.data);

var d = Object(u.a)(response.data.d)
  , y = Object(u.b)(d)
  , v = JSON.parse(y);
console.log(v);