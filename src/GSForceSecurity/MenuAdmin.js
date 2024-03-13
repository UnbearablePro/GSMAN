class MenuAdmin {

    static createAdminMenu() {
        let ui = SpreadsheetApp.getUi();
        let adminMenu = ui.createMenu('Admin')

        adminMenu
        .addItem('Admin off', 'disableAdminModeTrigger');

        adminMenu.addToUi();
    }

    static delete() {
        SpreadsheetApp.getActiveSpreadsheet().removeMenu("Admin");
    }
}