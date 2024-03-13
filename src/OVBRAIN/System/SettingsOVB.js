class SettingsOVB extends Settings {

  static isflagContacteAutocomplete() {
    return this.getFlag("flagContacteAutocomplete", false);
  }

  static isFlagFreezeHeaders() {
    return this.getFlag("flagFreezeHeaders");
  }

  static isQuoteServiceOn() {
    return this.getFlag("quoteService", true);
  }

  static updateSettings(listOfSettings = this.getAllSettingsFromSheet()) {
    Settings.updateSettings(listOfSettings);
    Displayer.system("Settings updated successfully!")
  }

  static getAllSettingsFromSheet() {
    let values = SettingsSheet.getDataFromColumns("A", "B"); // TODO: Convert into SettingsHeaders
    return DataUtils.mapArrayIntoKeyValueObject(values);
  }

  static isSentMailAutomaticalyToDeveloperWhenErrorOccursOn() {
    return this.getFlag("isSentMailAutomaticalyToDeveloperWhenErrorOccursOn", false);
  }

  static isActiveErrorHandlingOn() {
    return this.getFlag("isActiveErrorHandlingOn", false);
  }

}