/**
 * Admin provides functionality to active admin mode
 */
// TODO: remake this
class Admin {
  /** private */
  constructor() {
    throw Error("You are not allowed to have an Admin object!");
  }

  // static requestAdminMode() {
  //   if (this.isAdminModeOn()) {
  //     UIUtils.system("Admin mode is already on.");
  //     return;
  //   }

  //   let inputPassword = this.requestAdminPassword_();
    
  //   if (Encryptor.hash(inputPassword) == this.getAdminPassword_()) {
  //     this.enableAdminMode_();
  //   } else {
  //     UIUtils.warning("Admin mode rejected. Wrong password");
  //   }
  // }

  // static setAdminModeOn() {
  //   PropertiesHandlerUser.setProperty("admin-mode","1");
  // }

  // static setAdminModeOff() {
  //   PropertiesHandlerUser.setProperty("admin-mode","0");
  // }
  
  // static isAdminModeOn() {
  //   return PropertiesHandlerUser.getProperty("admin-mode") == "1" ? true: false;
  // }

  // static disableAdminMode() {
  //   Menu.deleteAdminMenu();
  //   this.setAdminModeOff();
  //   UIUtils.system("Admin mode disabled successfully");
  // }

  // /** @private */
  // static requestAdminPassword_() {
  //   return UIUtils.inputField("Enable Admin mode", "Introdu parola de Admin:");
  // }
  // /** @private */
  // static getAdminPassword_() {
  //   return PropertiesHandlerUser.getProperty("admin-password");
  // }

  // /** private */
  // static enableAdminMode_() {
  //   Menu.createAdminMenu();
  //   this.setAdminModeOn();
  //   TriggersUtils.createAfterTimeTriggered(menuButtonDisableAdminMode, duration.HOURINMILLIS);
  //   UIUtils.system("Admin mode enabled successfully");
  // } 

}
