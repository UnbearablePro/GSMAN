class OVDATASpreadsheet extends AbstractSpreadsheetService {
    
    static initialize() {
        if (DataUtils.isEmpty(OVDATASpreadsheet.spreadsheet)) {
            this.spreadsheet = SpreadsheetApp.openById(SpreadSheetIds.OVDATA);
        }
    }

}