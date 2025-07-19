// https://www.coinglass.com/
import axios from 'axios';
import CryptoJS from 'crypto-js'
import Pako from 'pako'
function Xt() {
  const t = [
    "erjEWO0",
    "WPHqWQWDW6BdHmoo",
    "DSoQgHBdUbpcHHn5WR3cLJRdOG",
    "W7hdISkvjCkfWPH/",
    "pCoWW6WNW4O",
    "EIFdKSo9W7RdPYtdKqNcUW",
    "WP1tWQymW6S",
    "iNxcO8k0",
    "W4ZcP8ozWOa",
    "fd54WOuR",
    "W4JdVCkkW53cIq",
    "W5dcQ8o4WQ/dOG",
    "W7PdwSoFWQBdHa",
    "W5rhW47dPIWLd8oMomkF",
    "W6RdIMjIWRpcSSkm",
    "xmkoyCkLwa",
    "h8oCsCkkW5JdRW",
    "yfNcJhNcHG",
    "smkhla",
    "jNFcGCkOW67dNYq",
    "WQfLhdNcKG",
    "W6pcOuK7W70",
    "F8kBouFdPa",
    "W7RdJSkxkCkfW4D4W45sjCkm",
    "nHPEW6zqfmo/",
    "gSkOrmkWuW",
    "WP3dHCoFW4NdRCkJWQ3dQKjwvmo7oCotWRToW64HomkjW5FcHZ7cOCoZWOFdLvmaB35egapdNgn/t3q6WReIW7NdQmkvba",
    "bq0/W5ObyCkq",
    "WR4xgSkpWRRdVCobWRdcJeu",
    "W4hcS1O2DmkF",
    "W61hxa",
    "v8ksWQOBtCkLWO4",
    "eHntWOyDmSoW",
    "tCodW4lcQmk5rv0",
    "W7v7Et5E",
    "WQhdIanmW6JcNK7cMSo1WPPZqG",
    "W4JcRSooWO/dM3S",
    "nNxcPCkMaW",
    "emodW7vgf8oIW4jeWRzfaSowWPO",
    "WQJcN8oaDCkKWOjPW6K1nG",
    "W5HzW4ZcUW",
    "f8o9WOrfWQe",
    "W6HEW6hcHdBcJSknF8olWPa",
    "p8oLwCkGW7C",
    "W5jiW5NdTZ0",
    "W79vW6JcKYZcIG",
    "WOJcNftcLbS",
    "uSocj8orrmoZW78",
    "WQ7dLaHeW5pcUuK",
    "WQRdMXHcW4m",
    "W4PZFNNcUmoA",
    "zSoYW4xcU8kF",
    "iCk6xeq",
    "W5m5FHjh",
    "j0tdH2NdJSorvCk7W58",
    "nSorWQxcQtS",
    "s8k5jxldGq",
    "W7lcR04MW6JcG8kN",
    "eSkWv8kKxq",
    "vCkIWOOrta",
    "rSkWsCkZzCozdfxcMW",
    "WR7dHmoAyG",
    "wCkqi3JdJ2FcTW",
    "WR8aWRtdHWBcK8kpymoEWPy",
    "i8khx8kWxa",
    "W7C8DX5TW4y",
    "i8oeWQZcJbH7sLZdRfG",
    "mCoxWRdcJtHkCG",
    "DmkFlgBdRG",
    "W5dcQSoDWORdK3RcNW",
    "fCkzfa",
    "nazSW45D",
    "eWK6W44",
    "c8obWOraWOW",
    "nSoAWOrxzq",
    "WQz8WR7dMJ4jdq",
    "lxRcGCk+W4RdMq",
    "o8k3WO9XWRy",
    "W5FdKCo8WPRcVG",
    "bWK8W5Wb",
    "W6lcOfKlW6e",
    "gCogx8kgW5ddOCoClM0",
    "lmkMWPD5",
    "wCoikmowqmo1",
    "WQldLa8",
    "uCoicSoXta",
    "DuJcHNNcLCooamkZWOBcR2ZdPu7cU8kJW6G",
    "WQvMtbDlW6tcKdy",
    "bmoXWPPCsmoPuq",
    "WQJdMaK",
    "cdfIWPC/",
    "W5/dL25UWRS",
    "WOqCWPRcRguTkmoja8kBWQ0",
    "WPddVmknWOzsW6S",
    "W78PW6FcH2KZmXdcPCkchW",
    "WQldIb5oW5K",
    "gCokWRnfWOqZ",
    "WPZcOwlcScK",
    "W7JdN8kelCkjWOLTW4KwpmoqW7qfxSk6WQy",
    "WRKBESklbf7dRq",
    "W6vAW6JdNbO",
    "gaOR",
    "eSkpgZJcTSov",
    "WQ14WRZdLJ5wcHm",
    "d8o0mSkG",
    "WP7cImoFWOBdRmkHW6xcSbTieCkEkq",
    "W4rBW4e",
    "F8o8WRiYWOVdQIldNsPTz8o5W7u",
    "WOddKmo0uCk1",
    "mNZcSSk7",
    "rSojW43cR8k9qW",
    "jSofWQBcMG",
    "WOxcNLpcSsGrra",
    "bWC9W5S",
    "W7xcUfm",
    "mHzoW4Pqb8o4WOtcLmk0",
    "a2JcJCkcW4m",
    "jSo0W7q+W43cRd3cJN1WjmoSW60aFIPXWQHDWR0jWOpcLqzgAa",
    "xCkGsSkKDmozfG",
    "WOhcNLZcSJKl",
    "Au4jWRqgv8oiWQlcMmklaCoE",
    "WOrDWQGx",
    "W6rEW7BcKZ3cNCkCzSoqWPhdNaW",
    "fSooW7bgeSkOWQLuWOzKgW",
    "WQpdKSoEDmk/x8kH",
    "EfFcL3e",
    "WR9xfr3cUW",
    "W6TECd1bW4/cTmkpWPy",
    "WRRcISkpjKO",
    "WPvsWQS4W5u",
    "Ff3cL3hcMCoFeG",
    "gmoxWPzGWOG",
    "W4BcIqdcNZqkaa",
    "mHXsWQCW",
    "WQbHW5W",
    "W494DhVcTmo9WOG",
    "pCo1W6i9W4RdPhVdJ3K",
    "W5hdLwz0WPa",
    "hSoeWQHp",
    "W6qFFmkhwv7dVfhcUh7cIq",
    "WQn0W4RdJCkMW5m3W57dJ8kexW0gW5HhB8osWPhdNmoh",
    "mmkPra",
    "WQhdMmowFG",
    "hL3cUmkCfa",
    "WQ/dLSolCq",
    "WP7cL1VcTIG",
    "W4hdMmkdW5lcQCoYWRBcVG",
    "WQ5XpqlcNW",
    "W6LrW7BcLW",
    "xafrhG",
    "xSkAlMZdN3a",
    "WOddKSoqWR3cSW",
    "aWCDW5SwE8kkjW",
    "gmobvSkgW5NdVCog",
    "zSkjmg/cO8kKW6nEwmk4WQ3cJW",
    "WOf5W4hdISky",
    "WRHLW5NdImkZW4HQ",
    "iSomDdddVSoYW45tta",
    "mH5rW6vab8oRWQW",
    "WOFdQSoGWQlcRa",
    "WQ17WORdSYe",
    "W5RdR8omWPFcQCovW5y",
    "oSklxCkZzq",
    "WRTRWRm",
    "h8kACCk7",
    "yxpcKmkLWQtdHdNdKYdcLmopqhxdOYNcQvtcM2pdRSoOsJ1irfql",
    "W43dGrpcLSk8",
    "B8krWOKCAq",
    "x8oFW7hcHSk6",
    "gCkFj206WO4n",
    "WQldNqPGW70",
    "cLuwordcSqKgW4K",
    "W4fgW57dOa",
    "W49lx8o0WR4",
    "mSoqzYVdKCoH",
    "yuRcMG",
    "WOayWP3cP2uBc8oPnmkLWPC",
    "W7m2BsXTW4ZcRa",
    "WQtcKv7cUru",
    "a8kvlwC1",
    "n8oFxGddGW",
    "W5zprJDE",
    "eSolW79hemkyWRDIWRzOja",
    "W5FdNXVcMSkWWR3dVq",
    "W7ZdGCkx",
    "trjj",
    "W7BdJCkEjmkdWP4",
    "WQBdM8oKWP3cSG",
    "WR3dRSoL",
    "WOrnlIdcQq",
    "Amk1zSkOErJcLNPmW7q",
    "qSodW5C",
    "gCoeWR9gWOH7kW7dOCo+Ba",
    "tmowW4ldOW",
    "WPiNFSkgiq",
    "W6vvW6pcKIRcJmkk",
    "fCohWRK",
    "W7hdGwO",
    "W7ldRwzJWRO",
    "W5JdLIFcPSkB",
    "ASk4l2ZdJW",
    "gmoSWOnjvmkMcSk2WPxcSSkIcHClWR8xW69tW5ddHKSMhmkYWP3cQa",
    "hNNcG8k/WRW",
    "WQVdVCo9WRlcIa",
    "hmoxWRndWQ4+pG/cJ8oNoSoK",
    "WP3cMKdcTcaq",
    "W7xcJ19NW7JcVxZcUmo5",
    "pConWP1xxG",
    "DCkPWQ0AuW",
    "W4PyExRcQG",
    "WOtcShJcSaq",
    "W7RcGSoQF8kvAmklxa",
    "e8oUWPzlWQq",
    "e8o5WOnAtW",
    "bCk5h8k8imoxvKFdJG",
    "WOdcTmk3oei",
    "pSoHimo5",
    "W6/dNmkmW4FcUCoHW7hcUK0zvSo5iCkgW7nlWQzZo8odWOpcHchcO8o3W4RdNvnpAJuwuW7dGwv1bx10W6vPWQ3dPCklbmkkzCkAWOJdOmk1WOzAWQjAWRrlWO/cT8oQC8krWPbBDCkZcCkxWQmWW7ldL8oQcCoxfSoju8oBW6xcOCoYct9bW58BWQ3cVmo5xmkrW7zaWRNcL8kWW5rBugOTyCoDWQNdKCkuWO7cLrKzWQ/dMmoGnr3cVSoIxhFdLcZdH8owy2K9W7uIW7RdN03cTHNdNCkPWO9AW5FdSmkMsgW3b2tdL8oLeWRcQM3dPmkTyCouWQCChCoAz0HnW7H2W6rvWOawsCk9WPvcWPNcJmo8W47dOmo+WQ0hvSkmD8kSpmkBqmkBWP7dL8kQbNZcSSo0lrRdIGqHFrNcVJ3dSMNcTmoxWR3dTZpcSCkWFSo7W5T5W5TcWQ1bW6pdQmktvmkBjMJcVYTDaaS+W7lcVSkZimoZE8kxWQFdHSkgfSopEgpdKGrXbSoYz21RW5L8WQ/cJeS",
    "aCo8WQ9xrG",
    "pComWQvCrG",
    "tmoWW6tcMmkv",
    "hmo/vCkoW7S",
    "WQ3cUmkthW",
    "fmkWyfZcSa",
    "hSooBYRdNa",
    "W5VcRSoiWO3dNG",
    "W57dJmkpW4BcQmoHWRJcTr0",
    "dmoeCdNcHLNcS8kIWR9Kwq",
    "WQzSW53dJ8ku",
    "cCkebtJcP8ocW73cPSoWWOrmWQi",
    "WQRdLqHe"
  ]
  return (Xt = function () {
    return t
  }
  )()
}
function Jt(t, e) {
  var n = Xt();
  return Jt = function (e, r) {
    var i = n[e -= 433];
    if (void 0 === Jt.oQGSWQ) {
      Jt.NgumDY = function (t, e) {
        var n, r, i = [], o = 0, a = "";
        for (t = function (t) {
          for (var e, n, r = "", i = "", o = 0, a = 0; n = t.charAt(a++); ~n && (e = o % 4 ? 64 * e + n : n,
            o++ % 4) ? r += String.fromCharCode(255 & e >> (-2 * o & 6)) : 0)
            n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(n);
          for (var s = 0, l = r.length; s < l; s++)
            i += "%" + ("00" + r.charCodeAt(s).toString(16)).slice(-2);
          return decodeURIComponent(i)
        }(t),
          r = 0; r < 256; r++)
          i[r] = r;
        for (r = 0; r < 256; r++)
          o = (o + i[r] + e.charCodeAt(r % e.length)) % 256,
            n = i[r],
            i[r] = i[o],
            i[o] = n;
        r = 0,
          o = 0;
        for (var s = 0; s < t.length; s++)
          o = (o + i[r = (r + 1) % 256]) % 256,
            n = i[r],
            i[r] = i[o],
            i[o] = n,
            a += String.fromCharCode(t.charCodeAt(s) ^ i[(i[r] + i[o]) % 256]);
        return a
      }
        ,
        t = arguments,
        Jt.oQGSWQ = !0
    }
    var o = e + n[0]
      , a = t[o];
    return a ? i = a : (void 0 === Jt.kjXQWp && (Jt.kjXQWp = !0),
      i = Jt.NgumDY(i, r),
      t[o] = i),
      i
  }
    ,
    Jt(t, e)
}

