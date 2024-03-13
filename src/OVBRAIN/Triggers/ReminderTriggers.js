function openReminderTrigger() {
    ReminderHandler.openReminder();
}

function programMeetingFromStatusEventTrigger(event, date, hour, details, reminder) {
    ReminderHandler.setReminderFromStatusEvent(event, date, hour, details, reminder);
}
function programMeetingTrigger(index, type, date, hour, details, reminder) {
    ReminderHandler.setReminder(index, type, date, hour, details, reminder);
}