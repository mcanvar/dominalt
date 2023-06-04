# dominalt

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Notes

How to determıne weather dominance is Inc or Dec? (in last 7 days) 1 CALL

BTC.D = BTC MCAP / Others MCAP

free?
headers: { "x-messari-api-key": "YOUR-SECRET-KEY" },
https://data.messari.io/api/v1/assets/bitcoin/metrics/mcap.dom/time-series%5C?start%5C=2020-01-01%5C&end%5C=2020-02-01%5C&interval%5C=1d
curl --compressed https://data.messari.io/api/v1/assets/bitcoin/metrics/mcap.dom/time-series\?start\=2019-01-01\&end\=2020-04-01\&interval=1d | jq .

How to determıne weather BTC/USD is Inc or Dec or Stable? (in last 7 days) 2 CALL

https://api.coingecko.com/api/v3/coins/bitcoin/history?date=30-12-2017&localization=en

How to determıne weather ALTS is Inc or Dec or Stable? (in last 7 days) 188 CALL + 1

rate: 50 per min => getting top 99 coin price and filling array 99x2 = 188 call this means 2 sec delay of every call
to get the coin list without stables +1 call needed()

arithmetic mean of the array items
https://api.coingecko.com/api/v3/coins/ethereum/history?date=30-12-2017&localization=en

OR instead of above two call below:

curl -X 'GET' \
'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y' \
-H 'accept: application/json'

call this with the options of
price_change_percentage 1h,24h,7d,14d,30d,200d,1y
arithmetic mean of the selected price_change_percentage of the array iitems


TODOS from last meeting:
- ALTs ortalaması nasıl hesaplanmalı?
  - MCAP kullanarak ağırlıklı ortalamayı araştır.
- 24h, 7d, 14d, 30d, 200d, 1y kullanılabileceğimizi kullanalım, zaman seçilebilsin
- ALTs -> increase/decrease
- 50 / TOP 100 (D) / 250 / 500 / 1000
- Theory actual akt’f olmayanlar ayni kalsın
- Actual tafainda seçim ve butonlar
- marketcapof.com 2. Sayfa basit şekilde yapılabilir.
