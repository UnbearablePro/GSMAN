class System {

    static requestAdminMode() {
        if (Admin.isAdminModeOn_()) {
            Displayer.system("👨🏻‍💻 Admin mode is already on");
            MenuAdmin.createAdminMenu();
            return;
        }
        let inputPassword = Admin.requestAdminPassword_();
        Lug.info(`Admin input password requested: ${inputPassword} `);

        Admin.enableAdminMode_(inputPassword);
    }

    static disabledAdminMode() {
        Admin.disableAdminMode_();
    }

    static isAdmineOn() {
        return Admin.isAdminModeOn_();
    }
}

