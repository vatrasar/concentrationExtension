
chrome.tabs.onCreated.addListener(function() {
    if (!confirm('Czy powinnieneś to odtworzyć?')) {
        //window.close();

        while(!confirm('zamkniesz karte?'))
        {

        }
    }
});