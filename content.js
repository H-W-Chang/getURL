//判斷是否已嵌入content script
if (document.getElementsByTagName("body")[0].hasAttribute('specialAttribute') === false) {
    // 沒嵌入的話則在body嵌入一個attribute，其值為true
    document.getElementsByTagName("body")[0].setAttribute('specialAttribute', 'true');
    var caption = null;   // 新聞標題
    var myURL = null;    // 新聞連結
    myURL = document.location.href;    //取得URL
    var site = [    
        /^https?:\/\/(?:[^./?#]+\.)?ltn\.com/,
        /^https?:\/\/(?:[^./?#]+\.)?appledaily\.com/,
        /^https?:\/\/(?:[^./?#]+\.)?udn\.com/,
        /^https?:\/\/(?:[^./?#]+\.)?chinatimes\.com/
    ];   // 各個網站的regexp判斷式
    for (var i = 0; i < 4; i++) {
        // 判斷是哪個網站
        if (site[i].test(myURL)) {
            switch (i) {
                case 0: //ltn
                    caption = document.getElementsByTagName("H1")[0].innerHTML;
                    break;
                case 1: //apple
                    caption = document.getElementById("h1").innerHTML;
                    break;
                case 2: //udn
                    caption = document.getElementById("story_art_title").innerHTML;
                    break;
                case 3: //chinatimes
                    caption = document.getElementsByTagName("H1")[1].innerHTML;
                    break;
            };
            // 接收eventPage傳送的訊息
            chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
                // 監聽clipboardEvent並在按下copy後觸發
                document.addEventListener('copy', function(e) {
                    switch (request.command) {
                        case 0:
                            e.clipboardData.setData('text/plain', myURL);
                            e.preventDefault();
                            break;
                        case 1:
                            e.clipboardData.setData('text/plain', caption + "\t\t" + myURL);
                            e.preventDefault();
                            break;
                    }
                });
            });
        }
    }

}
