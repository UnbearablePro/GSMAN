class TestUtils {

    static createTestSheet() {
        SpreadsheetApp.getActiveSpreadsheet().insertSheet(TESTGROUND_SHEETNAME);
        TestLogger.logProgress("Test Ground Sheet builded successfully");
    };

    static deleteTestSheet() {
        const testSheet = this.getTestSheet();
        if (testSheet != null) {
            SpreadsheetApp.getActiveSpreadsheet().deleteSheet(testSheet);
        }
        TestLogger.logProgress("Test Ground Sheet deleted successfully");
    };

    static clearTestSheet() {
        this.getTestSheet().getDataRange().clearContent();
        TestLogger.logProgress("Test Ground Sheet cleared successfully");
    };


    static getTestSheet() {
        return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(TESTGROUND_SHEETNAME);
    }
}