import axios from 'axios';
import crypto from 'crypto';
import util from 'util';
import getKeyId from './keyid.js';

const a = new Date().getTime();
const d = 'fanyideskweb';
const u = 'webfanyi';

function _(e) {
  return crypto.createHash("md5").update(e.toString()).digest("hex")
}

function S(e, t) {
  return _(`client=${d}&mysticTime=${e}&product=${u}&key=${t}`)
}

async function testTranslation(text) {
  console.log(`\n=== 测试文本: "${text}" ===`);
  
  const keyIds = await getKeyId();
  console.log('keyIds:', keyIds);
  
  const sign = S(a, keyIds.secretKey);
  console.log('sign:', sign);
  console.log('mysticTime:', a);
  
  const params = {
    'i': text,
    'from': 'zh-CHS',
    'to': 'en',
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
    'mysticTime': a,
    'keyfrom': 'fanyi.web',
    'mid': '1',
    'screen': '1',
    'model': '1',
    'network': 'wifi',
    'abtest': '0',
    'yduuid': 'abcdefg'
  };
  
  console.log('请求参数 i:', params.i);
  console.log('请求参数 sign:', params.sign);
  
  try {
    const response = await axios.post(
      'https://dict.youdao.com/webtranslate',
      new URLSearchParams(params),
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
        }
      }
    );
    
    console.log('response.data:', response.data);
    
    const O = (e, t, a) => {
      if (!e) return null;
      const o = Buffer.alloc(16, T(t))
      const n = Buffer.alloc(16, T(a))
      const r = crypto.createDecipheriv("aes-128-cbc", o, n);
      let s = r.update(e, "base64", "utf-8");
      return s += r.final("utf-8"), s
    }
    
    function T(e) {
      return crypto.createHash("md5").update(e).digest()
    }
    
    const result = O(response.data, keyIds.aesKey, keyIds.aesIv);
    if (result) {
      const result2 = JSON.parse(result);
      console.log('解密结果:', util.inspect(result2, { depth: null, showHidden: true, colors: true }));
    } else {
      console.log('解密失败');
    }
    
  } catch (error) {
    console.log('请求失败:', error.message);
  }
}

// 测试不同的输入文本
async function runTests() {
  const testTexts = [
    '观看视频即可赚取5美元',
    '你好',
    '你',
    'Hello',
    'How are you?',
    '这是一个测试句子'
  ];
  
  for (const text of testTexts) {
    await testTranslation(text);
    // 添加延迟避免请求过快
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

runTests().catch(console.error); 