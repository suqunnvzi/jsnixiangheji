import axios from 'axios';
import crypto from 'crypto';
// 需要解密的：sign
const a = new Date().getTime();
const d = 'fanyideskweb';
const u = 'webfanyi';
function _(e) {
  return crypto.createHash("md5").update(e.toString()).digest("hex")
}
function S(e, t) {
  return _(`client=${d}&mysticTime=${e}&product=${u}&key=${t}`)
}
const sign = S(a, 'yU5nT5dK3eZ1pI4j');
export default async function getKeyId() {
try {
  const response = await axios.get('https://dict.youdao.com/webtranslate/key', {
    params: {
      keyid: 'webfanyi-key-getter-2025',
      sign: sign,
      client: 'fanyideskweb',
      product: 'webfanyi',
      appVersion: '1.0.0',
      vendor: 'web',
      pointParam: 'client,mysticTime,product',
      mysticTime: a + '',
      keyfrom: 'fanyi.web',
      mid: '1',
      screen: '1',
      model: '1',
      network: 'wifi',
      abtest: '0',
      yduuid: 'abcdefg'
    },
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6,ru;q=0.5',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Origin': 'https://fanyi.youdao.com',
      'Pragma': 'no-cache',
      'Referer': 'https://fanyi.youdao.com/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-site',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0',
      'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      // 'Cookie': 'OUTFOX_SEARCH_USER_ID=1393030700@117.154.101.13; OUTFOX_SEARCH_USER_ID_NCOO=2082243063.4071777; _uetsid=09c297a0625011f0acffc7e11da625b9; _uetvid=09c29330625011f0a56c07a3f3d1ce3f; DICT_DOCTRANS_SESSION_ID=MTZlNzA2ZjAtM2QwMC00Y2RjLWJmZTgtMjkyZThlYTVjZTRm'
    }
  });
  // console.log(response.data);
  return response.data.data;
} catch (error) {
    console.log(error.message);
  }
}
