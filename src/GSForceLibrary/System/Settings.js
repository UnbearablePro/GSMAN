class Settings {

  static initialize() {
    if (this.prefference == null) {
      this.prefference = PropertiesScriptService.getAll();
    }
  }

  static isSentMailAutomaticalyToDeveloperWhenErrorOccursOn() {
    this.initialize();
    return DataUtils.getIfNotEmpty(this.prefference.isSentMailAutomaticalyToDeveloperWhenErrorOccursOn);
  }

  static isActiveErrorHandlingOn() {
    this.initialize();
    return DataUtils.getIfNotEmpty(this.prefference.isActiveErrorHandlingOn);
  }

  static updateSettings(settingsList) {
    PropertiesScriptService.setByList(settingsList);
  }

}