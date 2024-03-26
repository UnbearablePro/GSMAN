class CentralizareEvenimenteSheet extends AbstractSheetService {

    static initialize() {
        if (DataUtils.isEmpty(CentralizareEvenimenteSheet.sheet)) {
            this.sheet = OVDATASpreadsheet.getSheetByName(SheetNames.CENTRALIZARE_EVENIMENTE);
        }
    }

    static createSnapShot(eventId, tipEveniment, dataEveniment, ora, minute, nume, telefon, detalii) {
        Lug.build(`Creating event snapshot in progress...`);
        var snapshot = [
            eventId,
            tipEveniment,
            RomanianDatesMapper.toRomanianDateFormat(new Date()),
            RomanianDatesMapper.toRomanianDateFormat(dataEveniment),
            TimeMapper.converHourAndMinuteToClockFormat(ora, minute),
            CentralizareEvenimenteStatus.IN_ASTEPTARE,
            nume,
            telefon,
            detalii
        ];

        this.appendSnapshot(snapshot);
        Lug.progress(`Successfully created event snapshot with values: ${snapshot}`);
    }

    static appendSnapshot(snapshot) {
        CentralizareEvenimenteSheet.appendRow(snapshot);
    }

}