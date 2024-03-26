class ContacteEventRouter {

  /**
   * @param {UserEvent} event 
   */
  static routeEvent(event) {

    if (DataUtils.isEmpty(event)) {
      throw new Error("Cannot handle empty event from Contacte");
    } else {
      let checkedEvent = false;

      // checkedEvent = this.checkForFreezeHeader(event);
      if (checkedEvent) return;
      checkedEvent = this.checkForStatusEvent(event);
      if (checkedEvent) return;
      checkedEvent = this.checkForFreezeDateAndHour(event);
      if (checkedEvent) return;
      // this.checkForAutomateAdder(event);
    }
  }

  /** 
   * @param {UserEvent} event 
  */
  static checkForStatusEvent(event) {
    if (event.row >= ContacteIndex.STARTING_ROW && event.col == ContacteHeaders.STATUS) {
      Lug.progress(`Routing to [CONTACTE STATUS EVENT] ${event.row}:${event.col}`)
      ContacteEventStatusRouter.routeStatusEvent(event);
      return true;
    }
    return false;
  }

  /** 
   * @param {UserEvent} event 
  */
  static checkForFreezeHeader(event) {
    if (event.row < ContacteIndex.STARTING_ROW) {
      Lug.progress(`Routing to [CONTACTE FREEZE HEADER EVENT] ${event.row}:${event.col}`);
      if (Permisioner.requireAdminPermsissionWithNoError()) {
        event.restore();
        Displayer.warning('Nu este permisa modificarea manuala a header-ului');
        return true;
      }
    }
    return false;
  }

  /** 
   * @param {UserEvent} event 
  */
  static checkForFreezeDateAndHour(event) {
    if (event.row >= ContacteIndex.STARTING_ROW && event.col == ContacteHeaders.DATA) {
      Lug.progress(`Routing to [CONTACTE DATE AND HOUR] ${event.row}:${event.col}`);
      if (DataUtils.isNotEmpty(event.value)) {
        let c = Contact.getContactFrom(event.row);

        if (c.status == ContacteStatus.ANALIZA || c.status == ContacteStatus.CONSULTANTA || c.status == ContacteStatus.CONTRACT || c.status == ContacteStatus.SERVICE ||
          c.status == ContacteStatus.REVINPESTE || c.status == ContacteStatus.REVINEELEA || c.status == ContacteStatus.DEREPROGRAMATINTALNIRE) {
          const response = Displayer.ask(`Doriti reprogramarea ${c.status}?`);

          if (response) {
            event.value = c.status;
            event.oldValue = c.status;
            ReminderService.openReminderFromStatusEvent(event) //todo implement openReminderFromDataEvent
          } else {
            event.restore();
          }

        } else {
          Displayer.warning("Nu este permisa modificarea manuala a datei.\n \n Trebuie sa programati un Reminder sau o Intalnire prin status");
          event.range.setValue("");
        }
      }
      return true;
    }
    return false;
  }
  

  /** 
   * @param {UserEvent} event 
  */
  static checkForAutomateAdder(event) {
  Lug.progress(`Routing to [CONTACTE AUTOMATE ADDER] ${event.row}:${event.col}`);

  throw Error("Not implemented yet");

}
}




