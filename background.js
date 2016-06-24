/* ********
  AUTHOR: Lucy Lin
  DATE: 24 June 2016 (Tuesday)
  DESCRIPTION:
    do ajax call in background rather than content script
  NOTES:

******** */
chrome.runtime.onMessage.addListener(function(request, sender, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) callback(xhttp.responseText);
    };

    xhttp.open('GET', request, true);
    xhttp.setRequestHeader("cache-control", "no-cache");
    xhttp.send();
    return true;
});