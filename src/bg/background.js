
chrome.extension.onRequest.addListener(
  function (request, sender, sendResponse) {
    if (request.event == "copy" && request.text) {
      var input = document.createElement('textarea');
      document.body.appendChild(input);
      input.value = request.text.trim();
      input.focus();
      input.select();
      document.execCommand('Copy');
      input.remove();
    }
    sendResponse({});
  });