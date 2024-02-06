/** 
 * TextUtils provides functionality to deal with text manipulation. 
 * 
 * @version 0.0.1
 * @lastUpdate 18.11.2023
*/
class CellManipulator {

  /**
   * Has the purpose to change color in a range.
   * TODO: Give Range class correction
   * @param {*} range : Range
   * @param {string} fontColor : string
   * @param {string} backgroundColor : string
   */
  static changeColors(range, fontColor, backgroundColor) {
    range.setFontColor(fontColor);
    range.setBackground(backgroundColor)
  }

  static setBorderStyle(range) {
    // TODO - https://developers.google.com/apps-script/reference/spreadsheet/border-style

  }

  static pasterFormat() {
    // TODO - https://developers.google.com/apps-script/reference/spreadsheet/copy-paste-type
  }
}