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

  static updateSettings(settingsList) {
    PropertiesScriptService.setByList(settingsList);
  }

}
Settings.prefference = null;