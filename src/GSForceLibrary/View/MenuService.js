class Menu {

    static createAdminMenu() {
        let ui = SpreadsheetApp.getUi();
        let adminMenu = ui.createMenu('Admin');
        let debugMenu = ui.createMenu('Debug');
        let debugPropertiesMenu = ui.createMenu('Properties');

        debugPropertiesMenu
        
        .addItem('User Display', 'debugDisplayUserPropertiesTrigger')
        .addItem('User Update', 'debugUpdateUserPropertiesTrigger')
        .addItem('User Delete', 'debugDeleteUserPropertiesTrigger')
        .addSeparator()
        .addItem('Document Display', 'debugDisplayDocumentPropertiesTrigger')
        .addItem('Document Update', 'debugUpdateDocumentPropertiesTrigger')
        .addItem('Document Delete', 'debugDeleteDocumentPropertiesTrigger')
        .addSeparator()
        .addItem('Script Display', 'debugDisplayScriptPropertiesTrigger')
        .addItem('Script Update', 'debugUpdateScriptPropertiesTrigger')
        .addItem('Script Delete', 'debugDeleteScriptPropertiesTrigger');

        debugMenu
        .addItem('Check Health', 'debugCheckSystemWorks')
        .addSubMenu(debugPropertiesMenu);
        

        adminMenu
        .addSubMenu(debugMenu)
        .addItem('Test menu on', 'enableTestMenuTrigger')
        .addSeparator()
        .addItem('Admin off', 'disableAdminModeTrigger');

        adminMenu.addToUi();

        Lug.progress("Admin Menu created successfully");
    }

    static delete(menuName) {
        SpreadsheetApp.getActiveSpreadsheet().removeMenu(menuName);
        Lug.progress(`${menuName} Menu deleted successfully`);
    }

}

