class ReminderService {

  /**  
   * @param {UserEvent} event 
   */
  static openReminderFromStatusEvent(event) {
    let contact = Contact.getContactFrom(event.row);

    const properties = {
      numePrenume: contact.numePrenume,
      currentValue: event.value,
      oldValue: event.oldValue,
      row: event.row
    }

    const [httpName, title, width, height] = HtmlFiles.REMINDER_FROM_STATUS_EVENT;
    // @ts-expect-error
    Displayer.openHtmlPopup(httpName, title, width, height, properties);
  }

  static openReminderForSelectedPerson() {
    const currentCell = SpreadsheetApp.getActiveSpreadsheet().getCurrentCell();
    if (currentCell.getSheet().getName() != SheetNames.CONTACTE) {
      Displayer.warning("Nu se poate seta reminderul deoarece nu ati selectat un contact din sheet-ul Contacte");
      return;
    }

    const row = currentCell.getRow();
    if (row < ContacteIndex.STARTING_ROW) {
      Displayer.warning("Nu se poate seta reminderul deoarece nu ati selectat un contact din sheet-ul Contacte");
      return;
    }
    const contact = Contact.getContactFrom(row);

    const properties = {
      numePrenume: contact.numePrenume,
      currentValue: contact.status,
      row: row
    }

    const [httpName, title, width, height] = HtmlFiles.REMINDER_FOR_SELECTED_PERSON;

    // @ts-expect-error
    Displayer.openHtmlPopup(httpName, title, width, height, properties);
  }

  static setReminderFromStatusEvent(row, currentValue, lastValue, numePrenume, day, month, year, hour, minute, details) {
    Lug.build(`REMINDER: Start creating REMINDER from status event for ${numePrenume} on ${day}/${month}/${year} at ${hour}:${minute} ...`);

    const c = Contact.getContactFrom(row);
    if (c.numePrenume !=numePrenume) {
      throw Error(`Nume prenume from contact is not equal to nume prenume from html event: ${c.numePrenume} != ${numePrenume}`);
    }
    GCReminder.createReminder(currentValue, c, numePrenume, day, month, year, hour, minute, details);
    Lug.progress(`REMINDER : Google calendar reminder ${currentValue} for ${numePrenume} created`);

    ContacteStatusService.reminderResponse(c, currentValue, lastValue, row, JSDateUtils.createJSDateFromDateAndTime(day, month, year, hour, minute));
    
    Displayer.complete('Reminder created successfully');
  }

  static setReminderForSelectedPerson(row, currentValue, numePrenume, day, month, year, hour, minute, details) {
    Lug.build(`REMINDER: Start creating REMINDER for selectect person ${numePrenume} on ${day}/${month}/${year} at ${hour}:${minute} ...`);

    const c = Contact.getContactFrom(row);
    if (c.numePrenume !=numePrenume) {
      throw Error(`REMINDER: Nume prenume from contact is not equal to nume prenume from html event: ${c.numePrenume} != ${numePrenume}`);
    }

    GCReminder.createReminder(currentValue, c, numePrenume, day, month, year, hour, minute, details);
    Lug.progress(`REMINDER : Google calendar reminder ${currentValue} for ${numePrenume} created`);

    Displayer.complete('Reminder created successfully');
  }

}