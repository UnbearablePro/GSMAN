class ReminderHandler {

    static openReminderForSelectedPerson() {
        ReminderService.openReminderForSelectedPerson();
    }

    static setReminderFromStatusEvent(row, currentValue, lastValue, numePrenume, day, month, year, hour, minute, details) {
        try {
            ReminderService.setReminderFromStatusEvent(row, currentValue, lastValue, numePrenume, day, month, year, hour, minute, details);
        } catch (e) {
            let event = {
                oldValue: lastValue,
                range: ContacteSheet.getRange(row, ContacteHeaders.STATUS)
            };
            ContacteStatusService.restoreStatus(event);
            ErrorHandler.handleError(e);
        }
    }

    static setReminderForSelectedPerson(row, currentValue, numePrenume, day, month, year, hour, minute, details) {
        try {
            ReminderService.setReminderForSelectedPerson(row, currentValue, numePrenume, day, month, year, hour, minute, details);
        } catch (e) {
            ErrorHandler.handleError(e);
        }
    }
}