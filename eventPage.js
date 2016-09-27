// 監聽自訂的快捷鍵，詳見manifest.json
chrome.commands.onCommand.addListener(function(command) {
    var commands = null;
    switch (command) {
        case "get_URL":
            commands = 0;
            chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, { command: 0 });
            });
            break;
        case "get_URL_title":
            commands = 1;
            chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, { command: 1 });
            });
            break;
        case "get_URL_title_content":
            commands = 2;
            chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, { command: 2 });
            });
            break;
    }
});
// chrome.webNavigation.onDOMContentLoaded.addListener(function() {
//     chrome.tabs.executeScript(null, { file: "content.js" });
// });

// chrome.browserAction.onClicked.addListener(function(tabs) {
//     chrome.tabs.sendMessage(tabs.id, { text: tabs.url });
// });

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     chrome.tabs.executeScript(null, { file: "content.js" });

//     alert(tab.url);
//     chrome.tabs.sendMessage(tabs[0].id, { text: tabs[0].url });

// })

// chrome.tabs.create({url:"http://www.google.com"});
// window.open("test.html");
