const TikTokScraper = require('tiktok-scraper');

let url = 'https://www.tiktok.com/@xbadmix/video/7282170036469517573'; // Replace with your video URL

(async () => {
    try {
        const videoMeta = await TikTokScraper.getVideoMeta('https://www.tiktok.com/@luzes.camera/video/7276864967989562630',

            {
                headers: {
                    cookie: '_ttp=2VnJM0Akgmh9mUnTQLEVlHpy1Xp; tt_csrf_token=gMbjh6lR-sxOUDAl9yUJwaHxiTQN3K50e4j8; tt_chain_token=ktc2XGHXqthfCwl4ifBNEQ==; passport_csrf_token=47b092816418203bd37aa7c44bf225b8; passport_csrf_token_default=47b092816418203bd37aa7c44bf225b8; s_v_web_id=verify_lnn7xbu2_9b2PTRGx_e5fO_4AjI_8jzz_Erxy5IPoQ2HZ; multi_sids=6808357177854592006%3A2d6b712e7508a4b4b899cb90a5182f66; cmpl_token=AgQQAPPdF-RO0o5CymB6M90__0ZsO4PV_4TvYMwBmQ; sid_guard=2d6b712e7508a4b4b899cb90a5182f66%7C1697117633%7C15552000%7CTue%2C+09-Apr-2024+13%3A33%3A53+GMT; uid_tt=e6bdfac4d563a84dad920ea0bb25f787bf50737627bc5243ba8de838ca3fcb3e; uid_tt_ss=e6bdfac4d563a84dad920ea0bb25f787bf50737627bc5243ba8de838ca3fcb3e; sid_tt=2d6b712e7508a4b4b899cb90a5182f66; sessionid=2d6b712e7508a4b4b899cb90a5182f66; sessionid_ss=2d6b712e7508a4b4b899cb90a5182f66; sid_ucp_v1=1.0.0-KDA5NmIyMzBlOTI5NzAzYWE0NjVlNWMyMjEyYmM3ZjhkMDdiMTVjMDYKIAiGiISQ_5iJvl4QweufqQYYswsgDDDWyvDzBTgHQPQHEAMaBm1hbGl2YSIgMmQ2YjcxMmU3NTA4YTRiNGI4OTljYjkwYTUxODJmNjY; ssid_ucp_v1=1.0.0-KDA5NmIyMzBlOTI5NzAzYWE0NjVlNWMyMjEyYmM3ZjhkMDdiMTVjMDYKIAiGiISQ_5iJvl4QweufqQYYswsgDDDWyvDzBTgHQPQHEAMaBm1hbGl2YSIgMmQ2YjcxMmU3NTA4YTRiNGI4OTljYjkwYTUxODJmNjY; store-idc=maliva; store-country-code=br; store-country-code-src=uid; tt-target-idc=useast1a; tt-target-idc-sign=gqtH3XWMOAl8gNpaLkoOjCPHOzPjJXd7XY9_e0KASMarBmU08Xm8cC8_EyaUNYenGeiigkXqx30LrbEU3gzmxqDeXrf5vYXM5At2Jrr-dkztFtY9ldcy4a-LvYfOqU5IZZI1OYBqovTYMqKvsSx5m9zt0dnx3BEkJztSpMNdImLDEDGqCGRfi-cjyZxHlvFByX9mRe9kVzwsVoOGGFxEkWQ7yK7dGmkLnHgzXqCO3nJw4cLpFomugUkmtD-VMxAymcxubRpT5so4ueXVgCFxOP22X42EUoXr4KlEjal6NrscdI9C0IrA3o8DwKIE0njpwhp7y2NkOWoAwxWDTKxw0D4FNhoS9lgzY-ekxegu4yUkrDhhi1VKBxlA6KwPu5N7WMhDH-lQcCJA6L8X4Pyg1dgSMEZgf4650hc3Yn0MEG___jKtDGTKt_EgJFZz06xMaq2UN9yGkcTHyC2zd5ba5JY8BsxQkvOmhc8KoXHXBxyO-usRP4E_MFn8sAyc7yow; ttwid=1%7C2B1Hun15m0B_2PgYHq7KioUl-wc3Di5AQh3gT3IbROM%7C1697117638%7Ca01e0004335ae0dd39e39b9842ad0b7daee9c955d5ce36697663a6689b5b269a; odin_tt=e2cbb62fb89013730178fb453671737bf40fa7f46652577d511906340d0c67fd488fcf883296014a3e6715fe5ddecccd76ec350ce84b93ed67a1947e647ac7e97f4188d1d314fab9fa3cf6162724db46; msToken=Cjf0G9Dq1Gl2Dae8sTJGbt6N5V8dQ_92WCL-98jTIxfb1HZuPTlCD3fFpjBNQsZgJ9Bo0aCZfalpFEqg16_RZGuSgjHvGYLHrmvCeQmIkYP5iaHNG9A0', // fill this field
                }
            }
        );
        console.log(videoMeta);
        // Display the video meta data
        console.log(videoMeta.collector[0]);

    } catch (error) {
        console.error(error);
    }
})();

