class ReminderService {

    static openReminderFromStatusEvent(event) {
        let contact = Contact.getContactFrom(event.row);
        const [httpName, title, width, height] = HtmlFiles.REMINDER;

        const properties = {
            numePrenume : contact.numePrenume,
            telefon : contact.telefon,
            recomandator : contact.recomandator,
            event : event
        }
        // @ts-expect-error
        Displayer.openHtmlPopup(httpName, title, width, height, properties);
    }

    static setReminder(type, date, hour, details, reminder) {
        
    }

    static setReminderFromStatusEvent(event, date, hour, details, reminder) {
        
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