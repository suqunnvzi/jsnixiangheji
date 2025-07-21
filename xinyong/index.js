// https://credit.hd.gov.cn/xyxxgs/
import axios from 'axios';
import CryptoJS from 'crypto-js';
import smCrypto from 'sm-crypto';
import jsbn from 'jsbn';
import { T } from './utils.js';
import { TextDecoder } from 'util';
const ls = {
  sm2: smCrypto.sm2,
  sm3: smCrypto.sm3,
  sm4: smCrypto.sm4
};
var N = T;
const Ae = jsbn;
const Ai = CryptoJS;
const H = {
  uuid: function () {
    return N.create().toString().replace(/-/g, "")
  },
  timeStamp: function () {
    return (new Date).getTime()
  },
  getSortString: function (t) {
    var e = function (t) {
      var e = Object.keys(t).sort()
        , r = {};
      return e.forEach((function (e) {
        r[e] = t[e]
      }
      )),
        r
    }(t);
    return O(e)
  },
  getQueryString: function (t) {
    var e = "";
    for (var r in t) {
      var n = t[r];
      void 0 !== n && (e = e + r + "=" + encodeURIComponent(n) + "&")
    }
    return e.length > 0 && (e = e.substring(0, e.length - 1)),
      e
  },
  isFunction: function (t) {
    return t && "function" == typeof t
  },
  isObject: function (t) {
    return t && "[object Object]" === Object.prototype.toString.call(t)
  }
};
const P = {
  "NEUQ_GATEWAY_VERSION": "1.0",
  "REQUEST_MODE": {
    "COMMON": "COMMON",
    "SECURITY": "SECURITY"
  },
  "SIGN_TYPE": {
    "RSA2": "RSA2",
    "SM2": "SM2"
  },
  "ENCRYPT_TYPE": {
    "NONE": "NONE",
    "AES": "AES",
    "SM4": "SM4"
  },
  "BASE_URL": "",
  "TIMEOUT": 6000,
  "CONTENT_TYPE": {
    "APPLICATION_JSON": "application/json",
    "MULTIPART_FORM_DATA": "multipart/form-data"
  }
}
const O = function (t) {
  var e = "";
  for (var r in t) {
    var n = t[r];
    "" !== n && null != n && (e = "".concat(e).concat(r, "=").concat(n, "&"))
  }
  return e.length > 0 && (e = e.substring(0, e.length - 1)),
    e
}
function Xi(t) {
  return new Ae.BigInteger(t, 10).toString(16)
}
function Yi(t) {
  return new Ae.BigInteger(t, 16).toString(10)
}
function $i(t) {
  if (t.length >= 64)
    return t;
  var e = 64 - t.length;
  return "0".repeat(e) + t
}
const Zi = function (t) {
  var e = t.indexOf(",");
  if (e > -1) {
    var r = "".concat(Xi(t.slice(0, e)))
      , n = "".concat(Xi(t.slice(e + 1)));
    return "".concat($i(r)).concat($i(n))
  }
  return "".concat(Yi(t.slice(0, t.length / 2)), ",").concat(Yi(t.slice(t.length / 2)))
}
var kr = ls
var Vr = {
  generateKeyPairHex: kr.sm2.generateKeyPairHex,
  doEncrypt: kr.sm2.doEncrypt,
  doDecrypt: function (t, e, r) {
    return void 0 === r && (r = 0),
      t = t.toLowerCase().replace(/^04/, ""),
      kr.sm2.doDecrypt(t, e, r)
  },
  signature: function (t, e, r, n) {
    return kr.sm2.doSignature(t, e, {
      hash: !0,
      publicKey: r,
      userId: n
    })
  },
  doSignature: kr.sm2.doSignature,
  doVerifySignature: kr.sm2.doVerifySignature,
  getPoint: kr.sm2.getPoint
}
const Qi = function (t) {
  var e = Ai.lib.WordArray.create(t);
  return Ai.MD5(e).toString(Ai.enc.Hex)
}
const uo = function (t, e) {
  var r = Object.assign({}, t)
    , n = {
      version: P.NEUQ_GATEWAY_VERSION,
      appId: e.appId,
      signType: e.signType ? e.signType : P.SIGN_TYPE.SM2,
      encryptType: e.encryptType ? e.encryptType : P.ENCRYPT_TYPE.NONE,
      nonceStr: H.uuid(),
      timestamp: H.timeStamp()
    }
    , i = H.isObject(r.params) ? H.getQueryString(r.params) : null;
  if (i && (null != r.headers && "1" === r.headers["C-GATEWAY-QUERY-ENCRYPT"] && (n.encryptType === P.ENCRYPT_TYPE.SM4 ? i = ls.sm4.encrypt(i, e.encryptKey) : n.encryptType === P.ENCRYPT_TYPE.AES && (i = us(i, e.encryptKey)),
    r.params = i),
    n.queryContent = i),
    H.isObject(r.data)) {
    var s = JSON.stringify(r.data);
    n.encryptType === P.ENCRYPT_TYPE.SM4 ? s = function (t) {
      if ("string" != typeof t || !/^[0-9a-fA-F]*$/.test(t))
        throw new Error("Invalid hex string");
      t.length % 2 != 0 && (t = "0" + t);
      for (var e = new Uint8Array(t.length / 2), r = 0; r < t.length; r += 2)
        e[r / 2] = parseInt(t.slice(r, r + 2), 16);
      return e
    }(kr.sm4.encrypt(s, e.encryptKey, {
      output: "string"
    })) : n.encryptType === P.ENCRYPT_TYPE.AES && (s = hs(s, e.encryptKey)),
      r.data = s,
      n.bizContent = Qi(s)
  }
  var a = H.getSortString(n)
    , o = "";
  switch (n.signType) {
    case P.SIGN_TYPE.SM2:
      o = Zi(o = Vr.signature(a, e.appSignPrivateKey, e.appSignPublicKey, e.appId));
      break;
    case P.SIGN_TYPE.RSA2:
      o = Vr.signature(a, e.appSignPrivateKey, so.alg.SHA256withRSA)
  }
  return n.sign = o,
    n.bizContent && delete n.bizContent,
    r.params = n,
    r
};
const t = {
  "headers": {
    "Accept": "application/json, text/plain, */*",
    "Content-Type": "application/octet-stream",
    "C-GATEWAY-QUERY-ENCRYPT": "1",
    "x-gateway-body": "blob"
  },
  "params": {
    "param": "",
    "page": 2,
    "size": 10
  },
  data: void 0
}
const keyObj = {
  "appId": "27IGtFrNFDc",
  "signType": "SM2",
  "encryptType": "SM4",
  "appSignPrivateKey": "7faa61bb9051707ad9d9d2c417d61e038a3af871a61c8da534a9061ac1e51c32",
  "appSignPublicKey": "040f5940c99c46ee9e438487c6a41d880b93f0804ea0e5ef53a062bb08203fc2a675b3d2b7a9aeb1862bb1b8fa5d17a40e300cbbe9a470ee3bf89b4ccb1c899719",
  "encryptKey": "dbb78b8b64d640bb130255c69e959973",
  "platformPublicKey": "0475ed079f423c14c6cc2fec93ce296cefc96c4be11af343c3f654f99140f8d6861589308929156ae62a74955c8bb2f4af540a45c7d1208f2ca61b264b4f383e27"
}
const uoObj = uo(t, keyObj);
// console.log(uoObj);
(async () => {

  const getXinyong = async () => {
    try {
      const response = await axios.get('https://credit.hd.gov.cn/zx_website/website/sgs/xzxkfr', {
        params: uoObj.params,
        responseType: 'arraybuffer',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Accept-Language': 'zh-CN,zh;q=0.9',
          'C-GATEWAY-QUERY-ENCRYPT': '1',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
          'Pragma': 'no-cache',
          'Referer': 'https://credit.hd.gov.cn/xyxxgs/',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-gateway-body': 'blob',
          // 'Cookie': '_gscu_2016493642=53083840vq4mp286; _gscbrs_2016493642=1; _gscs_2016493642=5308384085grvi86|pv:1'
        }
      });
      // console.log(response.data);
      return response;
    } catch (error) {
      // console.log(error.message);

    }
  }
  const res = await getXinyong()
  console.log(res.data);
  const D = [
    "body",
    "code",
    "message",
    "nonceStr",
    "requestId",
    "subCode",
    "subMessage",
    "signed"
  ]
  const Ri = String.fromCharCode.bind(String)
  const Oi = function (t) {
    return t.replace(/[^A-Za-z0-9\+\/]/g, "")
  }
  const Mi = function (t) {
    return Oi(t.replace(/[-_]/g, (function (t) {
      return "-" == t ? "+" : "/"
    }
    )))
  }
  const Li = function (t) {
    return atob(Oi(t))
  }
  const qi = function (t) {
    return new Uint8Array(Li(t).split("").map((function (t) {
      return t.charCodeAt(0)
    }
    )))
  }
  
  const Di = new TextDecoder("utf-8", {
    fatal: false,
    ignoreBOM: false
  });
  const Ki = function (t) {
    return Di.decode(qi(t))
  }
  const Ui = function (t) {
    return Ki(Mi(t))
  }
  const Hi = function (t) {
    return btoa(t)
  }

  const ji = function (t) {
    for (var e = [], r = 0, n = t.length; r < n; r += 4096)
      e.push(Ri.apply(null, t.subarray(r, r + 4096)));
    return Hi(e.join(""))
  }
  const _i = function (t) {
    return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? function (t) {
      return t.replace(/=/g, "").replace(/[+\/]/g, (function (t) {
        return "+" == t ? "-" : "_"
      }
      ))
    }(ji(t)) : ji(t)
  }
  const Wi = function (t) {
    return Ui(_i(t))
  }
  function ao(t, e) {
    var r = D.slice(1)
      , n = {};
    n.body = Qi(t.body),
      r.forEach((function (e) {
        n[e] = Wi(t[e])
      }
      ));
    var i = n.signed
      , s = function (t, e) {
        var r = {};
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (n = Object.getOwnPropertySymbols(t); i < n.length; i++)
            e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]])
        }
        return r
      }(n, ["signed"])
      , a = H.getSortString(s);
    switch (e.signType) {
      case P.SIGN_TYPE.SM2:
        return [Vr.doVerifySignature(a, Zi(i), e.platformPublicKey, {
          hash: !0,
          userId: e.appId
        }), n];
      case P.SIGN_TYPE.RSA2:
        return [so.doVerifySignature(a, i, e.platformPublicKey, so.alg.SHA256withRSA), n]
    }
    return [!1, null]
  }
  var oo = function (t, e) {
    var r = t.data.buffer
      , n = new DataView(r)
      , i = new Uint8Array(r)
      , s = {}
      , a = 40;
    D.forEach((function (t, e) {
      var r = n.getInt32(4 * e);
      s[t] = i.subarray(a, a + r),
        a += r
    }
    ));
    var o = ao(s, e)
      , u = o[0]
      , h = o[1];
    if (!u)
      return Promise.reject(new Error("验签失败"));
    var c = "{}";
    switch (e.encryptType) {
      case P.ENCRYPT_TYPE.SM4:
        c = kr.sm4.decrypt(function (t) {
          if (!(t instanceof Uint8Array))
            throw new Error("Invalid Uint8Array");
          for (var e = "", r = 0; r < t.length; r++) {
            var n = t[r].toString(16);
            1 === n.length && (n = "0" + n),
              e += n
          }
          return e
        }(s.body), e.encryptKey, {
          output: "string"
        });
        break;
      case P.ENCRYPT_TYPE.AES:
        c = cs(s.body, e.encryptKey)
    }
    return delete t.config.responseType,
      Promise.resolve(Object.assign(Object.assign({}, t), {
        headers: Object.assign(Object.assign({}, t.headers), {
          "Content-Type": P.CONTENT_TYPE.APPLICATION_JSON
        }),
        data: Object.assign(Object.assign({}, h), {
          body: c
        })
      }))
  }
  console.log(typeof Buffer.from(res.data));
  const result = await oo(res, keyObj);
  console.log(JSON.parse(result.data.body));
})()