// const axios = require('axios')

// async function getMetaVideo() {
//     const { data } = await axios.get('https://www.tiktok.com/@aifadavina/video/7140151847649791258', {
//         headers: {
//             referer: 'https://www.tiktok.com/',
//             cookie: '_ttp=2VnJM0Akgmh9mUnTQLEVlHpy1Xp; tt_csrf_token=gMbjh6lR-sxOUDAl9yUJwaHxiTQN3K50e4j8; tt_chain_token=ktc2XGHXqthfCwl4ifBNEQ==; passport_csrf_token=47b092816418203bd37aa7c44bf225b8; passport_csrf_token_default=47b092816418203bd37aa7c44bf225b8; s_v_web_id=verify_lnn7xbu2_9b2PTRGx_e5fO_4AjI_8jzz_Erxy5IPoQ2HZ; multi_sids=6808357177854592006%3A2d6b712e7508a4b4b899cb90a5182f66; cmpl_token=AgQQAPPdF-RO0o5CymB6M90__0ZsO4PV_4TvYMwBmQ; sid_guard=2d6b712e7508a4b4b899cb90a5182f66%7C1697117633%7C15552000%7CTue%2C+09-Apr-2024+13%3A33%3A53+GMT; uid_tt=e6bdfac4d563a84dad920ea0bb25f787bf50737627bc5243ba8de838ca3fcb3e; uid_tt_ss=e6bdfac4d563a84dad920ea0bb25f787bf50737627bc5243ba8de838ca3fcb3e; sid_tt=2d6b712e7508a4b4b899cb90a5182f66; sessionid=2d6b712e7508a4b4b899cb90a5182f66; sessionid_ss=2d6b712e7508a4b4b899cb90a5182f66; sid_ucp_v1=1.0.0-KDA5NmIyMzBlOTI5NzAzYWE0NjVlNWMyMjEyYmM3ZjhkMDdiMTVjMDYKIAiGiISQ_5iJvl4QweufqQYYswsgDDDWyvDzBTgHQPQHEAMaBm1hbGl2YSIgMmQ2YjcxMmU3NTA4YTRiNGI4OTljYjkwYTUxODJmNjY; ssid_ucp_v1=1.0.0-KDA5NmIyMzBlOTI5NzAzYWE0NjVlNWMyMjEyYmM3ZjhkMDdiMTVjMDYKIAiGiISQ_5iJvl4QweufqQYYswsgDDDWyvDzBTgHQPQHEAMaBm1hbGl2YSIgMmQ2YjcxMmU3NTA4YTRiNGI4OTljYjkwYTUxODJmNjY; store-idc=maliva; store-country-code=br; store-country-code-src=uid; tt-target-idc=useast1a; tt-target-idc-sign=gqtH3XWMOAl8gNpaLkoOjCPHOzPjJXd7XY9_e0KASMarBmU08Xm8cC8_EyaUNYenGeiigkXqx30LrbEU3gzmxqDeXrf5vYXM5At2Jrr-dkztFtY9ldcy4a-LvYfOqU5IZZI1OYBqovTYMqKvsSx5m9zt0dnx3BEkJztSpMNdImLDEDGqCGRfi-cjyZxHlvFByX9mRe9kVzwsVoOGGFxEkWQ7yK7dGmkLnHgzXqCO3nJw4cLpFomugUkmtD-VMxAymcxubRpT5so4ueXVgCFxOP22X42EUoXr4KlEjal6NrscdI9C0IrA3o8DwKIE0njpwhp7y2NkOWoAwxWDTKxw0D4FNhoS9lgzY-ekxegu4yUkrDhhi1VKBxlA6KwPu5N7WMhDH-lQcCJA6L8X4Pyg1dgSMEZgf4650hc3Yn0MEG___jKtDGTKt_EgJFZz06xMaq2UN9yGkcTHyC2zd5ba5JY8BsxQkvOmhc8KoXHXBxyO-usRP4E_MFn8sAyc7yow; ttwid=1%7C2B1Hun15m0B_2PgYHq7KioUl-wc3Di5AQh3gT3IbROM%7C1697117638%7Ca01e0004335ae0dd39e39b9842ad0b7daee9c955d5ce36697663a6689b5b269a; odin_tt=e2cbb62fb89013730178fb453671737bf40fa7f46652577d511906340d0c67fd488fcf883296014a3e6715fe5ddecccd76ec350ce84b93ed67a1947e647ac7e97f4188d1d314fab9fa3cf6162724db46; msToken=Cjf0G9Dq1Gl2Dae8sTJGbt6N5V8dQ_92WCL-98jTIxfb1HZuPTlCD3fFpjBNQsZgJ9Bo0aCZfalpFEqg16_RZGuSgjHvGYLHrmvCeQmIkYP5iaHNG9A0', // fill this field from request tiktok, i recommended fill to FULL COOKIE
//             'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4275.186 Safari/537.36',
//         }
//     });

