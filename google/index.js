import axios from 'axios';
const text = '[[["MkEWBc","[[\"非常满意。\",\"zh-CN\",\"en\",1],[]]",null,"generic"]]]&';
// [[["MkEWBc","[[\"非常满意。\",\"zh-CN\",\"en\",1],[]]",null,"generic"]]]


try {
  const response = await axios.post(
    'https://translate.google.com/_/TranslateWebserverUi/data/batchexecute',
    'f.req=%5B%5B%5B%22MkEWBc%22%2C%22%5B%5B%5C%22%E9%9D%9E%E5%B8%B8%E6%BB%A1%E6%84%8F%E3%80%82%5C%22%2C%5C%22zh-CN%5C%22%2C%5C%22en%5C%22%2C1%5D%2C%5B%5D%5D%22%2Cnull%2C%22generic%22%5D%5D%5D&',
    {
      params: {
        'rpcids': 'MkEWBc',
        'source-path': '/',
        'f.sid': '-8985640002072474993',
        'bl': 'boq_translate-webserver_20250716.06_p0',
        'hl': 'zh-CN',
        'soc-app': '1',
        'soc-platform': '1',
        'soc-device': '1',
        '_reqid': '2038840',
        'rt': 'c'
      },
      headers: {
        'sec-ch-ua-full-version-list': '"Not)A;Brand";v="8.0.0.0", "Chromium";v="138.0.7204.158", "Google Chrome";v="138.0.7204.158"',
        'sec-ch-ua-platform': '"Windows"',
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
        'sec-ch-ua-bitness': '"64"',
        'sec-ch-ua-model': '""',
        'sec-ch-ua-mobile': '?0',
        'X-Same-Domain': '1',
        'sec-ch-ua-wow64': '?0',
        'sec-ch-ua-form-factors': '"Desktop"',
        'X-Goog-BatchExecute-Bgr': '[";S1W4VQ3QAAZq8xlESvNfuCFz5n2H5TAmADQBEArZ1Alwf_vzp3lLKGPaO-LnmDpRvahNrxGXoQ4SQ-dQcN0XYN22s-X3otphARQkLVzeHwAAACtPAAAAAnUBB2MAQWsojJERdsJp7f87acUWzFqVYwDAMVVbLxuE6Q_KmChlgjgXgdLOnIth0exky5Mx_H1lpH6D8qXvph2XLwpicxUohAM75kOPE61QQko41wn6sLh4GRp5JEt1HktiVlkulBDeIuYwgMeV2oSIw8135ITUrkG2uAWpB_wNbN0lOu8REzpEYAwGpxqDqAn02bLrHs75zMt3Nel9o1vCA-GCjkoYBaArK5DvxjYp86P90JKWjWP78O2kyvi7pdDAxKOiiMf-84mf-m8EzG9chgPk9AtK50BmeON3bKgEXy_yxIWvYeUBTgasL2QUNvRMKM_jCdy2ilA6-d_kJD0z_TjhR9OHZW76GrY1l2JHktZYFCAUD-rX1140YjmsoErE45LBVN_Hc3vPJtgjMYYMutLuy7SUJfrqOTx8u_xpkH9o-Gst0ajWqfydRaQNVL31NLXDOfwNDRWZ7T4fTY0MO1poNz7nKNS3RQF9K19J9mZJPpRsVgJC3PmVR0gamUMB14qS_KFAbe82CboBAkf7W5RCX3z0okr6jp7EkD0x1sIc1UXJO6ve4KD9zm4X6dO0AOrSWaUKKgF3LaBAeAYIPzRXQAQeCxG5kOJmzDB4EhL7YpuWHIICC-QupPfRX06PYWLA8FkiUiW9Plw3P3TLolnHxneI-5ZmNTrOfjLkH8ikeEKOXoD8dLV7Ni4K_o88Q3IYQtJSidH_sPyI6ufFI1-1Zi2iLXlNG1XzXNMghaZZfkZ2dS5VjX-W0zJhskScDRrG16VhR-jLaS75IdpAX7v3VONkrQYYfl-ufs410GUxeoEzq-n0i9yRnox1ENScMnaMeQFvB5QBX_wpFPIpsJsxU-4Y0-0SRd6nITbptLpG5LmpvT4N5mhy6sk6KImdAZP_w4RnbnUytc3IWSE1rRgutqa_YgCgNlZMkz4PW2tr-vjfTNRsCuL0a1Aj967xBeOEfk8oHS0S1rIAAG3TBcreCa6wBRO57cy1sB4lrhvHjxqiux7P2hY2HfO-8CZeB9-Xspm7mLQqiJUH2JHO8j_6E_KJ82KVGVDCV4EvtSQundC9puBNPbrgqffL9bC1QpYuaHzP2EI670dI1UNe5oIKijAVnbbxfa6g2FStynqKNDfQnDTarmU-5sxXU1fiVbF4y3TsIk85ITifYMYkMKDTH6u5ocYVr4pHsWi2sQnL2mk",null,null,8,null,null,null,0,"2"]',
        'sec-ch-ua-arch': '"x86"',
        'sec-ch-ua-full-version': '"138.0.7204.158"',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Referer': 'https://translate.google.com/',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
        'sec-ch-ua-platform-version': '"19.0.0"'
      }
    }
  );

  console.log('响应数据:', response.data);
} catch (error) {
  console.log(error.message);
}

// [["wrb.fr","MkEWBc","[[null,[[[null,\"按要求完成调查、浏览广告\\u003cem\\u003e的\\u003c/em\\u003e任务即可获得奖励。\"],null,2,[1],\"按要求完成调查、浏览广告的任务即可获得奖励。\"]],null,[[[0,[[[null,22]],[true]]]],22],null,null,[\"按要求完成调查、浏览广告等任务即可获得奖励。\",\"zh-CN\",\"en\",true]],[[[null,null,null,null,null,[[\"Complete surveys, advertising browsing and other tasks as required to receive rewards.\",null,null,null,null,null,\"按要求完成调查、浏览广告等任务即可获得奖励。\",1]],null,null,null,[]]],\"en\",1,\"zh-CN\",[\"按要求完成调查、浏览广告等任务即可获得奖励。\",\"zh-CN\",\"en\",true]],\"zh-CN\"]",null,null,null,"generic"],["di",52],["af.httprm",52,"-6922304200556117179",0]]
// 25
// [["e",4,null,null,852]]