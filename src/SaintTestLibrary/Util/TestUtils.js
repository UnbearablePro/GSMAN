class TestUtils {

    static createTestSheet() {
        SpreadsheetApp.getActiveSpreadsheet().insertSheet(TESTGROUND_SHEETNAME);
    };

    static deleteTestSheet() {
        var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
        SpreadsheetApp.getActiveSpreadsheet().deleteSheet(this.getTestSheet());
    };

    static clearTestSheet() {
        this.getTestSheet().getDataRange().clearContent();
    };

    static getTestSheet() {
        return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(TESTGROUND_SHEETNAME);
    }
}