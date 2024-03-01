class System {

    static requestAdminMode() {
        if (Admin.isAdminModeOn()) {
            Displayer.system("Admin mode is already on.");
            return;
        }
        let inputPassword = Displayer.inputField("Enable Admin mode", "Introdu parola de Admin:");
        Admin.enableAdminMode(inputPassword);
    }

    static disabledAdminMode() {
        Admin.disableAdminMode();
    }
}