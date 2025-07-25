import axios from 'axios';
const phoneNumber = '13429966684'
const response = await axios.post(
  'https://open.e.189.cn/api/logbox/oauth2/needcaptcha.do',
  new URLSearchParams({
    'appKey': 'cloud',
    'userName': '{NRP}618815c4aa63ac2374121abfbd504c9cc06ba552c2ca22b2fb33578d3db0fc455fd215c8b328fb3979f1cdd7b14f0d1e732cd84386e49fa0050717ef13965b38546ff6bdf2492c12d2fd33576e18074153cfa84e7b7c70b2f08461794d6fdb56231b3bbc4667dab80e21102b6f40a6a2a62bab85665e72a5e00bb68ba27550d1'
  }),
  {
    headers: {
      'accept': '*/*',
      'accept-language': 'zh-CN,zh;q=0.9',
      'cache-control': 'no-cache',
      'pragma': 'no-cache',
      'priority': 'u=1, i',
      'referer': 'https://open.e.189.cn/api/logbox/separate/wap/login.html?appId=cloud&version=v1.1&clientType=20100&format=redirect&paras=54E6C4251852DA22E5E859D7FA2AAD81733A6E377F9CAEA70A5B27526F8233845C50BF58C29B76FC0F9CF80847D3047F252B428B9F92ECBEEBE934C0C075B8359A3750F41399E7418F6AC9E405BEABF724CE43A6C9481F64D8C6498FB6D3D9BB8CC30602932F452BD0F547F1964961378B8AE99043AF27F3D280B51D7AF62AD84915682839F9848A4B28DF7DFF06E24AAF9EA05ACD4A6D070775C447E53C533C2A53AB9DEF1D147D2E59FF4CAF893680C0225BCAFA7A4D005AB7A2B1&sign=E5CCE59D20022F9C9C58E3D132FE678B0D738E40&protocol=https&netType=',
      'reqid': 'acdb7b11334a4de2be8a6d0ed183d054',
      'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
      'sec-ch-ua-mobile': '?1',
      'sec-ch-ua-platform': '"Android"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Mobile Safari/537.36',
      'user-finger': '3215709162',
      'cookie': 'GUID=98cbf29cec3647a1b2369e3bddf34ae9; LT=467e698b60101073; STK=9FD28B4E70DE03B57C40F0B2128FE9BF1411B0D695BBDF46CDFC7BD91B795DB71E390AEDA278791D587C9D1CD821E6A79EC2B5E45D7AD337AD6DA777567BEB7BE0ECA060D9EB1BCD446E7D88C576C978AFDE4C98; pageOp=310dc489934dbc7e524b14d5cab43f25; QRCODE=7a1e85afaeb9407c'
    }
  }
);
console.log(response.data);