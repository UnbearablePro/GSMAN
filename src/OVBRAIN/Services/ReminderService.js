class ReminderService {

  /**  
   * @param {UserEvent} event 
   */
  static openReminderFromStatusEvent(event) {
    let contact = Contact.getContactFrom(event.row);

    const properties = {
      numePrenume: contact.numePrenume,
      currentValue: event.value,
      lastValue: event.oldValue,
      row: event.row
    }

    const [httpName, title, width, height] = HtmlFiles.REMINDER;
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
    Lug.build(`Setting reminder from status event for ${numePrenume} on ${day}/${month}/${year} at ${hour}:${minute} ...`);
    const c = Contact.getContactFrom(row);
    const jsDate = JSDateUtils.createJSDateFromDateAndTime(day, month, year, hour, minute);

    const gcEvent = GCEventBuilder.createCalendarEventFrom(null,
      this.createTitleForReminder_(numePrenume, currentValue),
      jsDate,
      DurationTime.REMINDER,
      this.createDetailsForReminder_(c.telefon, c.recomandator, c.detalii, c.profesie, c.ultimaInteractiune, details),
      GCEventReminders.REMINDER,
      ColorPallet.LIGHTGREEN
    );

    const eventId = GCEventService.createCalendarEvent(OVBCalendar.getCalendar(), gcEvent);

    CentralizareEvenimenteSheet.createSnapShot(eventId, CentralizareEvenimenteType.REMINDER, gcEvent.start, hour, minute, c.numePrenume, c.telefon, details);

    ContacteStatusService.reminderResponse(c, currentValue, lastValue, row);
    Lug.progress(`Reminder setted successfully!`);
  }

  static setReminderForSelectedPerson(row, currentValue, numePrenume, day, month, year, hour, minute, details) {
    Lug.build(`Setting reminder for selectect person ${numePrenume} on ${day}/${month}/${year} at ${hour}:${minute} ...`);
    const c = Contact.getContactFrom(row);
    const jsDate = JSDateUtils.createJSDateFromDateAndTime(day, month, year, hour, minute);

    const gcEvent = GCEventBuilder.createCalendarEventFrom(null,
      this.createTitleForReminder_(numePrenume, currentValue),
      jsDate,
      DurationTime.REMINDER,
      this.createDetailsForReminder_(c.telefon, c.recomandator, c.detalii, c.profesie, c.ultimaInteractiune, details),
      GCEventReminders.REMINDER,
      ColorPallet.LIGHTGREEN
    );

    const eventId = GCEventService.createCalendarEvent(OVBCalendar.getCalendar(), gcEvent);
    CentralizareEvenimenteSheet.createSnapShot(eventId, CentralizareEvenimenteType.REMINDER, gcEvent.start, hour, minute, c.numePrenume, c.telefon, details);

    Lug.progress(`Reminder setted successfully!`);
  }


  /** @private */
  static createTitleForReminder_(numePrenume, status) {
    status = DataUtils.getIfNotEmpty("Reminder");
    return status + " - " + numePrenume;
  }

  /** @private */
  static createDetailsForReminder_(telefon, recomandator, detalii, profesie, ultimaInteractiune, comments) {
    return '\n' + 'Comentarii: ' + comments + '\n' + 'Telefon: ' + telefon + '\n' + 'Recomandator: ' + recomandator + '\n' + 'Detalii: ' + detalii + '\n' + '  Profesie: ' + profesie + 'Data programarii: ' + ultimaInteractiune;
  }

}