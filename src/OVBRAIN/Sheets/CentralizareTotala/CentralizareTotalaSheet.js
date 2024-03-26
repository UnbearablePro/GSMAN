class CentralizareTotalaSheet extends AbstractSheetService {

    static initialize() {
        if (DataUtils.isEmpty(CentralizareTotalaSheet.sheet)) {
            this.sheet = OVDATASpreadsheet.getSheetByName(SheetNames.CENTRALIZARE_TELLPARTY);
        }
    }

    // static takeQSnapshot() {
       
    // }

    // static createSnapshot(snapshot) {
    //     let row = this.checkIfAlreadyExists(snapshot[1]);

    //     if (row) {
    //         // CentralizareSaptamanalaSheet.setValues(snapshot, )
    //     } else {
    //         CentralizareTotalaSheet.appendRow(snapshot);
    //     }
    // }

    // static checkIfAlreadyExists(startDateToCheck) {
    //     let colValues = this.getColData(2);

    //     for (let i = 0; i < colValues.length; i++) {
    //         if (colValues[i][0] == startDateToCheck) {
    //             return i + 1;
    //         }
    //     }

    //     return 0;
    // }
}