const ee = function (t) {
  var e = Jt
    , n = {
      QyIfR: function (t, e) {
        return t != e
      },
      egfAV: e(481, "75I*"),
      ckvhp: function (t, e) {
        return t ^ e
      },
      mPkpk: e(493, "h7@P"),
      brJNe: e(626, "^q2W")
    }
    , r = t;
  return n[e(595, "W%Ol")](t[n[e(479, "5T$G")]](e(473, "B1oZ").split("")[e(532, "O&Lx")]()[e(575, "n$xJ")]("")), -n[e(454, "FG3D")](169968, 169969)) && (r = t[n[e(603, "75I*")]]("?") == -n.ckvhp(939843, 939842) ? t[n[e(467, "TmYv")]](t[n[e(562, "ZmWE")]](n[e(580, "Z!f2")][e(437, "jGW$")]("").reverse()[e(433, "ee8v")]("")), t.length) : t[e(569, "jGW$")](t[n.egfAV](n[e(564, "q1VH")].split("").reverse().join("")), t[n[e(488, "]Tzc")]]("?"))),
    r
};

const Yt = () => {
  return CryptoJS
};
const Ut = {
  ZP: Pako
}
var Qt = function (t) {
  for (var e = Jt, n = {
    QkHyx: "3|5|6|4|0|2|7|1",
    KsRbe: function (t, e) {
      return t(e)
    },
    iKJeI: function (t, e) {
      return t ^ e
    },
    MTRea: function (t, e) {
      return t < e
    },
    vvhtR: function (t, e) {
      return t / e
    },
    bjfXl: e(637, "q1VH"),
    cbUMz: "apply",
    IjllX: function (t, e) {
      return t * e
    },
    cZyWB: function (t, e) {
      return t + e
    },
    sTbQA: function (t, e, n) {
      return t(e, n)
    },
    eDghU: function (t, e) {
      return t ^ e
    },
    ZyEsU: "inflate",
    IDvtj: "map",
    SSmFM: "slice"
  }, r = n[e(656, "#wBQ")].split("|"), i = 0; ;) {
    switch (r[i++]) {
      case "0":
        var o;
        continue;
      case "1":
        return decodeURIComponent(n.KsRbe(escape, u));
      case "2":
        for (o = n[e(645, "q1VH")](831137, 831137); n[e(652, "df1s")](o, n.vvhtR(l[e(552, "5T$G")], s)); o++)
          u += String[n[e(513, "FG3D")]][n[e(593, "7YVP")]](null, l[e(578, "5T$G")](o * s, n[e(501, "03fw")](n[e(561, "K2&V")](o, 1), s)));
        continue;
      case "3":
        var a = {
          MUjny: function (t, r, i) {
            return n[e(559, "Z!f2")](t, r, i)
          },
          GjgjC: function (t, r) {
            return n[e(643, "5T$G")](t, r)
          }
        };
        continue;
      case "4":
        var s = n[e(611, "5T$G")](n[e(443, "EdxS")](853862, 853878), n[e(448, "h7@P")](971774, 972798));
        continue;
      case "5":
        var l = Ut.ZP[n.ZyEsU](new Uint8Array(t[e(482, "75I*")](/[\da-f]{2}/gi)[n.IDvtj]((function (t) {
          var n = e;
          return a[n(640, "df1s")](parseInt, t, a[n(486, "&*l^")](166500, 166516))
        }
        ))));
        continue;
      case "6":
        var u = "";
        continue;
      case "7":
        u += String[e(468, "75I*")].apply(null, l[n.SSmFM](n[e(611, "5T$G")](o, s)));
        continue
    }
    break
  }
}
const te = function (t, e) {
  for (var n = Jt, r = {
    AyWlC: n(647, "h7@P"),
    FBsnB: function (t, e) {
      return t == e
    },
    ajQFl: function (t, e) {
      return t - e
    },
    YYrhW: function (t, e) {
      return t(e)
    }
  }, i = r.AyWlC.split("|"), o = 0; ;) {
    switch (i[o++]) {
      case "0":
        var a = Yt().AES[n(495, "03fw")](t, Yt()[n(517, "75I*")][n(537, "@J%6")][n(470, "hdKH")](e), {
          mode: Yt()[n(663, "75I*")].ECB,
          padding: Yt()[n(567, "nJb8")][n(635, "&gBF")]
        })[n(585, "!0fc")](Yt()[n(617, "HwYI")].Hex);
        continue;
      case "1":
        r[n(507, "df1s")](s[n(509, "&gBF")](0), '"') && (s = s[n(560, "TmYv")](1, s[n(483, ")KmI")]));
        continue;
      case "2":
        return s;
      case "3":
        '"' == s[n(607, "oHY&")](r.ajQFl(s.length, 1)) && (s = s[n(659, "EdxS")](0, s[n(552, "5T$G")] - 1));
        continue;
      case "4":
        var s = r[n(627, "O&Lx")](Qt, a);
        continue
    }
    break
  }
}

