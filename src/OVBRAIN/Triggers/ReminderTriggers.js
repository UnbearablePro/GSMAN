function openReminderTrigger() {
    ReminderHandler.openReminder();
}

function openReminderTriggerForSelectedPerson() {
    ReminderHandler.openReminderForSelectedPerson();
}

function programReminderFromStatusEventTrigger(row, currentValue, numePrenume, lastValue, date, hour, details, reminder) {
    ReminderHandler.setReminderFromStatusEvent(row, currentValue, numePrenume, lastValue, date, hour, details, reminder);
}
function programReminderForSelectedPersonTrigger(row, currentValue, numePrenume, day, month, year, hour, minute, details) {
    ReminderHandler.programReminderForSelectedPerson(row, currentValue, numePrenume, day, month, year, hour, minute, details);

}