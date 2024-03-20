class CentralizareTellPartySheet extends AbstractSheetService {

    static initialize() {
        if (DataUtils.isEmpty(CentralizareTellPartySheet.sheet)) {
            this.sheet = SpreadsheetApp.openById(SpreadSheetIds.OVDATA).getSheetByName(SheetNames.CENTRALIZARE_TELLPARTY);
        }
    }

    static takeSnapshotFromProperties() {
        Lug.build(`Taking Tell party  snapshot in progress...`);

        let currentDate = LuxonDateTime.now();

        let startOfWeek = currentDate.startOf('week');
        let endOfWeek = startOfWeek.plus({ days: 7 });

        let properties = PropertiesDocumentService.getAll();

        let q = "Q" + startOfWeek.quarter;

        let snapshot = [];
        snapshot.push(q, DateTime.toRomanianFormat(startOfWeek), DateTime.toRomanianFormat(endOfWeek));
        for (let key in TellPartyProperties) {
            snapshot.push(properties[TellPartyProperties[key]]);
        }

        this.createSnapshot(snapshot);
        Lug.progress(`Successfully created TellParty snapshot with values: ${snapshot}`);
    }

    static createSnapshot(snapshot) {
        let row = this.checkIfAlreadyExists(snapshot[1]);

        if (row) {
            let stringsSnapshot = [];
            stringsSnapshot[0] = StringUtils.convertFromNumberArrayToStringArray(snapshot);
            CentralizareTellPartySheet.setValues(stringsSnapshot, row, snapshot.length);
        } else {
            CentralizareTellPartySheet.appendRow(snapshot);
        }
    }

    static checkIfAlreadyExists(startDateToCheck) {
        let colValues = this.getColData(CentralizareHeaders.STARTDATE);

        for (let i = 1; i < colValues.length; i++) {
            if (DateTime.areEqualsDates(colValues[i][0], startDateToCheck)) {
                Lug.info(`TellParty snapshot already exists on row ${i}`);
                return i + 1;
            }
        }

        return 0;
    }

}