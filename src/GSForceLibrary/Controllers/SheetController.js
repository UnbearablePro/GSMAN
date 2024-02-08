/** 
 * SheetController purpose is to provide utils for manipulating sheet operations 
 */
class SheetController {
  
  static getSheetByName(sheetName) {
    return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  }

  static setValue(sheet, value, row, column) {
    sheet.getRange(row, column).setValue(value);
  }

  static setValues(sheet, values, rows, columns) {
    sheet.getRange(rows, columns).setValues(values);
  }

  static getValue(sheet, row, column) {
    return sheet.getRange(row, column).getValue();
  }

  static getValues(sheet, rows, columns) {
    return sheet.getRange(rows, columns).getValues();
  }

  static appendRow(sheet, rowData) {
    sheet.appendRow(rowData);
  }

  static deleteColumn(sheet, column) {
    sheet.deleteColumn(column);
  }

  static deleteRow(sheet, row) {
    sheet.deleteRow(row);
  }
  // See differences between current and active
  static getCurrentCell(sheet) {
    return sheet.getCurrentCell();
  }

  // FIXME: this
  static getDataFromColumns(sheet, startColumn, endColumn) {
    return sheet.getRange(startColumn + ":" + endColumn).getValues();
  }

  static getRowData(sheet, row) {
    return sheet.getRange(parseInt(row), 1, 1, sheet.getLastColumn()).getValues();
  }

  static setDataValidation(range, referenceValueToSetValidators, getValidationRuleFunction) {
    range.setDataValidation(this.createValidation_(referenceValueToSetValidators, getValidationRuleFunction));
  }

  static createValidation_(refferenceValueToSetValidators, getValidationRuleFunction) {
    return SpreadsheetApp.newDataValidation().requireValueInList(getValidationRuleFunction(refferenceValueToSetValidators)).setAllowInvalid(false).build();
  }
  

  /** @private */
  constructor() {
    throw new Error("Sheets object cannot be created because it has only static fields.");
  }
}

