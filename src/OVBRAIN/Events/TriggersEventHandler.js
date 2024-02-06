function reminderTrigger() {

}

function meetingTrigger(functionName) {
  TriggersUtils.createOnOpenTrigger(functionName);
}

function weeklyTrigger(functionName, dayOfWeek, hour, minutes) {
  TriggersUtils.createWeeklyTimeTrigger(functionName, dayOfWeek, hour, minutes);
}

function setMotivationalTriggerCycle() {
  // TODO
}