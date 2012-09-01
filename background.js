var VERSION = "0.2";

function checkFirstInstall() {
	chrome.storage.local.get("installedVersion", function(item){
		debugger;
		if ( (typeof item.installedVersion === "undefined") || (VERSION > item.installedVersion) ) {
			chrome.tabs.create({url: "about.html"});
			chrome.storage.local.set({"installedVersion": VERSION})
		}
	});
}

function catchMessage(request, sender, sendResponse) {
	if (request.showPageAction) {
		chrome.pageAction.setTitle({
			tabId: sender.tab.id, 
			title: "Page saved by SingleFile on " + request.date + "\nClick here to open original page"
		});
		chrome.pageAction.show(sender.tab.id);
		urlTable[sender.tab.id] = request.url;
	}
}

// MAIN
checkFirstInstall();
var urlTable = {};
chrome.extension.onMessage.addListener(catchMessage);
chrome.pageAction.onClicked.addListener(function(tab){
	chrome.tabs.create({url: urlTable[tab.id]});
});