//     const stringData = String(data);
//     const splitFirst = stringData.split('type="application/json">')[1];
//     const splitSecond = splitFirst.split('</script>')[0];

//     console.log(JSON.parse(splitSecond))
// }

// getMetaVideo();


// fetch("https://savett.cc/en/trigger-download", {
//     "headers": {
//         "accept": "application/json, text/javascript, */*; q=0.01",
//         "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
//         "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//         "sec-ch-ua": "\"Google Chrome\";v=\"117\", \"Not;A=Brand\";v=\"8\", \"Chromium\";v=\"117\"",
//         "sec-ch-ua-mobile": "?1",
//         "sec-ch-ua-platform": "\"Android\"",
//         "sec-fetch-dest": "empty",
//         "sec-fetch-mode": "cors",
//         "sec-fetch-site": "same-origin",
//         "x-requested-with": "XMLHttpRequest",
//         "cookie": "session=eyJjc3JmX3Rva2VuIjoiYTk4NzI5ZGIxZTZhNGJjZTIwMzFjNzg4YThjMjVjMmMwOGJkNTA1ZiJ9.GAmOLw.3twClsvy2ewcMNgwRWClUdNl_U4; _ga=GA1.1.127320061.1697119407; __qca=P0-361575600-1697119407219; _ga_96M898LV38=GS1.1.1697119407.1.1.1697119435.0.0.0; cf_clearance=IeMwpjeYzxj0mYpwQBNVMWMcoPliBJX4y6e8LaBfieA-1697119437-0-1-3edc9786.229d96a8.69ddc866-0.2.1697119437; mp_ec0f5c39312fa476b16b86e4f6a1c9dd_mixpanel=%7B%22distinct_id%22%3A%20%22%24device%3A18b24330c10aff-0f52d257b84a6-26031e51-1fa400-18b24330c10aff%22%2C%22%24device_id%22%3A%20%2218b24330c10aff-0f52d257b84a6-26031e51-1fa400-18b24330c10aff%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2F%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%7D",
//         "Referer": "https://savett.cc/en/download",
//         "Referrer-Policy": "strict-origin-when-cross-origin"
//     },
//     "body": "id=7140151847649791258&url=https%3A%2F%2Fwww.tiktok.com%2F%40caiopimentelpsi%2Fvideo%2F7278059083884776709&csrf_token=ImE5ODcyOWRiMWU2YTRiY2UyMDMxYzc4OGE4YzI1YzJjMDhiZDUwNWYi.GAmOTQ.Oyvv1zKL6IUkxFnsfx5sJ4zdJQU&type=MP4&ext=mp4&info=%7B%22API%22%3A+%22https%3A%2F%2Fapi16-normal-useast5.us.tiktokv.com%2Faweme%2Fv1%2Fplay%2F%3Fvideo_id%3Dv0f025gc0000ccbekhjc77u4offgblug%26line%3D0%26is_play_url%3D1%26source%3DPackSourceEnum_AWEME_DETAIL%26file_id%3D6f4cd105b9694e3ab5843d8c025a93e9%26item_id%3D7140151847649791258%26signv3%3DdmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjAyODJmNjUxNzc0YTY4NWFmMmE1N2Y1NWIwN2M4NWU1%22%2C+%22URL%22%3A+%5B%22https%3A%2F%2Fv19.tiktokcdn-us.com%2Ffd794bc27f9cb1d6bf388ee6555cb4b3%2F65285135%2Fvideo%2Ftos%2Fuseast2a%2Ftos-useast2a-pve-0037-aiso%2F20bbaecc5faa43d88a95043dbd278e16%2F%3Fa%3D1233%26ch%3D0%26cr%3D13%26dr%3D0%26lr%3Dall%26cd%3D0%257C0%257C0%257C%26cv%3D1%26br%3D2852%26bt%3D1426%26bti%3DOUBzOTg7QGo0NzZAL3AjLTAzYCM1NTNg%26cs%3D0%26ds%3D6%26ft%3DkJrRfy7oZZv0PD1_LcSxg9wBrp95JEeC~%26mime_type%3Dvideo_mp4%26qs%3D0%26rc%3DPDZkNWZnNzhkaDw8ODRmaUBpam9qaTc6ZmtoZjMzZjgzM0BiNjItNTA1XzAxM18tYTEzYSNyX2NscjRnaF9gLS1kL2Nzcw%253D%253D%26l%3D20231012140356F2E534F6CAF04400008D%26btag%3De00008000%22%2C+%22https%3A%2F%2Fv16m.tiktokcdn-us.com%2F63542cb4451fb39bfef8e4c44de7a1b4%2F65285135%2Fvideo%2Ftos%2Fuseast2a%2Ftos-useast2a-pve-0037-aiso%2F20bbaecc5faa43d88a95043dbd278e16%2F%3Fa%3D1233%26ch%3D0%26cr%3D13%26dr%3D0%26lr%3Dall%26cd%3D0%257C0%257C0%257C%26cv%3D1%26br%3D2852%26bt%3D1426%26bti%3DOUBzOTg7QGo0NzZAL3AjLTAzYCM1NTNg%26cs%3D0%26ds%3D6%26ft%3DkJrRfy7oZZv0PD1_LcSxg9wBrp95JEeC~%26mime_type%3Dvideo_mp4%26qs%3D0%26rc%3DPDZkNWZnNzhkaDw8ODRmaUBpam9qaTc6ZmtoZjMzZjgzM0BiNjItNTA1XzAxM18tYTEzYSNyX2NscjRnaF9gLS1kL2Nzcw%253D%253D%26l%3D20231012140356F2E534F6CAF04400008D%26btag%3De00008000%22%5D%7D",
//     "method": "POST"
// }).then((response) => response.text())
//     .then((body) => {
//         console.log(body);
//     });
