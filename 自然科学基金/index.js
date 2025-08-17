// https://kd.nsfc.cn/finalSearchList?s=%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0
import axios from 'axios';
import CryptoJS from 'crypto-js';
import util from 'util';

const response = await axios.post(
  'https://kd.nsfc.cn/api/baseQuery/completionQueryResultsData',
  {
    'complete': true,
    'fuzzyKeyword': '机器学习',
    'isFuzzySearch': true,
    'conclusionYear': '',
    'dependUnit': '',
    'keywords': '',
    'pageNum': 0,
    'pageSize': 100,
    'projectType': '',
    'projectTypeName': '',
    'code': '',
    'ratifyYear': '',
    'order': 'enddate',
    'ordering': 'desc',
    'codeScreening': '',
    'dependUnitScreening': '',
    'keywordsScreening': '',
    'projectTypeNameScreening': ''
  },
  {
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6,ru;q=0.5',
      'Authorization': 'Bearer false',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Content-Type': 'application/json;charset=UTF-8',
      'Origin': 'https://kd.nsfc.cn',
      'Pragma': 'no-cache',
      'Referer': 'https://kd.nsfc.cn/finalSearchList?s=%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36 Edg/139.0.0.0',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Microsoft Edge";v="139", "Chromium";v="139"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"'
    }
  }
);
// console.log(response.data);

function g(e) {
  var t = CryptoJS.enc.Utf8.parse("IFROMC86")
    , n = CryptoJS.DES.decrypt({
      ciphertext: CryptoJS.enc.Base64.parse(e)
  }, t, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
  });
  return JSON.parse(n.toString(CryptoJS.enc.Utf8))
}
const result = g(response.data);
console.log(util.inspect(result, { depth: null, showHidden: true, colors: true }));