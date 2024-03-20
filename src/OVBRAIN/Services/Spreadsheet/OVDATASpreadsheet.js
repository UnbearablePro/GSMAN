class OVDATASpreadsheet extends AbstractSpreadSheetService {
    
    static initialize() {
        if (DataUtils.isEmpty(OVDATASpreadsheet.spreadsheet)) {
            this.spreadsheet = SpreadsheetApp.openById(SpreadSheetIds.OVDATA);
        }
    }

}