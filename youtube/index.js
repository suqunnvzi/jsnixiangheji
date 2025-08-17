import axios from 'axios';
import { HttpsProxyAgent } from 'https-proxy-agent';
import util from 'util';
import fs from 'fs';
// 代理地址，可以是 http 或 https
const proxy = 'http://127.0.0.1:10809';

// 创建一个代理 agent
const httpsAgent = new HttpsProxyAgent(proxy);
const response = await axios.post(
  'https://www.youtube.com/youtubei/v1/search',
  {
    'context': {
      'client': {
        'hl': 'zh-CN',
        'gl': 'JP',
        'remoteHost': '2406:da14:19b7:9ace:dfe9:ca77:ab8a:3931',
        'deviceMake': '',
        'deviceModel': '',
        'visitorData': 'CgtZcTlhNU00VnJBdyjssofFBjIKCgJISxIEGgAgMQ%3D%3D',
        'userAgent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36,gzip(gfe)',
        'clientName': 'WEB',
        'clientVersion': '2.20250814.09.00',
        'osName': 'Windows',
        'osVersion': '10.0',
        'originalUrl': 'https://www.youtube.com/results?search_query=%23haka%E3%80%81%23Newzealand%E3%80%81%23Maori',
        'platform': 'DESKTOP',
        'clientFormFactor': 'UNKNOWN_FORM_FACTOR',
        'configInfo': {
          'appInstallData': 'COyyh8UGELjkzhwQ4M2xBRD7tM8cEPDizhwQro__EhDiys8cENbXzxwQzN-uBRCL4M8cEIGzzhwQibDOHBDy388cEMvRsQUQkd3PHBDJ968FELfq_hIQ8NTPHBCNzLAFEPWegBMQq_jOHBDmyc8cEM3RsQUQ9quwBRDbr68FEIKPzxwQgc3OHBCHrM4cEInorgUQ_sDPHBCHks4cEJi5zxwQk93PHBCmmrAFEOmIzxwQnNDPHBCZjbEFENfBsQUQs5DPHBD02c8cEOLUrgUQmZixBRDT4a8FEN68zhwQ_LLOHBC-irAFEJGM_xIQxcPPHBC72c4cEK7WzxwQx47PHBCIh7AFENr3zhwQrOHPHBCLgoATEJzXzxwQvdDPHBDu1c8cEKOvzxwQlP6wBRCd0LAFEL2ZsAUQvbauBRC52c4cEOevzxwQ06bPHBCWus8cEJilgBMQmNzPHCo8Q0FNU0p4VWtvTDJ3RE5Ia0JyaVVFclBRNWd1UDlBN3Ytd2JWX0FDMXpBYUhURExBZ3dUWUlRTWRCdz09MAA%3D',
          'coldConfigData': 'COyyh8UGEO26rQUQvbauBRDi1K4FEL6KsAUQndCwBRDP0rAFEOP4sAUQpL6xBRDXwbEFEIeSzhwQr6fOHBCRsc4cEPayzhwQ_LLOHBCBs84cEMrizhwQ__vOHBC0gs8cENaMzxwQx47PHBDVn88cENOmzxwQo6_PHBCWus8cEOC7zxwQ6L3PHBD3xM8cEPjGzxwQxM3PHBCc0M8cEPXRzxwQ2tPPHBCc188cEJ_XzxwQ1tfPHBD32c8cEPzZzxwQgtrPHBCX3M8cEJjczxwQkd3PHBCT3c8cENvdzxwQ5d3PHBDy388cEIvgzxwQzuDPHBCs4c8cENnizxwaMkFPakZveDI1ajNZRURmaVR5LW1tZmNtMWVId1I0a0pzVUNET1p0RHZvRUozSG1tTVl3IjJBT2pGb3gyM2ltcUw4YVlGcUZIZzJEYTV2bFlSRVhvVUFMd250THR6U3p5Mk5pdmEwQSqQAUNBTVNaZzB2dU4yM0FxUVpseC1vS3JVRXNoQ0RoWm9Rc0FEbURQa08xQVNTQXhTckhkb1JfaVBQQkFQV0FSVTltYkczSDRXa0JaR2NCYmlBQWdTbDBnYWhxQVNUalFXY2VfZUlCc2hhMEJybkk3Z0x2Y0FHTXJjb2tOOEcyYVFHQTkzVUJwZ040UTdGU2c9PQ%3D%3D',
          'coldHashData': 'COyyh8UGEhMzMzA1NzEzMjQwMDkzODg5NTU2GOyyh8UGMjJBT2pGb3gyNWozWUVEZmlUeS1tbWZjbTFlSHdSNGtKc1VDRE9adER2b0VKM0htbU1ZdzoyQU9qRm94MjNpbXFMOGFZRnFGSGcyRGE1dmxZUkVYb1VBTHdudEx0elN6eTJOaXZhMEFCkAFDQU1TWmcwdnVOMjNBcVFabHgtb0tyVUVzaENEaFpvUXNBRG1EUGtPMUFTU0F4U3JIZG9SX2lQUEJBUFdBUlU5bWJHM0g0V2tCWkdjQmJpQUFnU2wwZ2FocUFTVGpRV2NlX2VJQnNoYTBCcm5JN2dMdmNBR01yY29rTjhHMmFRR0E5M1VCcGdONFE3RlNnPT0%3D',
          'hotHashData': 'COyyh8UGEhMyOTAwNjgyNDExMzkxNjQ2OTI2GOyyh8UGKJTk_BIopdD9Eijamf4SKMjK_hIot-r-EijAg_8SKJGM_xIoro__EijHgIATKIuCgBMo9YqAEyjLkYATKMWXgBMotJuAEyi2n4ATKPuggBMouqKAEyjQo4ATKMikgBMozqSAEyiYpYATMjJBT2pGb3gyNWozWUVEZmlUeS1tbWZjbTFlSHdSNGtKc1VDRE9adER2b0VKM0htbU1ZdzoyQU9qRm94MjNpbXFMOGFZRnFGSGcyRGE1dmxZUkVYb1VBTHdudEx0elN6eTJOaXZhMEFCNENBTVNJUTBLb3RmNkZhN0JCcE5OOGdxNUJCVVgzY19DRE1hbjdRdll6UW1sd0FYV1Z3PT0%3D'
        },
        'userInterfaceTheme': 'USER_INTERFACE_THEME_DARK',
        'timeZone': 'Asia/Shanghai',
        'browserName': 'Chrome',
        'browserVersion': '139.0.0.0',
        'acceptHeader': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'deviceExperimentId': 'ChxOelV6T1RVME5qTXhNRGMzTkRNeE9UQTNPQT09EOyyh8UGGOyyh8UG',
        'rolloutToken': 'CNzM76rj6dKhShDI_fHh75GPAxib2fDi75GPAw%3D%3D',
        'screenWidthPoints': 1902,
        'screenHeightPoints': 264,
        'screenPixelDensity': 1,
        'screenDensityFloat': 1,
        'utcOffsetMinutes': 480,
        'memoryTotalKbytes': '8000000',
        'mainAppWebInfo': {
          'graftUrl': '/results?search_query=%23haka%E3%80%81%23Newzealand%E3%80%81%23Maori',
          'pwaInstallabilityStatus': 'PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED',
          'webDisplayMode': 'WEB_DISPLAY_MODE_BROWSER',
          'isWebNativeShareAvailable': true
        }
      },
      'user': {
        'lockedSafetyMode': false
      },
      'request': {
        'useSsl': true,
        'internalExperimentFlags': [],
        'consistencyTokenJars': []
      },
      'clickTracking': {
        'clickTrackingParams': 'CBMQ7VAiEwjBrLKM-pGPAxVwTPUFHVGDGnE='
      },
      'adSignalsInfo': {
        'params': [
          {
            'key': 'dt',
            'value': '1755437421572'
          },
          {
            'key': 'flash',
            'value': '0'
          },
          {
            'key': 'frm',
            'value': '0'
          },
          {
            'key': 'u_tz',
            'value': '480'
          },
          {
            'key': 'u_his',
            'value': '5'
          },
          {
            'key': 'u_h',
            'value': '1080'
          },
          {
            'key': 'u_w',
            'value': '1920'
          },
          {
            'key': 'u_ah',
            'value': '1032'
          },
          {
            'key': 'u_aw',
            'value': '1920'
          },
          {
            'key': 'u_cd',
            'value': '24'
          },
          {
            'key': 'bc',
            'value': '31'
          },
          {
            'key': 'bih',
            'value': '264'
          },
          {
            'key': 'biw',
            'value': '1887'
          },
          {
            'key': 'brdim',
            'value': '1,1,1,1,1920,0,1918,1030,1902,264'
          },
          {
            'key': 'vis',
            'value': '1'
          },
          {
            'key': 'wgl',
            'value': 'true'
          },
          {
            'key': 'ca_type',
            'value': 'image'
          }
        ],
        'bid': 'ANyPxKq4FrmpiEaKRyJS4tQAC9AK71v9X8_NNdwzuAzkyCJ1r4wED1j5Gb1HywUMBZKw_JDUbkr1w-iIJb_dmwmgY3WQez3kDQ'
      }
    },
    'query': '#haka\u3001#Newzealand\u3001#Maori',
    'webSearchboxStatsUrl': '/search?oq=#haka\u3001#Newzealand\u3001#Maori&gs_l=youtube.3...251692.251781.2.252606......0......yrnpeb_hr,yssro-essqbo=1,yuo-e=0,rlmn=youtube_models/manual_model_longclick_vizier_tune_3_20250129_ast_proto-recordio.0......1j2.........0i512i546i650k1j0i5i30k1j0i512k1.5238'
  },
  {
    params: {
      'prettyPrint': 'false'
    },
    httpsAgent,                    // 设置代理
    proxy: false,
    headers: {
      'accept': '*/*',
      'accept-language': 'zh-CN,zh;q=0.9',
      'authorization': 'SAPISIDHASH 1755437700_a0d0c6476251d58af5fe13f068192de10262b083_u SAPISID1PHASH 1755437700_a0d0c6476251d58af5fe13f068192de10262b083_u SAPISID3PHASH 1755437700_a0d0c6476251d58af5fe13f068192de10262b083_u',
      'content-type': 'application/json',
      'origin': 'https://www.youtube.com',
      'priority': 'u=1, i',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'same-origin',
      'sec-fetch-site': 'same-origin',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36',
      'x-browser-channel': 'stable',
      'x-browser-copyright': 'Copyright 2025 Google LLC. All rights reserved.',
      'x-browser-validation': 'XPdmRdCCj2OkELQ2uovjJFk6aKA=',
      'x-browser-year': '2025',
      'x-client-data': 'CJK2yQEIo7bJAQipncoBCNv3ygEIlqHLAQiko8sBCIWgzQEI3NbOAQi4gM8BCOuAzwEI/4PPAQiUhM8BCJ6FzwEY4eLOARjT/s4BGOGBzwE=',
      'x-goog-authuser': '0',
      'x-goog-visitor-id': 'CgtZcTlhNU00VnJBdyjssofFBjIKCgJISxIEGgAgMQ%3D%3D',
      'x-origin': 'https://www.youtube.com',
      'x-youtube-bootstrap-logged-in': 'true',
      'x-youtube-client-name': '1',
      'x-youtube-client-version': '2.20250814.09.00',
      'cookie': 'VISITOR_INFO1_LIVE=Yq9a5M4VrAw; VISITOR_PRIVACY_METADATA=CgJISxIEGgAgMQ%3D%3D; HSID=ApTZf379RAs9fAoep; SSID=ApFxISD5OxAu2KV7y; APISID=4B8KAUAK26jf22ot/AEBpIzTFkK_AhEtGW; SAPISID=meJ4DHbeI2GKp5l7/AuOrZlcCndcs92wpW; __Secure-1PAPISID=meJ4DHbeI2GKp5l7/AuOrZlcCndcs92wpW; __Secure-3PAPISID=meJ4DHbeI2GKp5l7/AuOrZlcCndcs92wpW; LOGIN_INFO=AFmmF2swRQIhAPQVaYY8YrQ9QYaxx6Gr_qF2doDCJKy4bIQFfQkPSX9YAiAb00GcT1OXSsSOxrloKb3zCA-cl8rditsyK7LPrDTURQ:QUQ3MjNmd09fLXgxVDk0aWFvanlyUTZDNnhOc2w3a1BxTDhXVnpmTjdqQUk0ODBvS0xpZkc0WTNXVm5zVGY4RnpwcW0weE1RTy1YN21NMC03NWxTV3dJUEFyQkhyeW1yUkxYODczMlJ4LTFqQURlRHlacThQNEhlMUhua1lPOEZhVFBUNlBJLXhCQk52ZEYyRGdOcHZrM1phN3hGVEt6X0Zn; SID=g.a0000Qg__HWKe4WB41hyGAmFK25BFnKERZ9wYNvT1E8DltboQrzQhdhW_mZ1mcT42YqtECBekgACgYKAfISARESFQHGX2MiU7-rH-e0NHmg4VSPqbhFihoVAUF8yKqJMXnOED-MlIzvoLDVzmJS0076; __Secure-1PSID=g.a0000Qg__HWKe4WB41hyGAmFK25BFnKERZ9wYNvT1E8DltboQrzQ0CBwjdF0819dMMf8zjWheAACgYKATcSARESFQHGX2Mikxs5S3MWfm8vmvgrj8GatBoVAUF8yKoAyi0mRZEk8hx1lM76-Bid0076; __Secure-3PSID=g.a0000Qg__HWKe4WB41hyGAmFK25BFnKERZ9wYNvT1E8DltboQrzQtYR6AU9f5JYT44XPhqakaQACgYKATASARESFQHGX2MiQ9EdPcTR_DI5ULf3YG69zBoVAUF8yKrVyIgd1Wru9Iw0GRm6eNPI0076; VISITOR_INFO1_LIVE=Yq9a5M4VrAw; VISITOR_PRIVACY_METADATA=CgJISxIEGgAgMQ%3D%3D; __Secure-ROLLOUT_TOKEN=CNzM76rj6dKhShDI_fHh75GPAxib2fDi75GPAw%3D%3D; PREF=f6=40000000&tz=Asia.Shanghai&f7=100; YSC=dJl07isw-TU; __Secure-1PSIDTS=sidts-CjEB5H03PyK7ZDr91OaMQbTAO0RgK0gcJc0EhVSO_ef7OSXKEDjBriV6sNzkg475uyYuEAA; __Secure-3PSIDTS=sidts-CjEB5H03PyK7ZDr91OaMQbTAO0RgK0gcJc0EhVSO_ef7OSXKEDjBriV6sNzkg475uyYuEAA; SIDCC=AKEyXzVCRF1LuOgu331WEkNZSuk5HnSeBa5AQWQwKipcVNi6KsdjRIl0srrASEWXda8n59iNAw; __Secure-1PSIDCC=AKEyXzUZEcSSVULPBb1rfi0UYGs70nbQNB-czU6ZGz1934z-7ERiooSRSKVrQCVtCSA9L6wE; __Secure-3PSIDCC=AKEyXzV2PpkChFULxvQlpgUkod7myp5SqdvieH7w4k16gyVcVUscSJHglJX76Rh1Hvf1wXum; ST-jyko0c=gs_l=youtube.3...251692.251781.2.252606......0......yrnpeb_hr%2Cyssro-essqbo%3D1%2Cyuo-e%3D0%2Crlmn%3Dyoutube_models%2Fmanual_model_longclick_vizier_tune_3_20250129_ast_proto-recordio.0......1j2.........0i512i546i650k1j0i5i30k1j0i512k1.5238&oq=%23haka%E3%80%81%23Newzealand%E3%80%81%23Maori&itct=CBMQ7VAiEwjBrLKM-pGPAxVwTPUFHVGDGnE%3D&csn=wRD9fXI95iBSQZup&session_logininfo=AFmmF2swRQIhAPQVaYY8YrQ9QYaxx6Gr_qF2doDCJKy4bIQFfQkPSX9YAiAb00GcT1OXSsSOxrloKb3zCA-cl8rditsyK7LPrDTURQ%3AQUQ3MjNmd09fLXgxVDk0aWFvanlyUTZDNnhOc2w3a1BxTDhXVnpmTjdqQUk0ODBvS0xpZkc0WTNXVm5zVGY4RnpwcW0weE1RTy1YN21NMC03NWxTV3dJUEFyQkhyeW1yUkxYODczMlJ4LTFqQURlRHlacThQNEhlMUhua1lPOEZhVFBUNlBJLXhCQk52ZEYyRGdOcHZrM1phN3hGVEt6X0Zn&endpoint=%7B%22clickTrackingParams%22%3A%22CBMQ7VAiEwjBrLKM-pGPAxVwTPUFHVGDGnE%3D%22%2C%22commandMetadata%22%3A%7B%22webCommandMetadata%22%3A%7B%22url%22%3A%22%2Fresults%3Fsearch_query%3D%2523haka%25E3%2580%2581%2523Newzealand%25E3%2580%2581%2523Maori%22%2C%22webPageType%22%3A%22WEB_PAGE_TYPE_SEARCH%22%2C%22rootVe%22%3A4724%7D%7D%2C%22searchEndpoint%22%3A%7B%22query%22%3A%22%23haka%E3%80%81%23Newzealand%E3%80%81%23Maori%22%7D%7D; ST-1k06sw0=session_logininfo=AFmmF2swRQIhAPQVaYY8YrQ9QYaxx6Gr_qF2doDCJKy4bIQFfQkPSX9YAiAb00GcT1OXSsSOxrloKb3zCA-cl8rditsyK7LPrDTURQ%3AQUQ3MjNmd09fLXgxVDk0aWFvanlyUTZDNnhOc2w3a1BxTDhXVnpmTjdqQUk0ODBvS0xpZkc0WTNXVm5zVGY4RnpwcW0weE1RTy1YN21NMC03NWxTV3dJUEFyQkhyeW1yUkxYODczMlJ4LTFqQURlRHlacThQNEhlMUhua1lPOEZhVFBUNlBJLXhCQk52ZEYyRGdOcHZrM1phN3hGVEt6X0Zn'
    }
  }
);
// 将结果写入到restlt.json
fs.writeFileSync('result.json', JSON.stringify(response.data, null, 2));
// console.log(util.inspect(response.data, { depth: null, showHidden: true, colors: true }));
