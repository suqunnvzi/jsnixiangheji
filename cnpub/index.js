import axios from 'axios';
import CryptoJS from 'crypto-js';
const e = {
  "newsType": 1,
  "pageNum": 2,
  "pageSize": 10,
  "title": ""
}
const s = CryptoJS
const o = (e, t = "16weizifuchuan16", i = "1suibianshurude6") => {
  const a = s["enc"].Utf8.parse(t)
    , o = s["enc"].Utf8.parse(i);
  let r = s["enc"].Utf8.parse(JSON.stringify(e));
  const n = s["AES"].encrypt(r, a, {
    iv: o,
    mode: s["mode"].CBC,
    padding: s["pad"].Pkcs7
  });
  return n.ciphertext.toString()
}
const data = o(e)
console.log(data)
fetch("https://cnpub.com.cn/prod-api/api/index/newsList", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/json;charset=UTF-8",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"138\", \"Google Chrome\";v=\"138\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "cookie": "Hm_lvt_752e8c426e05a4a2fe3b90181b8843de=1753352332; Hm_lpvt_752e8c426e05a4a2fe3b90181b8843de=1753352332; HMACCOUNT=A4087C4608FFA5A2",
    "Referer": "https://cnpub.com.cn/information.html"
  },
  "body": data,
  "method": "POST"
}).then(async res => {
  const json = await res.text();
  // console.log(json);
  const r = (e, t = "16weizifuchuan16", i = "1suibianshurude6") => {
    const a = s["enc"].Utf8.parse(t)
      , o = s["enc"].Utf8.parse(i)
      , r = s["AES"].decrypt(s["format"].Hex.parse(e), a, {
        iv: o,
        mode: s["mode"].CBC,
        padding: s["pad"].Pkcs7
      });
    return s["enc"].Utf8.stringify(r).toString()
  }
  const data = r(json)
  console.log(data);
})

