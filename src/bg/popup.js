 var port = chrome.extension.connect({
      name: "Copy"
 });
 port.postMessage("");
 port.onMessage.addListener(function(msg) {
    document.getElementById('countTrim').innerText = msg;
 });
