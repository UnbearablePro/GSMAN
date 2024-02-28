class GCService {

    static getAllOwnedCalendars() {
      return CalendarApp.getAllOwnedCalendars();
    }
  
    static deleteAllOwnedCalendars() {
      var ownedCalendars = this.getAllOwnedCalendars();
  
      if (DataUtils.isNotEmpty(ownedCalendars)) {
        for (var i = 0; i < ownedCalendars.length; i++) {
          ownedCalendars[i].deleteCalendar();
          Lug.info(`Calendar ${ownedCalendars[i].getName()} deleted successfully`);
        }
        Lug.progress(`All ${ownedCalendars.length} calendars deleted successfully`);
      } else {
        Lug.warning(`No calendar found to delete`);
      }
    }
  
    static getCalendar(calendarName) {
      if (DataUtils.isNotEmpty(calendarName)) {
        var calendar = CalendarApp.getCalendarsByName(calendarName);
  
        if (DataUtils.isNotEmpty(calendar)) {
          Lug.progress(`Google calendar <${calendarName}> retrieved successfully`);
        } else {
          Lug.warning(`Calendarul <${calendarName}> nu exista!`);
        }
        return calendar[0];
      }
    }
  
    static createCalendar(calendarName, calendarColor = ColorPallet.BLUE) {
      let calendar = CalendarApp.createCalendar(calendarName).setColor(calendarColor);
      if (DataUtils.isNotEmpty(calendar)) {
        Displayer.complete(`S-a creat cu succes calendarul ${calendarName}!`);
        return calendar;
      } else {
        Displayer.problem(`Nu s-a putut crea calendarul ${calendarName}!`);
        throw Error(`Could not create calendar: <${calendarName}>`);
      }
    }
  
    static deleteCalendar(calendar) {
      if (DataUtils.isEmpty(calendar)) {
        Lug.warning(`Calendar not found.`)
      } else {
        calendar.deleteCalendar();
        Lug.info(`Google calendar <${calendar.getName()}> deleted successfully`);
      }
    }
    static getCalendarOrCreate(calendarName) {
      let calendar = this.getCalendar();
      if (DataUtils.isEmpty(calendar)) {
        if (Displayer.ask(`Calendarul ${calendarName} nu a fost gasit. Doriti sa creati automat acest calendar?`)) {
          return this.createCalendar();
        } else {
          throw Error(`Google calendar: <${calendarName}> is missing`);
        }
      } else {
        return calendar;
      }
    }
  
    static getAndDelete(calendarName) {
      if (DataUtils.isEmpty(calendarName)) {
        throw ReferenceError('Calendar name is not provided for deletion');
      }
      let calendar = this.getCalendar(calendarName);
      this.deleteCalendar(calendar);
    }
  
  }
  
  
  
  