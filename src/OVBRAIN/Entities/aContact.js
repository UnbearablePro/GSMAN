class Contact {
    constructor(
        numePrenume,
        telefon,
        recomandator,
        status,
        data,
        detalii,
        profesie,
        documente,
        ultimaInteractiune
    ) {
        this.numePrenume = numePrenume;
        this.telefon = telefon;
        this.recomandator = recomandator;
        this.status = status;
        this.data = data;
        this.detalii = detalii;
        this.profesie = profesie;
        this.documente = documente;
        this.ultimaInteractiune = ultimaInteractiune;

    }

    static of(numePrenume, phoneNumber, recomandator, details) {
        return new Contact(numePrenume, phoneNumber, recomandator, ContacteStatus.NESUNAT, null, details, null, null, DateTime.toDay().toString());
    }

    isLastInteractionToday() {
        if (DataUtils.isEmpty(this.ultimaInteractiune)) {
            Lug.warning(`Cannot check if is last interaction day. Reason: Contact ${this.numePrenume} doesn't have ultima interactiune`);
            return false;
        }

        return DateTime.isToday(this.ultimaInteractiune).valueOf();
    }

    isLastInteractionThisWeek() {
        if (DataUtils.isEmpty(this.ultimaInteractiune)) {
            Lug.warning(`Cannot check if is last interaction week. Reason: Contact ${this.numePrenume} doesn't have ultima interactiune`);
            return false;
        }

        return DateTime.isThisWeek(this.ultimaInteractiune);
    }

    static getContactFrom(row = SpreadsheetApp.getCurrentCell().getRowIndex()) {

        let rowData = ContacteSheet.getRowData(row)[0];

        if (this.isContactValid_(rowData)) {
            return new this(
                rowData[ContacteHeaders.NUME_PRENUME - 1],
                rowData[ContacteHeaders.TELEFON - 1],
                rowData[ContacteHeaders.RECOMANDATOR - 1],
                rowData[ContacteHeaders.STATUS - 1],
                rowData[ContacteHeaders.DATA - 1],
                rowData[ContacteHeaders.DETALII - 1],
                rowData[ContacteHeaders.PROFESIE - 1],
                rowData[ContacteHeaders.DOCUMENT - 1],
                rowData[ContacteHeaders.ULTIMA_INTERACTIUNE - 1]);
        } else {
            Displayer.warning("Nu ati selectat o persoana din tabel.\n Selectati cu cursorul astfel incat celula sa fie marcata ca si selectata.");
            return undefined;
        }
    }

    static isContactValid_(rowData) {
        if (DataUtils.isEmpty(rowData[ContacteHeaders.NUME_PRENUME]) ||
            DataUtils.isEmpty(rowData[ContacteHeaders.TELEFON]) ||
            DataUtils.isEmpty(rowData[ContacteHeaders.RECOMANDATOR]) ||
            rowData[ContacteHeaders.NUME_PRENUME] == "NUME PRENUME") {
            return false
        } else {
            return true;
        }
    }

}
