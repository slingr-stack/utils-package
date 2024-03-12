service.openInNewTab = function (message) {
    console.log("[utils] Open in new tab: " + message.url);
    var url = message.url;
    try {
        window.open(url, '_blank').focus();
        service.callback(message, 'success', null);
    } catch (e) {
        service.callback(message, 'fail', e);
    }
}

service.openInCurrentTab = function (message) {
    console.log("[utils] Open in current tab: " + message.url);
    var url = message.url;
    try {
        window.open(url, '_self').focus();
        service.callback(message, 'success', null);
    } catch (e) {
        service.callback(message, 'fail', e);
    }
}
