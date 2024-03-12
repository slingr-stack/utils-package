/****************************************************
 UI
 ****************************************************/

exports.openInNewTab = function (url) {
    var userId = sys.context.getCurrentUserRecord().id();
    sys.logs.info('[utils] User id: '+JSON.stringify(userId));
    sys.ui.sendMessage({
        scope: 'uiService:utils.uiManagement',
        name: 'openInNewTab',
        target: 'users',
        targetUsers: [userId],
        url: url,
        callbacks: {
            success: function (originalMessage, callbackData) {
                sys.logs.info('[utils] Success callback with message: '+JSON.stringify(callbackData)+' and data: '+JSON.stringify(callbackData));
            },
            fail: function (originalMessage, callbackData) {
                sys.logs.error('[utils] Fail callback with message: '+JSON.stringify(callbackData)+' and data: '+JSON.stringify(callbackData));
            }
        }
    });
}

exports.openInCurrentTab = function (url) {
    var userId = sys.context.getCurrentUserRecord().id();
    sys.logs.info('[utils] User id: '+JSON.stringify(userId));
    sys.ui.sendMessage({
        scope: 'uiService:utils.uiManagement',
        name: 'openInCurrentTab',
        target: 'users',
        targetUsers: [userId],
        url: url,
        callbacks: {
            success: function (originalMessage, callbackData) {
                sys.logs.info('[utils] Success callback with message: '+JSON.stringify(callbackData)+' and data: '+JSON.stringify(callbackData));
            },
            fail: function (originalMessage, callbackData) {
                sys.logs.error('[utils] Fail callback with message: '+JSON.stringify(callbackData)+' and data: '+JSON.stringify(callbackData));
            }
        }
    });
}
