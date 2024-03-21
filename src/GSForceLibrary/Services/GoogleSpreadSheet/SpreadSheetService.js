class AbstractSpreadsheetService {

  static initialize() { };

  static getSheetByName(sheetName) {
    this.initialize();
    return this.spreadsheet.getSheetByName(sheetName);
  }

  static getActiveSpreadsheet() {
    return SpreadsheetApp.getActiveSpreadsheet();
  }

  static getCurrentSheetName() {
    return SpreadsheetApp.getActiveSpreadsheet().getSheetName();
  }

  static createValidation(validationList, isAllow = false) {
    return SpreadsheetApp.newDataValidation().requireValueInList(validationList).setAllowInvalid(isAllow).build();
  }

  static isUserOn() {
    if(SpreadsheetApp.getActiveSpreadsheet()){
      return true;
    } else {
      return false;
    }   
  }
  
  static isSheetOpened(sheetName) {
    if (SpreadsheetApp.getActiveSheet().getName() == sheetName) {
      return true;
    } else {
      return false;
    }
  }
}

AbstractSpreadsheetService.spreadsheet = null;


