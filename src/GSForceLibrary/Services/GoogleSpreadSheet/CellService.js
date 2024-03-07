function playGround() {
  
  // let range = sheet.getRange(2,2);
  // let bigRange = sheet.getRange(2,3, 7, 9);
  // CellService.clearFormat(bigRange);
  // CellService.activate(bigRange);
  // CellService.applyBinding(bigRange, SpreadsheetApp.BandingTheme.BLUE);
  // CellService.clearFormat(bigRange);
  CellService.expandGroups(bigRange);
  // console.log(bigRange.getA1Notation());
  // console.log(CellService.getDataSourceUrl(bigRange));
  // const dataTable = bigRange.getDataTable();
  // console.log(bigRange.getDataTable());
  // const chart = Charts.newBarChart()
  //                 .setDataTable(dataTable)
  //                 .setOption('title', 'Your Chart Title Here')
  //                 .build();
  // sheet.newChart().addRange();
  bigRange.shiftColumnGroupDepth(1);
  // var italic = SpreadsheetApp.newTextStyle()
    
  //   .build();
  // SpreadsheetApp.newRichTextValue().setText("dasda").setTextStyle("adasdas").build(); // TODO: FOr linked texts
}
// sheet.setColumnWidth(1, 100);

/**
 * the best thing could be to make a template for formats and apply the format on their nextWich text or nextTest style
 */
class CellService extends Formater {

  static sort(){
    //TODO:
  };

  static splitTextToColumns(range, delimiter) {
    range.splitTextToColumns(delimiter);
  };

  static trimWhitespace(range) {
    range.trimWhitespace(); // better implemented on sheet
  }

  static shiftColumnGroupDepth() {
    //TODO:
  }

  

  static setShowHyperlink(showHyperlink) {

  }

  static setNotes(range, notes) {
    range.setNote(notes);
  }

  static clearNotes(range) {
    range.setNote();
  }


  static insertCells() {

  }


  static setDataValidation() {

  }

  static setDataValidations() {

  }

  static insertCheckboxes() {

  }

  static randomize() {

  }

  static merge() {

  }

  static mergeVerically() {

  }

  static protect() {

  }

  static isBlank() {

  }

  static isChecked() {

  }

  static activate(range) {
    range.activate();
  }

  static getSheet(range) {

  }

  static getMergedRanges() {

  }

  static getFilter(range) {
    
  }

  

  static createFilter(range) {
    
  }

  static getDataSourceUrl(range) {
    return range.getDataSourceUrl();
  }

  static getA1Notation(range) {
    return range.getA1Notation();
  }

  static expandGroups(range) {
    range.expandGroups();
  };

  static deleteCells(shiftDimension) {
    // TODO: Maybe better in sheet manager
  }

  static copyFormatToRange(sheet, column, columnEnd, row, rowEnd) {
    //TODO: Good for implementing copy paste template of the sheet
  }

  static copyTo(destination) {
    //TODO: Same with copyFromatToRange
  }

  static createDataSourcePivotTable(dataSource) {
    //TODO: Learn if pivot table are good
  }
 
  static collapseGroups(range) {
    range.collapseGroups();
  }

  static applyBinding(range, bandingTheme, showHeader = true, showFooter = false) {
    range.applyRowBanding(bandingTheme, showHeader, showFooter);
  }

  static clearFormat(range) {
    range.clearFormat();
  }

}