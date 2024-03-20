class ContacteStatusService {

  static restoreStatus(oldEvent) {
    oldEvent.range.setValue(oldEvent.oldValue);
    ContacteSheet.setStatusDataValidation(oldEvent.range, oldEvent.oldValue);
  }

  static neSunat(event) {
    ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.NESUNAT);
    ContacteSheet.updateInteractionDate(event.row);
  }

  static nuRaspunde1(event) {
    ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.NURASPUNDE1);
    TellPartyService.incTelefoaneSunate();
    ContacteSheet.updateInteractionDate(event.row);
  }

  static nuRaspunde2(event) {

    let contact = Contact.getContactFrom(event.row);
    let isChangedToday = contact.isLastInteractionToday();

    if (isChangedToday == true && event.oldValue == ContacteStatus.NURASPUNDE1) {
      Displayer.warning("Ati sunat deja aceasta persoana astazi! Nu este nevoie sa schimbati statusul persoanei daca ati sunat aceeasi persoana de mai multe ori in aceeasi zi.\n Puteti schimba statusul de la NuRaspunde(1) la NuRaspunde(2) in urmatorul tell party.")
      ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.NURASPUNDE1);
      event.range.setValue(event.oldValue);
      return;
    }

    ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.NURASPUNDE2);
    TellPartyService.incTelefoaneSunate();
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
    TellPartyService.incTelefoaneSunate();
    ContacteSheet.updateInteractionDate(event.row);
  }

  static revin(event) {
    let contact = Contact.getContactFrom(event.row);
    let isChangedToday = contact.isLastInteractionToday();

    ReminderService.openReminderFromStatusEvent(event);
    // Reminder.OpenHtml
  }

  static revineElEa(event) {
  //   let contacte = Contact.getContactFrom(event.row);
  //   let isChangedThisWeek = contact.isLastInteractionThisWeek();

  //   if (isChangedThisWeek == false) {
  //     TellPartyService.incTelefoaneSunate();
  // TellPartyService.incTelefoaneRaspunse();
  //   } else {
  //     TellPartyService.incTelefoaneRaspunse();
  //   }
  //   ContacteSheet.setStatusDataValidation(event.range, REVINEELEA);
  //   CellService.changeColors(event.range, color.WHITE, color.LIGHTGREEN);
  //   ContacteSheet.updateInteractionDate(event.row);

  //   let response = Displayer.question("Doriti sa setati un reminder?");
  //   if (response == true) {
  //     // TODO: Set Reminder
  //   }
  }

  static refuzTelefon(event) {
    Lug.progress(`Handle Refuz Telefon Event`);

    let contact = Contact.getContactFrom(event.row);
    let isChangedThisWeek = contact.isLastInteractionThisWeek();

    if (isChangedThisWeek == true &&
      (event.oldValue == ContacteStatus.REVINEELEA || event.oldValue == ContacteStatus.REVINPESTE)) {

    } else {
      if (isChangedThisWeek == true &&
        (event.oldValue == ContacteStatus.NURASPUNDE1 || event.oldValue == ContacteStatus.NURASPUNDE2 || event.oldValue == ContacteStatus.NURASPUNDE3)) {
        TellPartyService.incTelefoaneRaspunse();
      } else {
        TellPartyService.incTelefoaneSunate();
        TellPartyService.incTelefoaneRaspunse();
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
      TellPartyService.incTelefoaneSunate();
      TellPartyService.incTelefoaneRaspunse();
    } else {
      TellPartyService.incTelefoaneRaspunse();
    }

    ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.NRNECUNOSCUT);
    ContacteSheet.updateInteractionDate(event.row);
  }

  static dejaClient(event) {
    let contact = Contact.getContactFrom(event.row);
    let isChangedThisWeek = contact.isLastInteractionThisWeek();

    if (isChangedThisWeek == false) {
      TellPartyService.incTelefoaneSunate();
      TellPartyService.incTelefoaneRaspunse();
    } else {
      TellPartyService.incTelefoaneRaspunse();
    }

    ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.DEJACLIENT);
    TellPartyService.incTelefoaneSunate();
    TellPartyService.incTelefoaneRaspunse();
    ContacteSheet.updateInteractionDate(event.row);
  }

  static analiza(event) {
    MeetingService.openMeetingFromStatusEvent(event);
  }

  static consultanta(event) {
    MeetingService.openMeetingFromStatusEvent(event);
  }

  static contract_(event) {
    MeetingService.openMeetingFromStatusEvent(event);
  }

  static nuMaiRaspunde(event) {
    let contact = Contact.getContactFrom(event.row);
    let isChangedThisWeek = contact.isLastInteractionThisWeek();

    if (isChangedThisWeek == false &&
      (event.oldValue == ContacteStatus.REVINEELEA || event.oldValue == ContacteStatus.REVINPESTE)) {
      TellPartyService.incTelefoaneSunate();
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

  static service(event) {
    MeetingService.openMeetingFromStatusEvent(event);
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

  static reminderResponse(c, status, lastValue, row)  {
    let isChangedThisWeek = c.isLastInteractionThisWeek();

    if (isChangedThisWeek == false) {
      TellPartyService.incTelefoaneSunate();
      TellPartyService.incTelefoaneRaspunse();
    }

    const range = ContacteSheet.getRange(row, ContacteHeaders.STATUS);
    ContacteSheet.setStatusDataValidation(range, status);
    ContacteSheet.updateInteractionDate(row);
  }

}