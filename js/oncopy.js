// on copy event, send a message to background.html
function onCopy(e, a) {
    chrome.extension.sendRequest({ event: "copy", text: window.getSelection().toString() });
}

//register event listener for copy events on document
document.addEventListener('copy', onCopy); 
