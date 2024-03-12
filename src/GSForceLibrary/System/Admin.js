class Admin {

  constructor() {
    throw Error("You are not allowed to have an Admin object!");
  }

  static setAdminModeOn_() {
    PropertiesUserService.set("admin-mode", "1");
  }

  static setAdminModeOff_() {
    PropertiesUserService.set("admin-mode", "0");
  }

  static isAdminModeOn_() {
    return PropertiesUserService.get("admin-mode") == "1";
  }

  static requestAdminPassword_() {
    return Displayer.inputField("🛡️ Enable Admin mode", "Insert admin password:");
  }

  static getAdminPassword_() {
    return PropertiesUserService.get("admin-password");
  }

  static disableAdminMode_() {
    Menu.delete("ADMIN");
    Admin.setAdminModeOff_();
    Displayer.system("Admin mode disabled successfully");
  }

  static enableAdminMode_(inputPassword) {
    if (Encryptor.hash(inputPassword) == Admin.getAdminPassword_()) {
      Menu.createAdminMenu();
      Admin.setAdminModeOn_();
      TriggerService.createOneTimeTriggerAfter('disableAdminModeTrigger', DurationTime.HALFHOUR);
      Displayer.system("👨🏻‍💻 Admin mode enabled successfully");
    } else {
      Displayer.warning("⛔ Admin mode rejected. Wrong password");
    }
  }
}
