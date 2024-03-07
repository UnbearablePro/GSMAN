class SpreadSheetService {

  static getSheetByName(sheetName) {
    return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  }

  static removeMenu(menuName) {
    SpreadsheetApp.getActiveSpreadsheet().removeMenu(menuName);
  }

  static getActiveSpreadSheet() {
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


