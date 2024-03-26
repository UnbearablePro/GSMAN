class OVBRAINSpreadsheet extends AbstractSpreadsheetService {
    
    static initialize() {
        if (DataUtils.isEmpty(OVBRAINSpreadsheet.spreadsheet)) {
            this.spreadsheet = SpreadsheetApp.openById(SpreadSheetIds.OVBRAIN);
        }
    }

}