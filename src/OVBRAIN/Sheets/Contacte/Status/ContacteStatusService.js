class ContacteStatusService {

  /**
   * @param {UserEvent} event 
   */
  static cancelStatusForm(event) {
    if (event.value == ContacteStatus.REVINEELEA) {
      this.handleRevineElEa_(event);
    }

    event.restore();
    ContacteSheet.setStatusDataValidation(event.range, event.oldValue);
  }

  static neSunat(event) {
    Lug.build(`CONTACTE EVENT HANDLING: Value: ${event.value} OldValue: ${event.oldValue}`);

    ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.NESUNAT);
    ContacteSheet.updateInteractionDate(event.row);
  }

  static nuRaspunde1(event) {
    Lug.build(`CONTACTE EVENT HANDLING: Value: ${event.value} OldValue: ${event.oldValue}`);

    ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.NURASPUNDE1);
    CentralizareService.incTelefoaneSunate();
    ContacteSheet.updateInteractionDate(event.row);
  }

  static nuRaspunde2(event) {
    Lug.build(`CONTACTE EVENT HANDLING: Value: ${event.value} OldValue: ${event.oldValue}`);

    let contact = Contact.getContactFrom(event.row);
    let isChangedToday = contact.isLastInteractionToday();
    Lug.build(`CONTACTE EVENT HANDLING: isChangedToday: ${isChangedToday}`)


    if (isChangedToday == true && event.oldValue == ContacteStatus.NURASPUNDE1) {
      Displayer.warning("Ati sunat deja aceasta persoana astazi! Nu este nevoie sa schimbati statusul persoanei daca ati sunat aceeasi persoana de mai multe ori in aceeasi zi.\n Puteti schimba statusul de la NuRaspunde(1) la NuRaspunde(2) in urmatorul tell party.")
      ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.NURASPUNDE1);
      event.range.setValue(event.oldValue);
      return;
    }

    ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.NURASPUNDE2);
    CentralizareService.incTelefoaneSunate();
    ContacteSheet.updateInteractionDate(event.row);
  }

  static nuRaspunde3(event) {
    let contact = Contact.getContactFrom(event.row);
    let isChangedToday = contact.isLastInteractionToday();

    if (isChangedToday == true && event.oldValue == ContacteStatus.NURASPUNDE2) {
      Displayer.warning("Ati sunat deja aceasta persoana astazi! Nu este nevoie sa schimbati statusul persoanei daca ati sunat aceeasi persoana de mai multe ori in aceeasi zi.\n Puteti schimba statusul de la NuRaspunde(2) la NuRaspunde(3) in urmatorul tell party.");
      ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.NURASPUNDE2);
      event.range.setValue(event.oldValue);
      return;
    }

    ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.NURASPUNDE3);
    CentralizareService.incTelefoaneSunate();
    ContacteSheet.updateInteractionDate(event.row);
  }

  static revin(event) {
    ReminderService.openReminderFromStatusEvent(event);
  }

  static revineElEa(event) {
    const response = Displayer.ask(`Doriti sa setati un reminder?`);

    if (response) {
      ReminderService.openReminderFromStatusEvent(event);
    } else {
      this.handleRevineElEa_();
      CentralizareService.incTelefoaneRaspunse();
      ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.REVINEELEA);
      ContacteSheet.updateInteractionDate(event.row);
    }
  }

  static handleRevineElEa_(event) {
    let contact = Contact.getContactFrom(event.row);
    let isChangedThisWeek = contact.isLastInteractionThisWeek();
    if (!isChangedThisWeek) {
      CentralizareService.incTelefoaneSunate();
    }
    if (event.oldValue == ContacteStatus.REVINPESTE && event.oldValue == ContacteStatus.REVINEELEA) {

    } else {
      CentralizareService.incTelefoaneRaspunse();
    }
  }

  static refuzTelefon(event) {
    let contact = Contact.getContactFrom(event.row);
    let isChangedThisWeek = contact.isLastInteractionThisWeek();

    if (isChangedThisWeek == true &&
      (event.oldValue == ContacteStatus.REVINEELEA || event.oldValue == ContacteStatus.REVINPESTE)) {

    } else {
      if (isChangedThisWeek == true &&
        (event.oldValue == ContacteStatus.NURASPUNDE1 || event.oldValue == ContacteStatus.NURASPUNDE2 || event.oldValue == ContacteStatus.NURASPUNDE3)) {
        CentralizareService.incTelefoaneRaspunse();
      } else {
        CentralizareService.incTelefoaneSunate();
        CentralizareService.incTelefoaneRaspunse();
      }
    }
    ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.REFUZTELEFON);
    ContacteSheet.updateInteractionDate(event.row);
  }

  static nrInvalid(event) {
    ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.NRINVALID);
    ContacteSheet.updateInteractionDate(event.row);
  }

  static nrNecunoscut(event) {
    let contact = Contact.getContactFrom(event.row);
    let isChangedThisWeek = contact.isLastInteractionThisWeek();

    if (isChangedThisWeek == false) {
      CentralizareService.incTelefoaneSunate();
      CentralizareService.incTelefoaneRaspunse();
    } else {
      CentralizareService.incTelefoaneRaspunse();
    }

    ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.NRNECUNOSCUT);
    ContacteSheet.updateInteractionDate(event.row);
  }

  static dejaClient(event) {
    let contact = Contact.getContactFrom(event.row);
    let isChangedThisWeek = contact.isLastInteractionThisWeek();

    if (isChangedThisWeek == false) {
      CentralizareService.incTelefoaneSunate();
      CentralizareService.incTelefoaneRaspunse();
    } else {
      CentralizareService.incTelefoaneRaspunse();
    }

    ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.DEJACLIENT);
    CentralizareService.incTelefoaneSunate();
    CentralizareService.incTelefoaneRaspunse();
    ContacteSheet.updateInteractionDate(event.row);
  }

  /**
   * 
   * @param {UserEvent} event 
   */
  static programeazaIntalnire(event) {
    let contact = Contact.getContactFrom(event.row);
    if (DataUtils.isNotEmpty(contact.data)) {
      ContacteDateService.updateDate(); //TODO: Implement this
    }

    MeetingService.openMeetingFromStatusEvent(event);
  }

  static nuMaiRaspunde(event) {
    let contact = Contact.getContactFrom(event.row);
    let isChangedThisWeek = contact.isLastInteractionThisWeek();

    if (isChangedThisWeek == false &&
      (event.oldValue == ContacteStatus.REVINEELEA || event.oldValue == ContacteStatus.REVINPESTE)) {
      CentralizareService.incTelefoaneSunate();
    }

    ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.NUMAIRASPUNDE);
    ContacteSheet.updateInteractionDate(event.row);
  }

  static absentIntalnire(event) {
    ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.ABSENTINTALNIRE);
    ContacteSheet.updateInteractionDate(event.row);
  }

  static refuzOferta(event) {
    ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.REFUZOFERTA);
    ContacteSheet.updateInteractionDate(event.row);
  }

  static deReprogramatIntalnire(event) {
    ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.DEREPROGRAMATINTALNIRE);
    ContacteSheet.updateInteractionDate(event.row);
  }

  static revinCuOfertaPana(event) {

    ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.REVINCUOFERTAPANA);
    ContacteSheet.updateInteractionDate(event.row);
  }

  static client_(event) {
    ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.CLIENT);
    ContacteSheet.updateInteractionDate(event.row);
  }

  static clientPierdut(event) {
    // ClientService.
    ContacteSheet.updateInteractionDate(event.row);
  }

  static potentialClient(event) {

    ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.POTENTIALCLIENT);
    ContacteSheet.updateInteractionDate(event.row);

    let response = Displayer.ask("Doriti sa setati un reminder pentru cand ati reveni?");
    if (response == true) {
      // TODO: Set Reminder
    }
  }

  static potentialColaborator(event) {

    ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.POTENTIALCOLABORATOR);
    ContacteSheet.updateInteractionDate(event.row);

    let response = Displayer.ask("Doriti sa setati un reminder pentru cand ati vrea sa recrutati?");
    if (response == true) {
      // TODO: Set Reminder
    }
  }

  static potentialRecomandator(event) {
    ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.POTENTIALRECOMANDATOR);
    ContacteSheet.updateInteractionDate(event.row);
    // PotentialRecomandatori.add
  }

  static abandonez(event) {
    if (event.oldValue == ContacteStatus.NESUNAT) {
      let response = Displayer.ask("Sunteti sigur ca doriti sa abandonati un contact pe care nu l-ati sunat?");
      if (response == false) {
        ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.NESUNAT);
        return;
      }
    }
    ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.ABANDONEZ);
    ContacteSheet.updateInteractionDate(event.row);
  }

  static reminderResponse(c, status, lastValue, row, date) {
    let isChangedThisWeek = c.isLastInteractionThisWeek();

    if (isChangedThisWeek == false) {
      CentralizareService.incTelefoaneSunate();
      CentralizareService.incTelefoaneRaspunse();
    }

    const range = ContacteSheet.getRange(row, ContacteHeaders.STATUS);
    ContacteSheet.setStatusDataValidation(range, status);
    ContacteSheet.updateInteractionDate(row);
    ContacteSheet.setDate(row, date);
  }

  static meetingResponse(c, meetingType, oldValue, row, jsDate) {
    if (c.isLastInteractionThisWeek) {
      if (oldValue == ContacteStatus.REVINPESTE || oldValue == ContacteStatus.REVINEELEA) {

      } else {
        CentralizareService.incTelefoaneRaspunse();
      }
    } else {
      CentralizareService.incTelefoaneSunate();
      CentralizareService.incTelefoaneRaspunse();
    }
    
    if (meetingType != ContacteStatus.ANALIZA) {
      let isChangedThisWeek = c.isLastInteractionThisWeek();

      if (isChangedThisWeek == false) {
        CentralizareService.incTelefoaneSunate();
        CentralizareService.incTelefoaneRaspunse();
      }
    }

    CentralizareService.incIntalnire(meetingType);
    const range = ContacteSheet.getRange(row, ContacteHeaders.STATUS);
    ContacteSheet.setStatusDataValidation(range, meetingType);
    ContacteSheet.updateInteractionDate(row);
    ContacteSheet.setDate(row, jsDate);
  }

  static revinPesteDinNou(event) {
    event.range.setValue(event.oldValue);
  }

  static revineElEaDinNou(event) {

  }

  static reprogrameazaAnaliza(event) {

  }

  static reprogrameazaConsultanta(event) {

  }

  static reprogrameazaContract(event) {

  }

  static reprogrameazaService(event) {

  }

}