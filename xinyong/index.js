// https://credit.hd.gov.cn/xyxxgs/
import axios from 'axios';

const response = await axios.get('https://credit.hd.gov.cn/zx_website/website/sgs/xzxkfr?version=1.0&appId=27IGtFrNFDc&signType=SM2&encryptType=SM4&nonceStr=12bc450309dc4de09d9c113887e65b7b&timestamp=1752848973395&queryContent=f8e3735a2bc6b0b110636dbca6f6059631244ee277cc8ef5d7df2e4ad5afd7b9&sign=84727046548533511715210035511556406879664393908109536514747343827025773318027,43856816744466058389334352180915280900847867015553258797972354964377217959247', {
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6,ru;q=0.5',
    'C-GATEWAY-QUERY-ENCRYPT': '1',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Referer': 'https://credit.hd.gov.cn/xyxxgs/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0',
    'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'x-gateway-body': 'blob',
    'Cookie': '_gscu_2016493642=52848842rxgocj17; _gscbrs_2016493642=1; _gscs_2016493642=52848842cxg11l17|pv:2'
  }
});
console.log(response.data);