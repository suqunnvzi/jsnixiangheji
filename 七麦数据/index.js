import axios from 'axios';
const t = {
  "url": "/indexV2/getIndexRank",
  "headers": {

  },
  "params": {
    setting: 0,
    genre: "036"
  },
  "baseURL": "https://api.qimai.cn",
}
function o(n) {
  var e = "fromCharCode";
  return String[e](n)
}
function h(n, t) {
  for (var e = (n = n["split"](""))["length"], r = t["length"], a = "charCodeAt", i = 0; i < e; i++)
    n[i] = o(n[i][a](0) ^ t[(i + 10) % r][a](0));
  return n["join"]("")
}
const getAnalysis = (t) => {
  try {
    var s = -5154,
      p = "@#",
      d = "xyz517cda96efgh";

    var e, r = +new Date() - s - 1661224081041, a = [];

    if (t.params === undefined) t.params = {};

    a = t.params.genre;
    a = btoa(a);
    a = (a += p + t.url.replace(t.baseURL, "")) + (p + r) + (p + 3);
    e = btoa(h(a, d));
    return e; // 正确返回
  } catch (err) {
    console.error(err);
  }
};
console.log(getAnalysis(t));

const response = await axios.get('https://api.qimai.cn/indexV2/getIndexRank', {
  params: {
    'analysis': getAnalysis(t),
    'setting': '0',
    'genre': '36'
  },
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6,ru;q=0.5',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Origin': 'https://www.qimai.cn',
    'Pragma': 'no-cache',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0',
    'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'Cookie': 'qm_check=A1sdRUIQChtxen8pI0dAOTQ+GRdgUV1VW1ZFND9dTUlVAAICEGpVRlEAFUdASAFKBQcCBgAJchFFIg4aHRoOBnMDARlGR2dQOVdICAolAGgCHBl0B3xUV05KVFsZXVJRWxsKFghJVktYVElWBRVP; PHPSESSID=87kft4eadbmlknup07gld7ph4l; gr_user_id=8524d7f5-72f5-48db-a48e-88f226b8aafb; ada35577182650f1_gr_session_id=36489440-6380-4f69-9c2d-e4a139e860a5; ada35577182650f1_gr_session_id_sent_vst=36489440-6380-4f69-9c2d-e4a139e860a5; synct=1753689883.040; syncd=5286'
  }
});
console.log(response.data.data)