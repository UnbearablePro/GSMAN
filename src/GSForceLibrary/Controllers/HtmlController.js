/**
 * HtmlCreator provides functionality for creating html outputs.
 * 
 * @version 1.0.0
 */

class HtmlController {
  
  static openHtmlPopup(htmlFileName, title,  width, height) {
    let html = this.createHtmlFromFile_(htmlFileName, width, height);
    SpreadsheetApp.getUi().showModalDialog(html, title);
  }

  static openHtmlPopupFree(htmlFileName, title, width, height) {
    let html = this.createHtmlFromFile_(htmlFileName, width, height);
    SpreadsheetApp.getUi().showModelessDialog(html, title);
  }

  static openHtmlSidebar(htmlFileName, title, width, height) {
    let html = this.createHtmlFromFile_(htmlFileName, width, height);
    SpreadsheetApp.getUi().showSidebar(html);
  }

  /**
   * Creates a html output
   * 
   * @param {string} htmlFileName
   * 
   * @param {number} width : Width of html pop-up
   * @param {number} height : Height of html pop-up
   * @return HtmlOutput object
   */
  static createHtmlFromFile_(htmlFileName, width = 500, height = 500) {
    return HtmlService.createHtmlOutputFromFile(htmlFileName)
      .setWidth(width)
      .setHeight(height);
  };
}