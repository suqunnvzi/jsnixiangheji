import axios from 'axios';
import crypto from 'crypto';
function a11_0x22e0(_0x4fdf0e, _0x141224) {
  var _0x30174a = a11_0x3017();
  return a11_0x22e0 = function (_0x22e046, _0x2b0a6e) {
    _0x22e046 = _0x22e046 - 0x13b;
    var _0x7927cf = _0x30174a[_0x22e046];
    return _0x7927cf;
  }
    ,
    a11_0x22e0(_0x4fdf0e, _0x141224);
}
(async () => {
  var _0x2fe297 = a11_0x22e0
  switch (_0x2e9118[_0x2fe297(0x93b)] = _0x2e9118[_0x2fe297(0x8a7)]) {
    case 0x0:
      if (!_0x46af64[_0x2fe297(0x37d)] || !/^(https?:)?\/\//[_0x2fe297(0x6c2)](_0x46af64['url'])) {
        _0x2e9118[_0x2fe297(0x8a7)] = 0x2;
        break;
      }
      return _0x2e9118[_0x2fe297(0x6e4)](_0x2fe297(0x55c), _0x46af64);
    case 0x2:
      if (!(location['host'][_0x2fe297(0x23a)]('alitest') >= 0x0 || location['host']['indexOf'](':') > 0x0)) {
        _0x2e9118[_0x2fe297(0x8a7)] = 0x8;
        break;
      }
      return _0x2e9118['next'] = 0x5,
        _0x20b35a['a'][_0x2fe297(0x57b)];
    case 0x5:
      _0x46af64[_0x2fe297(0x6ff)] = _0x2e9118['sent'],
        _0x2e9118[_0x2fe297(0x8a7)] = 0xb;
      break;
    case 0x8:
      return _0x2e9118['next'] = 0xa,
        _0x20b35a['a'][_0x2fe297(0x57b)];
    case 0xa:
      _0x46af64[_0x2fe297(0x6ff)] = _0x2e9118[_0x2fe297(0x7a1)];
    case 0xb:
      return _0x2e9118['abrupt'](_0x2fe297(0x55c), _0x46af64);
    case 0xc:
    case 'end':
      return _0x2e9118[_0x2fe297(0x94b)]();
  }
})()

const response = await axios.post(
  'https://app.xunjiepdf.com/api/v4/quickfanyiweb',
  {

    'fanyicon': '你',
    'fanyito': 'en',
    'fanyifrom': 'zh',
    'usertoken': '',
    'coretag': 0,
    'deviceid': 'bd7c23ee7c61494c8095ff22e797e0ab',
    'timestamp': 1753261041,
    'productinfo': 'E8024FA03AEDA3A2735A41A8A7A8FD119F8DAC0ECC24829A5EE0D3D5A7AF78800C39C584240DB75F',
    'datasign': 'e559c0799a9f5f28b4edae4baf43e001'
  },
  {
    headers: {
      'Accept-Language': 'zh-CN,zh;q=0.9,ja;q=0.8',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Origin': 'https://www.xunjiefanyi.com',
      'Pragma': 'no-cache',
      'Referer': 'https://www.xunjiefanyi.com/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'cross-site',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
      'X-Credits': '93728f6c2a3e1b9ca25287269946ef14',
      'X-Domain': 'app.xunjiepdf.com',
      'X-Product': '644',
      'X-Version': '1.0.0.0',
      'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"'
    }
  }
);
console.log(response.data);