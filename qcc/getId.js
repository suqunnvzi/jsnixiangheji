import axios from 'axios';

export const getIds = async () => {
  try {
    const wresponse = await axios.get('https://www.qcc.com/firm/19f629567dbeea662ee97e2703ec42c3.html', {
      headers: {
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-language': 'zh-CN,zh;q=0.9,es;q=0.8',
        'cache-control': 'no-cache',
        'pragma': 'no-cache',
        'priority': 'u=0, i',
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
        'cookie': 'QCCSESSID=ec3a20bf81d4161bb41ca1128e; qcc_did=73a9caf9-527e-4527-841a-6754bdafac97; UM_distinctid=19840e8c18cf29-053cac17ced942-26011151-384000-19840e8c18d24dd; _c_WBKFRo=OroiZFjE4msVQ2xRmkcrJPMUdfDmn8Isk6yuUWNo; acw_tc=0a472f8117534982823074984e007cb1f445f15072cb8d7cce8f527fa9aa41; CNZZDATA1254842228=120410662-1753435652-https%253A%252F%252Fwww.google.com%252F%7C1753498283'
      }
    });
    // console.log(response.data)
    const match = wresponse.data.match(/<script[^>]*>([\s\S]*?)<\/script>/i);
    const scriptContent = match ? match[1].trim() : '';
    const scriptContentArr = scriptContent.split(';');
    // window.pid = 'e85ec3c8a2917a7fd6b5cd6e3ab87172';
    // window.tid = '75d291b138648dd77c9aaa0bb0531efe'
    return {
      pid: scriptContentArr[0].replace('window.pid=', '').trim().replaceAll("'", ""),
      tid: scriptContentArr[1].replace('window.tid=', '').trim().replaceAll("'", "")
    }
  } catch (error) {
    return null
  }
}