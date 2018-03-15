這是一篇簡單的網路爬蟲

1. 先找到要下手的網頁: PTT Tech_Job版: https://www.ptt.cc/bbs/Tech_Job/index.html
2. 右鍵看原始碼，找到需要的資料: <div class="r-ent"> 等等之類
3. 開始爬資料囉
4. 開資料夾:
$npm init
$npm install --save request cheerio     這邊用到request和cheerio套件
$node app.js 執行就可以看到你爬的東西，最後當然可以存起來到本地端
5. 最後用轉成JSON的格式儲存起來(result.json)
