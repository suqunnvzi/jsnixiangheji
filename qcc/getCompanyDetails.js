import axios from 'axios';
import { getCompany } from './getCompany.js';
import { JSDOM } from 'jsdom';
import vm from 'vm';
const company = await getCompany();

const getCompanyDetails = async () => {
  const result = await Promise.all(company.list.map(async item => {
    const response = await axios.get(`https://www.qcc.com/firm/${item.KeyNo}.html`, {
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
        'cookie': 'QCCSESSID=ec3a20bf81d4161bb41ca1128e; qcc_did=73a9caf9-527e-4527-841a-6754bdafac97; UM_distinctid=19840e8c18cf29-053cac17ced942-26011151-384000-19840e8c18d24dd; _c_WBKFRo=OroiZFjE4msVQ2xRmkcrJPMUdfDmn8Isk6yuUWNo; acw_tc=0a472f8117534982823074984e007cb1f445f15072cb8d7cce8f527fa9aa41; CNZZDATA1254842228=120410662-1753435652-https%253A%252F%252Fwww.google.com%252F%7C1753498341'
      }
    })

    return response.data;
  }))

  return result;
};
const companyDetails = await getCompanyDetails()
const dom = new JSDOM(companyDetails[0]);
const script = dom.window.document.querySelectorAll('script')[1];
const data = script.textContent;

var window = {};
var document = dom.window.document;
eval(data);
console.log(window.__INITIAL_STATE__.company.companyDetail);

// const sandbox = {};
// vm.createContext(sandbox);
// vm.runInContext(data, sandbox);

