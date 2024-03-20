class ReminderHandler {


    static setReminderFromStatusEvent(row, currentValue, lastValue, date, hour, details, reminder) {
        try {
            ReminderService.setReminderFromStatusEvent(row, currentValue, lastValue, date, hour, details, reminder);
        } catch (e) {
            let event = {
                oldValue: lastValue,
                range: ContacteSheet.getRange(row, ContacteHeaders.STATUS)
            };
            ContacteStatusService.restoreStatus(event);
            ErrorHandler.handleError(e);
        }
    }

    static programReminderForSelectedPerson(row, currentValue, numePrenume, day, month, year, hour, minute, details) {
        try {
            ReminderService.setReminderForSelectedPerson(row, currentValue, numePrenume, day, month, year, hour, minute, details);
        } catch (e) {
            ErrorHandler.handleError(e);
        }
    }
}