class MenuOVB {

  static createOVBMenu() {
    let ui = SpreadsheetApp.getUi();

    let ovbMenu = ui.createMenu('OVB');
    let systemMenu = ui.createMenu('System');

    systemMenu
      .addItem('Install Admin', 'installAdminTrigger')
      .addItem('Install Tell Party', 'installTellPartyTrigger');

    ovbMenu
      .addSubMenu(systemMenu)
      .addItem('Admin on', 'enableAdminModeTrigger')

    ovbMenu.addToUi();
  }

  static deleteAll() {
    Admin.disableAdminMode_();
    this.delete("OVB");
    this.delete("Admin");
    this.delete("Debug");
    this.delete("Test");
  }

  static delete(menuName) {
    SpreadsheetApp.getActiveSpreadsheet().removeMenu(menuName);
    Lug.progress(`${menuName} Menu deleted successfully`);
  }

}

