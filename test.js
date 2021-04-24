alert("ok")
chrome.tabs.onCreated.addListener(function() {
            alert('hello new tab')
        });