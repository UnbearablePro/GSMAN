class ContacteFormater {

    static formatDateColumn() {
        ContacteSheet.initialize();
        let range = ContacteSheet.sheet.getRange(ContacteIndex.STARTING_ROW + 1, ContacteHeaders.DATA, ContacteSheet.getLastRowIndex() - ContacteIndex.STARTING_ROW, 1);
        range.setNumberFormat(`DDDD, dd/MM/yyyy hh:mm`);
    }

    static conditionalFormatTelefonColumn() {
        let telefonColumnRange = ContacteSheet.sheet.getRange(ContacteIndex.STARTING_ROW + 1, ContacteHeaders.TELEFON, ContacteSheet.getLastRowIndex() - ContacteIndex.STARTING_ROW, 1);
        const rule = SpreadsheetApp.newConditionalFormatRule()
            // .whenDateBefore(new Date()) //todo: implement this
            .setBackground(ColorPallet.RED)
            .setRanges([telefonColumnRange])
            .build();

        this.pushConditionalFormatRule(rule);
    }

    static conditionalFormatDateColumn() {
        let dateColumnRange = ContacteSheet.sheet.getRange(ContacteIndex.STARTING_ROW + 1, ContacteHeaders.DATA, ContacteSheet.getLastRowIndex() - ContacteIndex.STARTING_ROW, 1);
        const rule = SpreadsheetApp.newConditionalFormatRule()
            .whenDateBefore(new Date())
            .setBackground(ColorPallet.GREY)
            .setRanges([dateColumnRange])
            .build();

        this.pushConditionalFormatRule(rule);
    }

    static pushConditionalFormatRule(rule) {
        var rules = ContacteSheet.sheet.getConditionalFormatRules();

        rules.push(rule);
        ContacteSheet.sheet.setConditionalFormatRules(rules)
    }
}