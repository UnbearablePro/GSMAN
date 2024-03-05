class Settings {

  static initialize() {
    if (this.prefference == null) {
      this.prefference = PropertiesScriptService.getAll();
    }
  }

  static getFlag(flag, defaultValue = null) {
    this.initialize();
    return DataUtils.getIfNotEmpty(this.prefference[flag], defaultValue);
  }

  static isSentMailAutomaticalyToDeveloperWhenErrorOccursOn() {
    return this.getFlag("isSentMailAutomaticalyToDeveloperWhenErrorOccursOn", false);
  }

  static isActiveErrorHandlingOn() {
    return this.getFlag("isActiveErrorHandlingOn", false);
  }

  static updateSettings(settingsList) {
    PropertiesScriptService.setByList(settingsList);
  }

}