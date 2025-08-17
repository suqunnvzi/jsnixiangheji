import axios from 'axios';
import { HttpsProxyAgent } from 'https-proxy-agent';
import jsdom from 'jsdom';
import util from 'util';
import fs from 'fs';
// 代理地址，可以是 http 或 https
const proxy = 'http://127.0.0.1:10809';

// 创建一个代理 agent
const httpsAgent = new HttpsProxyAgent(proxy);

const response = await axios.get('https://www.youtube.com/hashtag/haka/shorts', {
  httpsAgent,                    // 设置代理
  proxy: false,
  headers: {
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"',
    'sec-ch-ua-arch': '"x86"',
    'sec-ch-ua-bitness': '"64"',
    'sec-ch-ua-form-factors': '"Desktop"',
    'sec-ch-ua-full-version': '"139.0.7258.128"',
    'sec-ch-ua-full-version-list': '"Not;A=Brand";v="99.0.0.0", "Google Chrome";v="139.0.7258.128", "Chromium";v="139.0.7258.128"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-model': '""',
    'sec-ch-ua-platform': '"Windows"',
    'sec-ch-ua-platform-version': '"19.0.0"',
    'sec-ch-ua-wow64': '?0'
  }
});
const dom = new jsdom.JSDOM(response.data);
const scripts = [...dom.window.document.querySelectorAll("script")];
const contents = scripts.map(s => s.textContent.trim());
let dataIndex = 0
// 遍历每一项，查找"richGridRenderer"在第几项
for (let i = 0; i < contents.length; i++) {
  if (contents[i].includes('richGridRenderer')) {
    console.log(i);
    dataIndex = i
    break;
  }
}
const scriptContent = contents[dataIndex]


// 正则：匹配 richGridRenderer 后面的大括号内容
const obj = extractObject(scriptContent, "richGridRenderer");
// console.log(obj);
fs.writeFileSync('haka.json', JSON.stringify(obj.contents, null, 2));

// fs.writeFileSync('result-brower.json', JSON.stringify(response.data.contents.twoColumnBrowseResultsRenderer.tabs[1].tabRenderer.content.richGridRenderer.contents, null, 2));
// 使用正则提取richGridRenderer后面的对象内容
function extractObject(str, key) {
  const keyIndex = str.indexOf(`"${key}"`);
  if (keyIndex === -1) return null;

  // 找到冒号后第一个 {
  const start = str.indexOf("{", keyIndex);
  if (start === -1) return null;

  let depth = 0;
  let end = -1;
  for (let i = start; i < str.length; i++) {
    if (str[i] === "{") depth++;
    else if (str[i] === "}") depth--;
    if (depth === 0) {
      end = i;
      break;
    }
  }

  if (end === -1) return null;

  const objStr = str.slice(start, end + 1);

  return JSON.parse(objStr);
}