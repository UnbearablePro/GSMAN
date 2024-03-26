function openReminderForSelectedPersonTrigger() {
    ReminderHandler.openReminderForSelectedPerson();
}

function setReminderFromStatusEventTrigger(row, currentValue, oldValue, numePrenume, day, month, year, hour, minute, details) {
    ReminderHandler.setReminderFromStatusEvent(row, currentValue, oldValue, numePrenume, day, month, year, hour, minute, details);
}
function setReminderForSelectedPersonTrigger(row, currentValue, numePrenume, day, month, year, hour, minute, details) {
    ReminderHandler.setReminderForSelectedPerson(row, currentValue, numePrenume, day, month, year, hour, minute, details);
}