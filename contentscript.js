// Content Script (matches "file://*/*")
var signature = document.documentElement.outerHTML.match(/<html(.|\n)+?head>/);
if (signature) {
	signature = signature[0];
	if (signature.match(/Archive processed by SingleFile/)) {
		var url = signature.match(/url:.+/).toString().replace("url: ", "");
		var date = signature.match(/saved\sdate:.+/).toString().replace("saved date: ", "");
		chrome.extension.sendMessage({showPageAction: true, url: url, date: date});
	}
}
