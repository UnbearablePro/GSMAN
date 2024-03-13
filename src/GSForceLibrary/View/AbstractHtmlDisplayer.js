class AbstractHtmlDisplayer {

  static openHtmlPopup(htmlFileName, title, width = 500, height = 500, properties) {
    let template = this.getAndinsertPropertiesInTemplate(htmlFileName, properties);
    let html = HtmlService.createHtmlOutput(template.evaluate().getContent())
      .setWidth(width)
      .setHeight(height);
    SpreadsheetApp.getUi().showModalDialog(html, title);
  }

  static openHtmlPopupFree(htmlFileName, title, width = 500, height = 500, properties) {
    let template = this.getAndinsertPropertiesInTemplate(htmlFileName, properties);
    let html = HtmlService.createHtmlOutput(template.evaluate().getContent())
      .setWidth(width)
      .setHeight(height);
    SpreadsheetApp.getUi().showModelessDialog(html, title);
  }

  static openHtmlSidebar(htmlFileName, width = 500, height = 500, properties) {
    let template = this.getAndinsertPropertiesInTemplate(htmlFileName, properties);
    let html = HtmlService.createHtmlOutput(template.evaluate().getContent());
    SpreadsheetApp.getUi().showSidebar(html);
  }

  static getAndinsertPropertiesInTemplate(htmlFileName, properties = {}) {
    var template = HtmlService.createTemplateFromFile(htmlFileName);

    if (properties != null && properties.length > 0) {
      for (var key in properties) {
        template[key] = properties[key];
      }
    }
    return template;
  }

}