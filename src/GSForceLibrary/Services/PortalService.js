class PortalService {

  static openNewTab(url, title) {
    let windowLaunch = HtmlService.createHtmlOutput('<script>window.open("' + url + '") ;google.script.host.close();</script>')
      .setWidth(700)
      .setHeight(5);
    SpreadsheetApp.getUi().showModelessDialog(windowLaunch, title);
  }
}