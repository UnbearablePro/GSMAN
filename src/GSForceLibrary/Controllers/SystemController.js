class SystemController {

    static disabledAdminMode() {
        try { System.disabledAdminMode(); } catch (e) { ErrorHandler.handleError(e) };
    };

    static enableAdminMode() {
        try { System.requestAdminMode(); } catch (e) { ErrorHandler.handleError(e) };
    }
}