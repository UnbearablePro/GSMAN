function playGround() {
  SpreadsheetApp.getUi();
  ReminderService.setReminderForSelectedPerson(16, "Nesunat", "Marian", 17, 3, 2024, 12, 0, "Detalii suplimentare");
  //chagned
  return true;
}

/** @private */
function checkApplicationCompile_() {
  console.log("Compiled successfully");
}
