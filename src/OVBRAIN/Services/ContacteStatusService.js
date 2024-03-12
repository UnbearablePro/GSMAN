class ContacteStatusService {

  static neSunat(event) {
      ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.NESUNAT);
      const [fontColor, bgColor] = ContacteStatusFormat.NESUNAT;
      CellService.changeColors(event.range, fontColor, bgColor);
      ContacteSheet.updateInteractionDate(event.row);
    }
  
    static nuRaspunde1(event) {
      ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.NURASPUNDE1);
      const [fontColor, bgColor] = ContacteStatusFormat.DEAD;
      CellService.changeColors(event.range, fontColor, bgColor);

      PropertiesDocumentService.increment(TellPartyProperties.TELEFOANESUNATE);
      ContacteSheet.updateInteractionDate(event.row);
    }
  
    static nuRaspunde2(event) {
      
      let contact = Contact.getContactFrom(event.row);

      let isChangedToday = contact.isLastInteractionToday();
      const [fontColor, bgColor] = ContacteStatusFormat.DEAD;
  
      if (isChangedToday == true && event.oldValue == ContacteStatus.NURASPUNDE1) {
        Displayer.warning("Ati sunat deja aceasta persoana astazi! Nu este nevoie sa schimbati statusul persoanei daca ati sunat aceeasi persoana de mai multe ori in aceeasi zi.\n Puteti schimba statusul de la NuRaspunde(1) la NuRaspunde(2) in urmatorul tell party.")
        ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.NURASPUNDE1);
        
        CellService.changeColors(event.range, fontColor, bgColor);
        return;
      }
  
      ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.NURASPUNDE2);
      CellService.changeColors(event.range, fontColor, bgColor);
      PropertiesDocumentService.increment(TellPartyProperties.TELEFOANESUNATE);
      ContacteSheet.updateInteractionDate(event.row);
    }
  
    static nuRaspunde3(event) {
      let contact = Contact.getContactFrom(event.row);
      let isChangedToday = contact.isLastInteractionToday();
  
      if (isChangedToday == true && event.oldValue == ContacteStatus.NURASPUNDE2) {
        Displayer.warning("Ati sunat deja aceasta persoana astazi! Nu este nevoie sa schimbati statusul persoanei daca ati sunat aceeasi persoana de mai multe ori in aceeasi zi.\n Puteti schimba statusul de la NuRaspunde(2) la NuRaspunde(3) in urmatorul tell party.");
        ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.NURASPUNDE2);
        CellService.changeColors(event.range, ColorPallet.WHITE, ColorPallet.LIGHTGREEN);
        return;
      }
  
      ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.NURASPUNDE3);
      CellService.changeColors(event.range, ColorPallet.WHITE, ColorPallet.GREY);
      PropertiesDocumentService.increment(TellPartyProperties.TELEFOANESUNATE);
      ContacteSheet.updateInteractionDate(event.row);
    }
  
    // static revin_(event) {
    //   // .createReminderForSelectedPerson();
    // }
  
    // static revineElEa_(event) {
    //   let contacte = Contact.getContactFrom(event.row);
    //   let isChangedThisWeek = contact.isLastInteractionThisWeek();
  
    //   if (isChangedThisWeek == false) {
    //     PropertiesDocumentService.incrementFromList([TellPartyProperties.TELEFOANESUNATE, TellPartyProperties.TELEFOANERASPUNSE]);
    //   } else {
    //     PropertiesDocumentService.increment(TellPartyProperties.TELEFOANERASPUNSE);
    //   }
    //   ContacteSheet.setStatusDataValidation(event.range, REVINEELEA);
    //   CellService.changeColors(event.range, color.WHITE, color.LIGHTGREEN);
    //   this.updateInteractionDate();
  
    //   let response = Displayer.question("Doriti sa setati un reminder?");
    //   if (response == true) {
    //     // TODO: Set Reminder
    //   }
    // }
  
    // static refuzTelefon_(event) {
    //   let isChangedThisWeek = this.isLastInteractionThisWeek();
  
    //   if (isChangedThisWeek == true && (lastValueGlobal == REVINEELEA || lastValueGlobal == REVINPESTE)) {
    //     // NOTHING TO DO
    //   } else {
    //     if (isChangedThisWeek == true && (lastValueGlobal == NURASPUNDE1 || lastValueGlobal == NURASPUNDE2 || lastValueGlobal == NURASPUNDE3)) {
    //       PropertiesDocumentService.increment(TellPartyProperties.TELEFOANERASPUNSE);
    //     } else {
    //       PropertiesDocumentService.incrementFromList([TellPartyProperties.TELEFOANESUNATE, TellPartyProperties.TELEFOANERASPUNSE]);
    //     }
    //   }
    //   ContacteSheet.setStatusDataValidation(event.range, REFUZTELEFON);
    //   CellService.changeColors(event.range, color.WHITE, color.GREY);
    //   this.updateInteractionDate();
    // }
  
    // static nrInvalid_(event) {
    //   ContacteSheet.setStatusDataValidation(event.range, NRINVALID);
    //   CellService.changeColors(event.range, color.WHITE, color.GREY);
    //   this.updateInteractionDate();
    // }
  
    // static nrNecunoscut_(event) {
    //   let isChangedThisWeek = this.isLastInteractionThisWeek()
  
    //   if (isChangedThisWeek == false) {
    //     PropertiesDocumentService.incrementFromList([TellPartyProperties.TELEFOANESUNATE, TellPartyProperties.TELEFOANERASPUNSE]);
    //   } else {
    //     PropertiesDocumentService.increment(TellPartyProperties.TELEFOANERASPUNSE);
    //   }
  
    //   ContacteSheet.setStatusDataValidation(event.range, NRNECUNOSCUT);
    //   CellService.changeColors(event.range, color.WHITE, color.GREY);
    //   this.updateInteractionDate();
    // }
  
    // static dejaClient_(event) {
    //   let isChangedThisWeek = this.isLastInteractionThisWeek()
  
    //   if (isChangedThisWeek == false) {
    //     PropertiesDocumentService.incrementFromList([TellPartyProperties.TELEFOANESUNATE, TellPartyProperties.TELEFOANERASPUNSE]);
    //   } else {
    //     PropertiesDocumentService.increment(TellPartyProperties.TELEFOANERASPUNSE);
    //   }
  
    //   ContacteSheet.setStatusDataValidation(event.range, DEJACLIENT);
    //   CellService.changeColors(event.range, color.WHITE, color.GREY);
    //   PropertiesDocumentService.incrementFromList([TellPartyProperties.TELEFOANESUNATE, TellPartyProperties.TELEFOANERASPUNSE]);
    //   this.updateInteractionDate();
    // }
  
    // static analiza_(event) {
    //   // let isChangedThisWeek = this.isLastInteractionThisWeek()
  
    //   // if (isChangedThisWeek == false) {// TODO Check if good
    //   //   PropertiesDocumentService.incrementFromList([TellPartyProperties.TELEFOANESUNATE, TellPartyProperties.TELEFOANERASPUNSE]);
    //   // } else {
    //   //   PropertiesDocumentService.increment(TellPartyProperties.TELEFOANERASPUNSE);
    //   // }
    //   MeetingCreator.createMeeting();
    //   //TODO 
    //   // ContacteSheet.setStatusDataValidation(event.range, ANALIZA);
    //   // CellService.changeColors(event.range, color.WHITE, color.BLUE);
    //   // PropertiesDocumentService.incrementFromList([TellPartyProperties.TELEFOANESUNATE, TellPartyProperties.TELEFOANERASPUNSE]);
    //   // this.updateInteractionDate();
    // }
  
    // static consultanta_(event) {
    //   //TODO
    //   ContacteSheet.setStatusDataValidation(event.range, ANALIZA);
    //   CellService.changeColors(event.range, color.WHITE, color.BLUE);;
    //   this.updateInteractionDate();
    // }
  
    // static contract_(event) {
    //   //TODO
    //   ContacteSheet.setStatusDataValidation(event.range, ANALIZA);
    //   CellService.changeColors(event.range, color.WHITE, color.BLUE);
    //   this.updateInteractionDate();
    // }
  
    // static nuMaiRaspunde_(event) {
    //   let isThisWeek = this.isLastInteractionThisWeek();
  
    //   if (isThisWeek == false && (lastValueGlobal == REVINEELEA || lastValueGlobal == REVINPESTE)) {
    //     PropertiesDocumentService.increment(TellPartyProperties.TELEFOANESUNATE);
    //   }
  
    //   ContacteSheet.setStatusDataValidation(event.range, NUMAIRASPUNDE);
    //   CellService.changeColors(event.range, color.WHITE, color.GREY);
    //   this.updateInteractionDate(event);
    // }
  
    // static absentIntalnire_(event) {
    //   ContacteSheet.setStatusDataValidation(event.range, ABSENTINTALNIRE);
    //   CellService.changeColors(event.range, color.WHITE, color.GREY);
    //   this.updateInteractionDate(event);
    // }
  
  
    // static refuzOferta_(event) {
    //   ContacteSheet.setStatusDataValidation(event.range, REFUZOFERTA);
    //   CellService.changeColors(event.range, color.WHITE, color.GREY);
    //   this.updateInteractionDate();
    // }
  
    // static deReprogramatIntalnire_(event) {
    //   //TODO
    //   ContacteSheet.setStatusDataValidation(event.range, DEREPROGRAMATINTALNIRE);
    //   CellService.changeColors(event.range, color.WHITE, color.LIGHTBLUE);
    //   this.updateInteractionDate();
    // }
  
    // static revinCuOfertaPana_(event) {
    //   //TODO
    //   ContacteSheet.setStatusDataValidation(event.range, REVINCUOFERTAPANA);
    //   CellService.changeColors(event.range, color.WHITE, color.LIGHTPURPLE);
    //   this.updateInteractionDate();
    // }
  
    // static client_(event) {
    //   // TODO 
    //   ContacteSheet.setStatusDataValidation(event.range, CLIENT);
    //   CellService.changeColors(event.range, color.WHITE, color.PUROKE);
    //   this.updateInteractionDate();
    // }
  
    // static service_(event) {
    //   // TODO 
    //   ContacteSheet.setStatusDataValidation(event.range, SERVICE);
    //   CellService.changeColors(event.range, color.WHITE, color.BLUE);
    //   this.updateInteractionDate();
    // }
  
    // static clientPierdut_(event) {
    //   // TODO
    //   ContacteSheet.setStatusDataValidation(event.range, CLIENTPIERDUT);
    //   CellService.changeColors(event.range, color.WHITE, color.GREY);
    //   this.updateInteractionDate();
    // }
  
    // static potentialClient_(event) {
  
    //   ContacteSheet.setStatusDataValidation(event.range, POTENTIALCLIENT);
    //   CellService.changeColors(event.range, color.WHITE, color.PURPLE);
    //   this.updateInteractionDate();
  
    //   let response = Displayer.question("Doriti sa setati un reminder pentru cand ati reveni?");
    //   if (response == true) {
    //     // TODO: Set Reminder
    //   }
    // }
  
    // static potentialColaborator_(event) {
    //   // TODO: 
    //   ContacteSheet.setStatusDataValidation(event.range, POTENTIALCOLABORATOR);
    //   CellService.changeColors(event.range, color.WHITE, color.PURPLE);
    //   this.updateInteractionDate();
  
    //   let response = Displayer.question("Doriti sa setati un reminder pentru cand ati vrea sa recrutati?");
    //   if (response == true) {
    //     // TODO: Set Reminder
    //   }
    // }
  
    // static potentialRecomandator_(event) {
    //   ContacteSheet.setStatusDataValidation(event.range, POTENTIALRECOMANDATOR);
    //   CellService.changeColors(event.range, color.WHITE, color.PURPLE);
    //   this.updateInteractionDate();
    // }
  
    // static abandonez_(event) {
    //   // TODO: NeSunat case + to see others
    //   if (lastValueGlobal == NESUNAT) {
    //     let response = Displayer.question("Sunteti sigur ca doriti sa abandonati un contact pe care nu l-ati sunat?");
    //     if (response == false) {
    //       ContacteSheet.setStatusDataValidation(event.range, NESUNAT);
    //      CellService.changeColors(event.range, color.WHITE, color.GREEN);
    //      this.updateInteractionDate();
    //      return;
    //     }
    //   }
    //   ContacteSheet.setStatusDataValidation(event.range, ABANDONEZ);
    //   CellService.changeColors(event.range, color.WHITE, color.GREY);
    //   this.updateInteractionDate();
    // }
  
    // static resetezStatusul_(event) {
    //   // TODO
    // }

}