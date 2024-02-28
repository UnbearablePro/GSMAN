function callButtonUpdateSettings() {
  Logger.log("Update Settings button pressed!");
  try {
    SettingsOVB.updateSettings();
  } catch (e) {
    ErrorHandler.handleError(e);
  }
}