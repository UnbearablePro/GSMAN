class SystemController {

    static disabledAdminMode() {
        System.disabledAdminMode();
    };

    static enableAdminMode() {
        System.requestAdminMode();
    }
    
    static enableTestMenu() {
        Permisioner.requireAdminPermsission();
        System.enableTestMenu();
    }
}