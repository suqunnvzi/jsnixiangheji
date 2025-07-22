import axios from 'axios';
import CryptoJS from 'crypto-js';

const b = function () {
  var e = Date.now().toString();
  return {
    code: CryptoJS.MD5(e + "9527" + e.substr(0, 6)).toString(),
    timestamp: e,
    platform: "web_pc",
    v: "0.1.0",
    mytoken: void 0
  }
}
const params = b();
console.log(params);
try {
  const response = await axios.get('https://api.mytoken.info/ticker/currencyranklist', {
    params: {
      'pages': '2,1',
      'sizes': '100,100',
      'subject': 'market_cap',
      'language': 'en_US',
      'legal_currency': 'USD',
      'code': params.code,
      'timestamp': params.timestamp,
      'platform': params.platform,
      'v': params.v,
      'mytoken': params.mytoken
    },
    headers: {
      'accept': '*/*',
      'accept-language': 'zh-CN,zh;q=0.9',
      'cache-control': 'no-cache',
      'pragma': 'no-cache',
      'priority': 'u=1, i',
      'referer': 'https://www.mytokencap.com/',
      'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36'
    }
  });
  console.log(response.data);
} catch (error) {
  console.log(error.message);
}