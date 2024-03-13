class ReminderHandler {

    static openReminder() {
        ReminderService.openReminderFromStatusEvent();
    }

    static setReminder(index, type, date, hour, details, reminder) {
        try {
            ReminderService.setReminder(type, date, hour, details, reminder);
        } catch (e) {
            ErrorHandler.handleError(e);
        }
    }

    static setReminderFromStatusEvent(event, date, hour, details, reminder) {
        try {
            var c = Contact.getContactFrom(event.row);
            c.isLastInteractionThisWeek();
            ReminderService.setReminderFromStatusEvent(event, date, hour, details, reminder);
        } catch (e) {
            ContacteStatusService.restoreStatus(event);
            ErrorHandler.handleError(e);
        }
    }
}