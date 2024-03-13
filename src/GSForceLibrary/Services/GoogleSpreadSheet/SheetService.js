class AbstractSheetService {

  constructor() {
    throw new Error("SheetController cannot be createt. Reason: SheetController is a static abstract class.");
  }

  static initialize() { };

  static getSheetName() {
    this.initialize();
    return this.sheet.getSheetName();
  }

  static getValue(row, column) {
    this.initialize();
    return this.sheet.getRange(row, column).getValue();
  }

  static getValues(rows, columns) {
    this.initialize();
    return this.sheet.getRange(rows, columns).getValues();
  }

  static getCurrentCell() {
    this.initialize();
    return this.sheet.getCurrentCell();
  }

  static getCurrentRowIndex() {
    this.initialize();
    return this.sheet.getCurrentCell().getRowIndex();
  }

  static getCurrentColumnIndex() {
    this.initialize();
    return this.sheet.getCurrentCell().getColumnIndex();
  }

  static getLastRowIndex() {
    this.initialize();
    return this.sheet.getLastRow();
  }

  static getLastColumnIndex() {
    this.initialize();
    return this.sheet.getLastColumn();
  }

  // FIXME: this
  static getDataFromColumns(startColumn, endColumn) {
    this.initialize();
    return this.sheet.getRange(startColumn + ":" + endColumn).getValues();
  }

  static getRowData(row) {
    this.initialize();
    return this.sheet.getRange(parseInt(row), 1, 1, this.sheet.getLastColumn()).getValues();
  }

  static getColData(col) {
    this.initialize();
    return this.sheet.getRange(1, parseInt(col), this.sheet.getLastRow(), 1).getValues();
  }

  static getSheet() {
    this.initialize();
    return this.sheet;
  }

  static isActive() {
    return SpreadSheetService.isSheetOpened(this.name);
  }

  static isCursorInDataRange(startRow = 1, endRow = this.getLastRowIndex(), startCol = 1, endCol = this.getLastColumnIndex()) {
    this.initialize();
    let currentRowIndex = this.getCurrentRowIndex();
    let currentColumnIndex = this.getCurrentColumnIndex();

    return (currentRowIndex >= startRow && currentRowIndex <= endRow && currentColumnIndex >= startCol && currentColumnIndex <= endCol);
  }

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

  static setColumnWidth(col, width) {
    this.initialize();
    if (width == null) {
      this.sheet.autoResizeColumn(col);
    } else {
      this.sheet.setColumnWidth(col, width)
    }
  }

  static setRowWidth(row, width) {
    this.initialize();
    if (width == null) {
      this.sheet.autoResizeRow(row);
    } else {
      this.sheet.setRowWidth(row, width)
    }
  }

  static appendRow(rowData) {
    this.initialize();
    this.sheet.appendRow(rowData);
  }

  static setDataValidation(range, validationList) {
    range.setDataValidation(SpreadSheetService.createValidation(validationList));
  }
  
  static deleteColumn(column) {
    this.initialize();
    this.sheet.deleteColumn(column);
  }

  static deleteRow(row) {
    this.initialize();
    this.sheet.deleteRow(row);
  }

}

