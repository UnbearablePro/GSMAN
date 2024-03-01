class Admin {
  /** private */
  constructor() {
    throw Error("You are not allowed to have an Admin object!");
  }

  static setAdminModeOn() {
    PropertiesDocumentService.set("admin-mode", "1");
  }

  static setAdminModeOff() {
    PropertiesDocumentService.set("admin-mode", "0");
  }

  static isAdminModeOn() {
    return PropertiesDocumentService.get("admin-mode") == "1";
  }

  static requestAdminPassword() {
    return Displayer.inputField("Enable Admin mode", "Introdu parola de Admin:");
  }

  static getAdminPassword() {
    return PropertiesDocumentService.get("admin-password");
  }

  static disableAdminMode() {
    SpreadSheetService.removeMenu("ADMIN");
    Admin.setAdminModeOff();
    Displayer.system("Admin mode disabled successfully");
  }

  static enableAdminMode(inputPassword) {
    if (Encryptor.hash(inputPassword) == Admin.getAdminPassword()) {
      MenuBuilder.createMenu(MenusTemplate.ADMIN);
      Admin.setAdminModeOn();
      TriggerService.createOneTimeTriggerAfter('disabledAdminMode', DurationTime.HOURINMILLIS);
      Displayer.system("Admin mode enabled successfully");

    } else {
      Displayer.warning("Admin mode rejected. Wrong password");
    }
  }



}
