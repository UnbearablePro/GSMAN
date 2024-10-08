class GCMeeting {

    static createMeeting(meetingType, c, numePrenume, day, month, year, hour, minute, description) {
      const jsDate = JSDateUtils.createJSDateFromDateAndTime(day, month, year, hour, minute);
  
      const gcEvent = GCEventBuilder.createCalendarEventFrom(null,
        this.createTitleForMeeting_(numePrenume, meetingType),
        jsDate,
        DurationTime.ONEHOUR,
        this.createDetailsForMeeting_(c.telefon, c.recomandator, c.detalii, c.profesie, c.ultimaInteractiune, description),
        GCEventReminders.REMINDER,
        ColorPallet.BLUE
      );
  
      const eventId = GCEventService.createCalendarEventFromGCEvent(OVBCalendar.getCalendar(), gcEvent);
  
      CentralizareEvenimenteSheet.createSnapShot(eventId, CentralizareEvenimenteType[meetingType.toUpperCase()], gcEvent.start, hour, minute, c.numePrenume, c.telefon, description);
    }
  
    /** @private */
    static createTitleForMeeting_(numePrenume, status) {
      status = DataUtils.getIfNotEmpty("Reminder");
      return status + " - " + numePrenume;
    }
  
    /** @private */
    static createDetailsForMeeting_(telefon, recomandator, detalii, profesie, ultimaInteractiune, comments) {
      return '\n' + 'Comentarii: ' + comments + '\n' + 'Telefon: ' + telefon + '\n' + 'Recomandator: ' + recomandator + '\n' + 'Detalii: ' + detalii + '\n' + '  Profesie: ' + profesie + 'Data programarii: ' + ultimaInteractiune;
    }
  
  }