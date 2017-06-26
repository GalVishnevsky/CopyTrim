let countCopy = 0
chrome.extension.onRequest.addListener(
  function (request, sender, sendResponse) {
    if (request.event == "copy" && request.text) {
      var input = document.createElement('textarea');
      document.body.appendChild(input);
      input.value = request.text.trim();
      countCopy += request.text.length - input.value.length;
      input.focus();
      input.select();
      document.execCommand('Copy');
      input.remove();
    }
    sendResponse({});
  });


   chrome.extension.onConnect.addListener(function(port) {
      port.onMessage.addListener(function(msg) {
           port.postMessage(countCopy);
      });
 })