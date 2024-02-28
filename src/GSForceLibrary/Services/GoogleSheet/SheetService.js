class AbstractSheetService {

  constructor() {
    throw new Error("SheetController cannot be createt. Reason: SheetController is a static abstract class.");
  }

  static initialize () {};

  static setValue(value, row, column) {
    this.initialize();
    this.sheet.getRange(row, column).setValue(value);
  }

  /**
   * 
   * @param {String[][]} values 
   * @param {Number} rows 
   * @param {Number} columns 
   */
  static setValues(values, rows, columns) {
    this.initialize();
    this.sheet.getRange(rows, columns).setValues(values);
  }

  static getValue(row, column) {
    this.initialize();
    this.sheet.getRange(row, column).getValue();
  }

  static getValues(rows, columns) {
    this.initialize();
    this.sheet.getRange(rows, columns).getValues();
  }

  static appendRow(rowData) {
    this.initialize();
    this.sheet.appendRow(rowData);
  }

  static deleteColumn(column) {
    this.initialize();
    this.sheet.deleteColumn(column);
  }

  static deleteRow(row) {
    this.initialize();
    this.sheet.deleteRow(row);
  }

  static getCurrentCell() {
    this.initialize();
    return this.sheet.getCurrentCell();
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

  
}

