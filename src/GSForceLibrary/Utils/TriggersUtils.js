/**
 * TriggersUtils provides template triggers and active them.
 * 
 * @WYP
 * @version 0.0.1
 * @lastUpdate 18.11.2023
 */
class TriggersUtils {

  /**
   * Activate a cycle trigger every week by a specific day hour and minute
   * 
   * @param {string} functionName : string
   * @param {*} dayOfWeek : ScripApp.WeekDay
   * @param {number} hour : (default = 12) number
   * @param {number} minute : (default = 0) number
   * ```
   * .timeBased()
   * .onWeekDay(dayOfWeek)
   * .atHour(hour)
   * .nearMinute(minute)
   * ```
   */
  static createWeeklyTimeTrigger(functionName, dayOfWeek, hour = 12, minute = 0) {
    ScriptApp.newTrigger(functionName)
      .timeBased()
      .onWeekDay(dayOfWeek)
      .atHour(hour)
      .nearMinute(minute)
      .create();
    Logger.log(`Weekly time trigger created successfully with functionName: ${functionName}, dayOfWeek:${dayOfWeek}, hour:${hour}, minute:${minute}.`);
  }

  /**
   * Activate a cycle trigger that executes every specific minutes
   * 
   * @param {string} functionName : string
   * @param {number} everyMinutes : (default = 60) number
   * ```
   * .timeBased()
   * .everyMinutes(everyMinutes)
   * ```
   */
  static createEveryMinutesTimeTriggered(functionName, everyMinutes = 60) {
    ScriptApp.newTrigger(functionName)
      .timeBased()
      .everyMinutes(everyMinutes)
      .create();
    Logger.log(`Every minutes time trigger created successfully with functionName: ${functionName}, minute:${everyMinutes}.`);
  }
  
  /**
   * Create a time trigger that executes from now and after millis.
   * 
   * @param {string} functionName : string
   * @param {number} millis : (default = duration.HOURINMILLIS) number
   * ```
   * .timeBased()
   * .after(millis)
   * ```
   */
  static createAfterTimeTriggered(functionName, millis = duration.HOURINMILLIS) {
    ScriptApp.newTrigger(functionName)
      .timeBased()
      .after(millis)
      .create();
    Logger.log(`After time trigger created successfully with functionName: ${functionName}, millis:${everyMinutes}.`);
  }

  /**
   * Create a time trigger that executes when the user opens the spreadsheet aplication.
   * 
   * @param {string} functionName : string
   * ```
   * .timeBased()
   * .onOpen()
   * ```
   */
  static createOnOpenTrigger(functionName) {
    ScriptApp.newTrigger(functionName)
      .forSpreadsheet()
      .onOpen()
      .create();
    Logger.log(`On open trigger created successfully with functionName: ${functionName}.`);
  }

  /**
   * WYP
   */
  static createTimeOnOpenTrigger(functionName, date, hour, minute) {
    ScriptApp.newTrigger(functionName)
      .timeBased()
      .atDate(date)
      .create()
    // TODO Log entire trigger.
    Logger.log(" TimeTrigger created successfully");
  }

  /**
   * WYP
   */
  static deleteTrigger(functionName) {
    let triggers = ScriptApp.getProjectTriggers();
    for (let i = 0; i < triggers.length; i++) {
      if (triggers[i].getHandlerFunction() == functionName) {
        ScriptApp.deleteTrigger(triggers[i]);
        Logger.log("Trigger deleted successfully"); // TODO complete the logger
      }
    }
  }
  /**
   * WYP
   */
  static showAllTriggers() {
    let triggers = ScriptApp.getProjectTriggers();
    for (let i = 0; i < triggers.length; i++) {
      console.log(`
        Triggers unique id: ${triggers[i].getUniqueId()}
        Source: ${triggers[i].getTriggerSource()}
        Source id: ${triggers[i].getTriggerSourceId()}
        Event type:  ${triggers[i].getEventType()}
        Handler function: ${triggers[i].getHandlerFunction()}
      `);
    }
  }
}
