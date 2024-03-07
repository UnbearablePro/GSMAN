class Formater {

    static setWrap(range, wrapType = SpreadsheetApp.WrapStrategy.WRAP) {
        // todo: see if wrapStrategy is not the best one
        range.setWrap(wrapType);
        SpreadsheetApp.WrapStrategy.WRAP;
    }

    static setTextDirection(range, direction) {
        range.setTextDirection(); // TODO
    }

    static setNumberFormat(range, numberFormat) {
        range.setNumberFormat(numberFormat);
    }

    static sentFontWeight() {

    }

    static setFormula() {

    }

    static setFontColor() {

    }

    static setFontFamilies() {

    }

    static setFontLine() {

    }

    static sentFontSize() {

    }

    static getFontFamilies() {

    }

    static getHeight() {

    }

    static getBanding(range) {
        return range.getBanding(); // TODO: Maybe i can copy custom bandings
    }

    static copyFormatToRange(sheet, column, columnEnd, row, rowEnd) {
        //TODO: Good for implementing copy paste template of the sheet
    }

    static copyTo(destination) {
        //TODO: Same with copyFromatToRange
    }

    static clearFormat(range) {
        range.clearFormat();
    }

    static changeColors(range, fontColor, backgroundColor) {
        range.setFontColor(fontColor);
        range.setBackground(backgroundColor)
      }
    
      static setBorderStyle(range, left, bottom, right, vertical, horizontal, color = ColorPallet.BLACK, style = SpreadsheetApp.BorderStyle.SOLID) {
        range.setBorderStyle(left, bottom, right, vertical, horizontal, color, style);
      }
    
      static deleteBorderStyle(range) {
        range.setBorderStyle(null, null, null, null, null, null, null);
      }

}