class TriggerService {

  static createOneTimeTriggerFromJSDate(functionName, atDate) {
    // atDate has to be js Date object with hour and minute builded in.
    // TODO: Part this functios into two, one with Date direct input and a Build JS Date input
    ScriptApp.newTrigger(functionName)
      .timeBased()
      .at(atDate)
      .create();

    //logs
  }

  static createOneTimeTrigger(functionName, atDate, hour, minute) {
    // atDate has to be js Date object with hour and minute builded in.
    // TODO: Part this functios into two, one with Date direct input and a Build JS Date input
    ScriptApp.newTrigger(functionName)
      .timeBased()
      .at(atDate)
      .create();

    //logs
  }

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
  static createRecurringWeeklyTimeTrigger(functionName, dayOfWeek, hour = 12, minute = 0) {
    ScriptApp.newTrigger(functionName)
      .timeBased()
      .onWeekDay(dayOfWeek) // se if js Date object is necessary
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

  //WORKS
  static createRecurringEveryMinutesTimeTriggered(functionName, everyMinutes) {
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
  static createOneTimeTriggerAfter(functionName, millis = DurationTime.HOURINMILLIS) {
    ScriptApp.newTrigger(functionName)
      .timeBased()
      .after(millis)
      .create();
    Logger.log(`After time trigger created successfully with functionName: ${functionName}, millis:${millis}.`);
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
  static createOnOpenSpreadsheetTrigger(functionName, spreadSheet) {
    ScriptApp.newTrigger(functionName)
      .forSpreadsheet(spreadSheet)
      .onOpen()
      .create();
    Logger.log(`On open trigger created successfully with functionName: ${functionName}.`);
  }

  static deleteTriggerFromFunction(functionName) {
    let triggers = ScriptApp.getProjectTriggers();
    for (let i = 0; i < triggers.length; i++) {
      if (triggers[i].getHandlerFunction() == functionName) {
        ScriptApp.deleteTrigger(triggers[i]);
        Logger.log("Trigger deleted successfully"); // TODO complete the logger
      }
    }
  }

  static deleteTriggerFromId(triggerId) {
    let triggers = ScriptApp.getProjectTriggers();
    for (let i = 0; i < triggers.length; i++) {
      if (triggers[i].getUniqueId() == triggerId) {
        ScriptApp.deleteTrigger(triggers[i]);
        Logger.log("Trigger deleted successfully"); // TODO complete the logger
      }
    }
  }

  static deleteAll() {
    let triggers = ScriptApp.getProjectTriggers();
    const nrOfTriggers = triggers.length;
    for (let i = 0; i < triggers.length; i++) {
      ScriptApp.deleteTrigger(triggers[i]);
    }
    Logger.log(`All triggers deleted successfully ${nrOfTriggers}`);
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
