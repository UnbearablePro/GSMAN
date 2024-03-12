function disableAdminModeTrigger() {
    try {
        System.disabledAdminMode();
    } catch (e) {
        ErrorHandler.handleError(e);
    }
}

function enableAdminModeTrigger() {
    try {
        System.requestAdminMode();
    } catch (e) {
        ErrorHandler.handleError(e);
    }
}

function enableTestMenuTrigger() {
    try {
        System.enableTestMenu();
    } catch(e) {
        ErrorHandler.handleError(e);
    }
}

