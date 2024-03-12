function installTellPartyTrigger() {
    try {
        SystemOVBHandler.installTellParty()
    } catch (e) {
        ErrorHandler.handleError(e);
    }
}

function installAdminTrigger() {
    try {
        Installer.installAdmin();
    } catch (e) {
        ErrorHandler.handleError(e);
    }
}