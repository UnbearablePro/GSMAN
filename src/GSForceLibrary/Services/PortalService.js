/** 
 * Portal purpose is to handle openning new browser tabs.
 * 
 * @version 1.0.0
 */
class PortalService {

  static openNewTab(url, title) {
    HtmlController.createHtml('<script>window.open("' + url + '") ;google.script.host.close();</script>', 700, 5, title);
  }
}