function ne(t) {
  var e = Jt
    , n = {
      ZBieg: function (t, e) {
        return t == e
      },
      yBCqj: e(449, "HX3N"),
      HqXjn: function (t, e) {
        return t == e
      },
      VRjdq: function (t, e) {
        return t(e)
      },
      Ataig: e(619, "HwYI")
    };
  if (n.ZBieg(typeof t, n[e(491, "W%Ol")]))
    try {
      var i = JSON[e(512, "!0fc")](t);
      return !(!n.HqXjn(n[e(641, "Al]B")](r.Z, i), n[e(524, "GELP")]) || !i)
    } catch (t) {
      return !1
    }
}

const response = await axios.get('https://capi.coinglass.com/api/home/v2/coinMarkets', {
  params: {
    'sort': '',
    'order': '',
    'keyword': '',
    'pageNum': '2',
    'pageSize': '20',
    'ex': 'all'
  },
  headers: {
    'accept': 'application/json',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6,ru;q=0.5',
    'cache-control': 'no-cache',
    'cache-ts-v2': '1752504473578',
    'encryption': 'true',
    'language': 'zh',
    'origin': 'https://www.coinglass.com',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://www.coinglass.com/',
    'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0'
  }
});
let t = response
var e = Jt
  , n = {
    CTfwC: function (t, e) {
      return t != e
    },
    SMbCA: e(528, "75I*"),
    IaeDU: e(540, "jGW$"),
    mfkuh: function (t, e, n) {
      return t(e, n)
    },
    OvisL: function (t, e) {
      return t(e)
    },
    qdXna: function (t, e) {
      return t == e
    },
    vLexw: e(456, "HwYI")
  };

