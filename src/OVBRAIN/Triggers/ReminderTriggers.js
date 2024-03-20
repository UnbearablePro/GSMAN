function openReminderTriggerForSelectedPersonTrigger() {
    ReminderHandler.openReminderForSelectedPerson();
}

function setReminderFromStatusEventTrigger(row, currentValue, lastValue, numePrenume, day, month, year, hour, minute, details) {
    ReminderHandler.setReminderFromStatusEvent(row, currentValue, lastValue, numePrenume, day, month, year, hour, minute, details);
}
function setReminderForSelectedPersonTrigger(row, currentValue, numePrenume, day, month, year, hour, minute, details) {
    ReminderHandler.setReminderForSelectedPerson(row, currentValue, numePrenume, day, month, year, hour, minute, details);
}