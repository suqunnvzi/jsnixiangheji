// https://www.oklink.com/zh-hans/bitcoin/block-list/page/2

import axios from 'axios';

import CryptoJS from 'crypto-js';
class ApiEncryptor {
  /**
   * 构造函数
   * @param {string} API_KEY - 初始API密钥
   * @param {number} [c=1111111111111] - 加密时间使用的常量，默认值1111111111111
   */
  constructor(API_KEY, c = 1111111111111) {
    this.API_KEY = API_KEY; // 存储API密钥
    this.c = c; // 加密时间使用的常量
  }

  /**
   * 加密API密钥
   * @returns {string} 加密后的API密钥
   */
  encryptApiKey() {
    const keyArray = this.API_KEY.split("");
    const first8Chars = keyArray.splice(0, 8); // 取出前8个字符
    return keyArray.concat(first8Chars).join(""); // 将前8个字符拼接到末尾
  }

  /**
   * 加密时间戳
   * @param {number} timestamp - 原始时间戳
   * @returns {string} 加密后的时间字符串
   */
  encryptTime(timestamp) {
    const timeStr = (timestamp + this.c).toString().split("");
    // 生成3个随机数字并添加到时间字符串末尾
    const randomDigits = [
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
    ];
    return timeStr.concat(randomDigits).join("");
  }

  /**
   * 组合并Base64编码
   * @param {string} apiKey - 加密后的API密钥
   * @param {string} timeStr - 加密后的时间字符串
   * @returns {string} Base64编码后的组合字符串
   */
  comb(apiKey, timeStr) {
    const combined = `${apiKey}|${timeStr}`;
    // return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(combined));
    return btoa(combined);
  }

  /**
   * 获取完整的API Key
   * @returns {string} 处理后的API Key
   */
  getApiKey() {
    const timestamp = new Date().getTime();
    const encryptedKey = this.encryptApiKey();
    const encryptedTime = this.encryptTime(timestamp);
    return this.comb(encryptedKey, encryptedTime);
  }

  /**
   * 从加密字符串中获取原始时间戳
   * @param {string} encodedStr - Base64编码的字符串
   * @returns {number} 原始时间戳
   */
  getTimestamp(encodedStr) {
    // Base64解码
    const decoded = CryptoJS.enc.Base64.parse(encodedStr).toString(CryptoJS.enc.Utf8);
    const timeStr = decoded.split("|")[1];
    // 去掉最后3个随机数字并减去常量c
    return parseInt(timeStr.slice(0, -3), 10) - this.c;
  }
}

// 使用示例：
const encryptor = new ApiEncryptor("a2c903cc-b31e-4547-9299-b6d07b7631ab", 1111111111111);
const apiKey = encryptor.getApiKey();
console.log("生成的API Key:", apiKey);
// const timestamp = encryptor.getTimestamp(apiKey);
// console.log("解析出的时间戳:", timestamp);
// const ttt = encryptor.encryptTime(timestamp);
// console.log("加密后的时间戳:", ttt);

const now = (new Date).getTime();

const { data } = await axios.get('https://www.oklink.com/api/explorer/v1/btc/blocks', {
  params: {
    'offset': '20',
    'limit': '20',
    't': now
  },
  headers: {
    'accept': 'application/json',
    'accept-language': 'zh-CN,zh;q=0.9,ja;q=0.8',
    'app-type': 'web',
    'cache-control': 'no-cache',
    'devid': 'f021e15b-4465-45cc-ae3e-329c256e9ba4',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://www.oklink.com/zh-hans/bitcoin/block-list/page/2',
    'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
    'x-apikey': apiKey,
    'x-cdn': 'https://static.oklink.com',
    // 'x-id-group': `2930125696380770001-c-5`,
    'x-locale': 'zh_CN',
    'x-simulated-trading': 'undefined',
    'x-site-info': '9FjOikHdpRnblJCLiskTJx0SPJiOiUGZvNmIsIiTDJiOi42bpdWZyJye',
    'x-utc': '8',
    'x-zkdex-env': '0',
    // 'cookie': 'devId=f021e15b-4465-45cc-ae3e-329c256e9ba4; locale=zh_CN; ok-exp-time=1752560872717; fingerprint_id=f021e15b-4465-45cc-ae3e-329c256e9ba4; fp_s=-1; first_ref=https%3A%2F%2Fwww.google.com%2F; ok_site_info=9FjOikHdpRnblJCLiskTJx0SPJiOiUGZvNmIsIiTDJiOi42bpdWZyJye; aliyungf_tc=e078692d183ff55988f8027aaca99964b28e16b4bf3c33e270f6f52cea6ad412; oklink.unaccept_cookie=1; traceId=2930125696380770001; okg.currentMedia=md; _monitor_extras={"deviceId":"UN4mJ4deE_gvztALcGaOpD","eventId":83,"sequenceNumber":83}; ok-ses-id=1XGF78AMkvg6+/f5CjuUOivADeLu+nrmSSPmNZvbUAunNbM2FfRw899w3/9FXS4IxrpqMRUFODlOSsuPqttH2BHVOOvGxtHx5vV4E9/rM0OeItSvDxr2EwOQ3YmWlQll'
  }
});
console.log(data.data);
