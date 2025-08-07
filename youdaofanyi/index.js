import axios from 'axios';
import crypto from 'crypto';
import util from 'util';
// 需要解密的:sign
// aesKey、aesIv从key?keyid的接口获取
import getKeyId from './keyid.js';

function _(e) {
  return crypto.createHash("md5").update(e.toString()).digest("hex")
}

async function translate(text) {
  const a = new Date().getTime(); // 每次请求都使用新的时间戳
  const d = 'fanyideskweb';
  const u = 'webfanyi';

  function S(e, t) {
    return _(`client=${d}&mysticTime=${e}&product=${u}&key=${t}`)
  }

  const keyIds = await getKeyId();
  // console.log('keyIds', keyIds);
  const sign = S(a, keyIds.secretKey);
  // console.log('sign', sign);

  const response = await axios.post(
    'https://dict.youdao.com/webtranslate',
    new URLSearchParams({
      'i': text,
      'from': 'en',
      'to': 'zh-CHS',
      'useTerm': 'false',
      'domain': '0',
      'dictResult': 'true',
      'keyid': 'webfanyi',
      'sign': sign,
      'client': 'fanyideskweb',
      'product': 'webfanyi',
      'appVersion': '1.0.0',
      'vendor': 'web',
      'pointParam': 'client,mysticTime,product',
      'mysticTime': a + '',
      'keyfrom': 'fanyi.web',
      'mid': '1',
      'screen': '1',
      'model': '1',
      'network': 'wifi',
      'abtest': '0',
      'yduuid': 'abcdefg'
    }),
    {
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
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
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': 'OUTFOX_SEARCH_USER_ID=-918619102@58.48.226.56; OUTFOX_SEARCH_USER_ID_NCOO=2020023672.1433735; UM_distinctid=1981baae850ab5-00e4f97703b6f78-4c657b58-384000-1981baae8512bda; _uetsid=45f33e40637a11f0a53ad9c04e4d0454|alrj1m|2|fxp|0|2025; _uetvid=99f3431032ea11f0b45049c7e4681040|1bepyj4|1752810845459|1|1|bat.bing.com/p/insights/c/s; DICT_DOCTRANS_SESSION_ID=NzlmNmU1MzAtNDZkZC00ZDQyLThmYjgtMmRiOWNhY2Y1ZThh'
      }
    }
  );
  // console.log('response.data', response.data);
  const O = (e, t, a) => {
    // console.log('e', e);
    // console.log('t', t);
    // console.log('a', a);
    if (!e)
      return null;
    const o = Buffer.alloc(16, T(t))
    // console.dir(o, { depth: null });
    const n = Buffer.alloc(16, T(a))
    // console.dir(n, { depth: null });
    const r = crypto.createDecipheriv("aes-128-cbc", o, n);
    let s = r.update(e, "base64", "utf-8");
    // console.log('s', s);

    return s += r.final("utf-8"),
      s
  }
  function T(e) {
    return crypto.createHash("md5").update(e).digest()
  }
  const result = O(response.data, keyIds.aesKey, keyIds.aesIv);
  // console.log('result', result);
  const result2 = JSON.parse(result);
  // console.log(util.inspect(result2.translateResult[0].at(-1), { depth: null, showHidden: true, colors: true }));
  return result2.translateResult[0];
}
// const result = await translate('hello');
// console.log(result);
const arr = [
  'Someone just clicked your shared link. Congratulations, you got {dianji}, which has been transferred to your balance.',
  'Warning! We suspect that you are maliciously registering in bulk. Continuing to cheat will result in your account being locked!'
]

const result = await Promise.all(arr.map(async (item) => {
  const result1 = await translate(item);
  return result1.map(item => item.tgt).join('');
}));
console.log(result);
