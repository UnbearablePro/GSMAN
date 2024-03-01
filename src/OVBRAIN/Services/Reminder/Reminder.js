class Reminder {

  static createReminderRequest() {
    Displayer.openHtmlPopup(Displayer.fileName.Reminder, 400, 500, "Seteaza reminder in calendar");
  }

  static createReminderRequestForSelectedPerson() {
    if(SupplierUtils.checkPersonSupplierIntegrity()) {
        Displayer.openHtmlPopup(Displayer.fileName.ReminderForSelectedPerson, 400, 500, "Seteaza reminder in calendar");
    } else {
      UIUtils.recommend("Fiti siguri ca ati selectat o persoana din tabel si campurile urmatoare nu sunt goale: \n {Nume Prenume} \n {Telefon} \n {Recomandator}");
    }
  }

  /** 
   * Create a reminder for a selected person from contacte sheet. 
   * 
   * @param {string} [title="Reminder"]
   * @param {string} description
   * @param {Date|string} date
   * @param {number} [durationTime = duration.REMINDER] - default 1 second
   * @param {object} person
  */
  static createReminderForSelectedPerson(title = "Reminder", date, person, comments = "", durationTime = duration.REMINDER) {

    // @TODO Refa asta in interiorul HTML-ului
    title = this.createTitleForReminder_(person.numePrenume, person.status);
    let description = this.createDetailsForReminder_(person.telefon, person.recomandator, person.detalii, person.profesie, person.ultimaInteractiune, comments);

    OVBCalendar.createCalendarEvent(title, date, description, durationTime);
    // BIG @TODO
    UIUtils.complete(title);
    UIUtils.complete("Reminder-ul s-a setat cu success pentru: \n" +
    + title.toString() + "\n"
    + date);
  }

  /**
   * Create an empty reminder.
   * 
   * @param {string} [title="Reminder"]
   * @param {string} description
   * @param {Date|string} date
   * @param {number} [durationTime = duration.REMINDER] - default 1 second
   */
  static createReminder(title = "Reminder", description, date, durationTime = duration.REMINDER) {
    OVBCalendar.createCalendarEvent(title, description, date, durationTime);
  }

  

  /** @private */
  static createTitleForReminder_(numePrenume, status) {
    return status + " - " + numePrenume;
  }

  /** @private */
  static createDetailsForReminder_(telefon, recomandator, detalii, profesie, ultimaInteractiune, comments) { 
    return '\n' + 'Comentariu' + comments + '\n' + 'Telefon: ' + telefon + '\n' + 'Recomandator: ' + recomandator + '\n' + 'Detalii: ' + detalii + '\n' + '  Profesie: '  + profesie + 'Data programarii: ' + ultimaInteractiune;
  }
}