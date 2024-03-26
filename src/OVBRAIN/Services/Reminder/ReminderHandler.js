class ReminderHandler {

    static openReminderForSelectedPerson() {
        ReminderService.openReminderForSelectedPerson();
    }

    static setReminderFromStatusEvent(row, currentValue, oldValue, numePrenume, day, month, year, hour, minute, details) {
        try {
            ReminderService.setReminderFromStatusEvent(row, currentValue, oldValue, numePrenume, day, month, year, hour, minute, details);
        } catch (e) {
            const range = ContacteSheet.getRange(row, ContacteHeaders.STATUS);
            const userEvent = new UserEvent(range, oldValue, currentValue, row, ContacteHeaders.STATUS);
            
            ContacteStatusService.cancelStatusForm(userEvent);
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