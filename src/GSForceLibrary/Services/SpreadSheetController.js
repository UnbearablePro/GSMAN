class SpreadSheetService {

  static getSheetByName(sheetName) {
    return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  }

  static getCurrentSheetName() {
    return SpreadsheetApp.getActiveSpreadsheet().getSheetName();
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


