/** 
 * TextUtils provides functionality to deal with text manipulation. 
 * 
*/
class TextUtils {

  /**
   * Has the purpose to change color in a range.
   * 
   * @param  range : Range
   * @param {string} fontColor : string
   * @param {string} backgroundColor : string
   */
  static changeColors(range, fontColor, backgroundColor) {
    range.setFontColor(fontColor);
    range.setBackground(backgroundColor)
  }
}