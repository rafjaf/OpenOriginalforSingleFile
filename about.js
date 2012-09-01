document.querySelector("a#ext").addEventListener("click", function(){
	chrome.tabs.create({url: "chrome://chrome/extensions/"});
}, false);
document.querySelector("div#footer a").href = "mailto:" + "raf" + "." + "jaf" + "@" + "gmail.com";

