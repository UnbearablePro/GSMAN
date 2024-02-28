class SettingsOVB {

  static checkflagContacteAutocomplete() {
    return Settings.checkFlag("flagContacteAutocomplete");
  }

  static checkflagFreezeHeaders() {
    return Settings.checkFlag("flagFreezeHeaders");
  }

  static checkflagSendMailWhenErrorOccurs() {
    return Settings.checkFlag("flagSendMailWhenErrorOccurs");
  }


  static updateSettings() {
    Settings.updateSettings(this.getAllSettingsFromSheet());
    UIUtils.system("Settings updated successfully!")
  }

  static getAllSettingsFromSheet() {
    var values = SheetsController.getDataFromColumns(SheetsController.getSheetByName("Setari",), "A", "B");

    values = DataUtils.mapArrayIntoKeyValueObject(values);
    Logger.log("Settings extracted from sheet:");
    Logger.log(values);

    return values;
  }

  static deleteAll() {
    var settingsArray = this.getAllSettingsFromSheet();
    Object.keys(settingsArray).forEach(k => {
      PropertiesHandlerUser.deleteProperty(k);
    })
  }
}


function tta() {
  SettingsOVB.deleteAll();
}