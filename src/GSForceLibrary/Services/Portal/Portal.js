/** 
 * Portal purpose is to handle openning new browser tabs.
 * 
 * @version 1.0.0
 */
class Portal {

  static openNewTab(url, title) {
    HtmlUtils.createHtml('<script>window.open("' + url + '");google.script.host.close();</script>', 700, 5, title);
  }
}