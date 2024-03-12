class MenuOVB extends Menu {

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

    Lug.progress("OVB Menu created successfully");
  }

  static deleteAll() {
    Admin.disableAdminMode_();
    this.delete("OVB");
  }

}

