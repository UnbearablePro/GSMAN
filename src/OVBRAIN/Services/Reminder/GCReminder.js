class GCReminder {

  static createReminder(currentValue, c, numePrenume, day, month, year, hour, minute, details) {
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