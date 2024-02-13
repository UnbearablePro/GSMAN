class Menu {

  static createOVBMenu() {
    SpreadsheetApp.getUi()
      .createMenu('OVB')
      .addItem('Creaza un simplu reminder', 'callButtonSetReminder')
      .addItem('Creaza un reminder pentru o persoana', 'callButtonSetReminderForSelectedPerson')
      .addItem('Enable admin mode', 'menuButtonRequestAdminMode')
      .addToUi();
  }

  

  /** @private */
  static createAdminMenu() {
    SpreadsheetApp.getUi()
      .createMenu('ADMIN')
      .addSubMenu(this.getDebugMenu_())
      .addSeparator()
      .addItem('Disable admin mode', 'menuButtonDisableAdminMode')
      .addItem('Display random quote', 'menuButtonDisplayRandomQuote')
      .addToUi();
  }

  /** @private */
  static getDebugMenu_() {
    return SpreadsheetApp.getUi()
      .createMenu('Debug')
      .addSubMenu(this.getUserPropertiesMenu_())
      .addSubMenu(this.getInstallerMenu_());   
  }

  /** @private */
  static getUserPropertiesMenu_() {
    return SpreadsheetApp.getUi()
      .createMenu('User properties')
      .addItem(`Display user properties`, "menuButtonDisplayUserProperties")
      .addItem('Delete all settings', "menuButtonDeleteAllSettings")
      .addItem(`Delete all user properties`, "menuButtonDeleteAllUserProperties"); 
  }

  /** @private */
  static getInstallerMenu_() {
    return SpreadsheetApp.getUi()
      .createMenu('Installer')
      .addItem(`Install user properties`, "menuButtonInstallUserProperties")
      .addItem(`Install OVBRAIN`, "menuButtonInstallOVBRAIN");
  }

  

  static deleteAdminMenu() {
    SpreadsheetApp.getActiveSpreadsheet().removeMenu("ADMIN");
  }
}

