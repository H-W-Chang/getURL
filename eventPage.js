//當有popup.html時不能使用

chrome.webNavigation.onDOMContentLoaded.addListener(function() {
    chrome.tabs.executeScript(null, { file: "content.js" });
});

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
