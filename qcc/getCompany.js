var window = global
import qs from 'qs';
import CryptoJS from 'crypto-js';
import axios from 'axios';
import { getIds } from './getId.js';

const ids = await getIds()
window.pid = ids.pid
window.tid = ids.tid
const l = 20
const u = {
  "0": "W",
  "1": "l",
  "2": "k",
  "3": "B",
  "4": "Q",
  "5": "g",
  "6": "f",
  "7": "i",
  "8": "i",
  "9": "r",
  "10": "v",
  "11": "6",
  "12": "A",
  "13": "K",
  "14": "N",
  "15": "k",
  "16": "4",
  "17": "L",
  "18": "1",
  "19": "8"
}

const d = {
  A: () => {
    var list = ["w", "i", "n", "d", "o", "w", ".", "t", "i", "d"];
    return eval(list.join(""))
  }
}
const e = {
  "url": "search/searchMind",
  "headers": {
  },
  "params": {
    mindType: 9,
    pageSize: 5,
    person: true,
    searchKey: '速创昕高'
  },
  "baseURL": "https://www.qcc.com/api",
  data: void 0
}
const f = () => {
  return qs
}
const i = function () {
  return CryptoJS.HmacSHA512
}
const o = function (e, t) {
  return i()(e, t).toString()
}


const h = function () {
  for (var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/").toLowerCase(), t = e + e, n = "", r = 0; r < t.length; ++r) {
    var i = t[r].charCodeAt() % l;
    n += u[i]
  }
  return n
}
const v = function (e) {
  var t = ("/api/" + e.url.replace(e.baseURL, "")).replace("//", "/")
    , n = f().stringify(e.params, {
      sort: (a, b) => a.localeCompare(b)
    });
  n && (t += "?" + n);
  var r = function () {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
      , t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/").toLowerCase()
      , n = JSON.stringify(e).toLowerCase();
    return o(t + n, h(t)).toLowerCase().substr(8, 20)
  }(t = t.toLowerCase(), e.data)
    , i = function () {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        , t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ""
        , n = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/").toLowerCase()
        , r = JSON.stringify(e).toLowerCase();
      return o(n + "pathString" + r + t, h(n))
    }(t, e.data, (0,
      d.A)());
  e.headers[r] = i
}
v(e)

export const getCompany = async () => {
  try {

    const response = await axios.get('https://www.qcc.com/api/search/searchMind?' + new URLSearchParams(e.params), {
      headers: {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'zh-CN,zh;q=0.9,es;q=0.8',
        'cache-control': 'no-cache',
        'pragma': 'no-cache',
        'priority': 'u=1, i',
        'referer': 'https://www.qcc.com/firm/19f629567dbeea662ee97e2703ec42c3.html',
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
        'x-pid': pid,
        'x-requested-with': 'XMLHttpRequest',
        'cookie': 'QCCSESSID=ec3a20bf81d4161bb41ca1128e; qcc_did=73a9caf9-527e-4527-841a-6754bdafac97; UM_distinctid=19840e8c18cf29-053cac17ced942-26011151-384000-19840e8c18d24dd; _c_WBKFRo=OroiZFjE4msVQ2xRmkcrJPMUdfDmn8Isk6yuUWNo; acw_tc=0a47318217534960050424695e007407c60a453ed2c64cc5df11d9c6f8c72c; CNZZDATA1254842228=120410662-1753435652-https%253A%252F%252Fwww.google.com%252F%7C1753497549',
        ...e.headers
      }
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