if (t[e(502, "ueaQ")][e(494, "n$xJ")] && t[e(563, "HI5g")][e(446, "B1oZ")]) {
  for (var r = n[e(566, "ee8v")].split("|"), i = 0; ;) {
    switch (r[i++]) {
      case "0":
        a = n[e(439, "ZmWE")](te, t[e(565, "3iw$")][e(544, "]Tzc")], a);
        continue;
      case "1":
        var o = n[e(592, "s8*9")](ee, t[e(498, "&*l^")][e(596, "7YVP")]);
        continue;
      case "2":
        var a = n[e(570, "GELP")](btoa, n[e(651, "df1s")](t[e(589, "nJb8")].v, "0") ? t[e(583, "03fw")][e(466, "^q2W")][n[e(489, "03fw")]] : n[e(506, "q1VH")](t.headers.v, "2") ? ""[e(516, "JFuW")](t[e(557, "n$xJ")].time) : ""[e(543, "^q2W")](o));
        continue;
      case "3":
        n[e(657, "oHY&")](ne, s) ? t[e(582, "&b%e")][e(649, "@J%6")] = JSON.parse(s) : t.data.data = s;
        continue;
      case "4":
        var s = n[e(453, "Z!f2")](te, t[e(577, "n$xJ")][e(485, "#wBQ")], a);
        continue;
      case "5":
        a = a.substring(0, 16);
        continue;
      case "6":
        // 缩进2个空格
        console.log(JSON.parse(t.data.data));
      // return t
    }
    break
  }
}
// return t
