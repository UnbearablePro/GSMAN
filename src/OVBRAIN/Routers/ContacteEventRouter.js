class ContacteEventRouter {

  static routeEvent(event) {
    if (DataUtils.isEmpty(event)) {
      throw new Error("Cannot handle empty event from Contacte");
    } else {
      this.checkForFreezeHeader(event);
      this.checkForStatusEvent(event);
      this.checkForFreezeDateAndHour(event);
      this.checkForAutomateAdder(event);
    }
  }

  /** 
   * @param {UserEvent} event 
  */
  static checkForStatusEvent(event) {
    if (event.row >= ContacteIndex.STARTING_ROW && event.col == ContacteHeaders.STATUS) {
      Lug.progress(`Routing to [STATUS EVENT]t ${event.row}:${event.col}`)
      ContacteEventStatusRouter.routeStatusEvent(event);
    }
  }

  /** 
   * @param {UserEvent} event 
  */
  static checkForFreezeHeader(event) {
    if (event.row < ContacteIndex.STARTING_ROW) {
      Lug.progress(`Routing to [FREEZE HEADER EVENT] ${event.row}:${event.col}`);
      if (Permisioner.requireAdminPermsissionWithNoError()) {
        event.restore();
        Displayer.warning('Nu este permisa modificarea manuala a header-ului');
      }
    }
  }

  /** 
   * @param {UserEvent} event 
  */
  static checkForFreezeDateAndHour(event) {
    if (event.row >= ContacteIndex.STARTING_ROW && event.col == ContacteHeaders.STATUS) {
      Lug.progress(`Routing to [FREEZE DATE AND HOUR] ${event.row}:${event.col}`);
      if (Permisioner.requireAdminPermsissionWithNoError()) {
        event.restore();
        Displayer.warning("Nu este permisa modificarea manuala a programarilor/reminderilor.\n \n Daca doriti modificarea orei sau a datei, apasati butonul {Reseateaza} din bara de sus a tabelului.");
      }
    }
  }
  
  /** 
   * @param {UserEvent} event 
  */
  static checkForAutomateAdder(event) {
    Lug.progress(`Routing to [AUTOMATE ADDER] ${event.row}:${event.col}`);
    throw Error("Not implemented yet");
  }
}




