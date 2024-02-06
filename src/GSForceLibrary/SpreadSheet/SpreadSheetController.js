/**
 * ApplicationControl provides SpreadsheetApp functionality
 * 
 * @version
 * @lastModification
 */
class SpreadSheetController {

  /** Checks if the google spreadsheet is opened */
  static isUserOn() {
    if(SpreadsheetApp.getActiveSpreadsheet()){
      return true;
    } else {
      return false;
    }   
  }

  /** 
   * Checks if a specified sheet is opened 
   * 
   * @param {string} sheetName
  */
  static isSheetOpened(sheetName) {
    if (app.getActiveSheet().getName() == sheetName) {
      return true;
    } else {
      return false;
    }
  }
}

/** 
 * ActiveSpreadSheet 
 * ```
 * app=SpreadsheetApp.getActiveSpreadsheet();
 * 
 * ```
*/
var app = SpreadsheetApp.getActiveSpreadsheet();
