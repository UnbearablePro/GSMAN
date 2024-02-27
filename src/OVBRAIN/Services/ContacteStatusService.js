class ContacteStatusService {

    static neSunat_(event) {
        ContacteSheet.setDataValidationFor(event.range, ContacteSheet.status.NESUNAT);
        TextUtils.changeColors(event.range, ColorPallet.WHITE, ColorPallet.GREEN);
        ContacteSheet.updateInteractionDate(event.row);
      }
    
      static nuRaspunde1_(event) {
        ContacteSheet.setDataValidationFor(event.range, ContacteSheet.status.NURASPUNDE1);
        TextUtils.changeColors(event.range, ColorPallet.WHITE, ColorPallet.LIGHTGREEN);
        PropertiesHandlerDocument.increment(PropertiesHandlerDocument.key.TELEFOANESUNATE);
        ContacteSheet.updateInteractionDate(event.row);
      }
    
      static nuRaspunde2_(event) {
        let contact = Contact.getContactFrom(event.row);
        let isChangedToday = contact.isLastInteractionToday();
    
        if (isChangedToday == true && event.oldValue == ContacteSheet.status.NURASPUNDE1) {
          UIUtils.warning("Ati sunat deja aceasta persoana astazi! Nu este nevoie sa schimbati statusul persoanei daca ati sunat aceeasi persoana de mai multe ori in aceeasi zi.\n Puteti schimba statusul de la NuRaspunde(1) la NuRaspunde(2) in urmatorul tell party.")
          ContacteSheet.setDataValidationFor(event.range, ContacteSheet.status.NURASPUNDE1);
          TextUtils.changeColors(event.range, ColorPallet.WHITE, ColorPallet.LIGHTGREEN);
          return;
        }
    
        ContacteSheet.setDataValidationFor(event.range, ContacteSheet.status.NURASPUNDE2);
        TextUtils.changeColors(event.range, ColorPallet.WHITE, ColorPallet.LIGHTGREEN);
        PropertiesHandlerDocument.increment(PropertiesHandlerDocument.key.TELEFOANESUNATE);
        ContacteSheet.updateInteractionDate(event.row);
      }
    
      static nuRaspunde3_(event) {
        let contact = Contact.getContactFrom(event.row);
        let isChangedToday = contact.isLastInteractionToday();
    
        if (isChangedToday == true && event.oldValue == ContacteSheet.status.NURASPUNDE2) {
          UIUtils.warning("Ati sunat deja aceasta persoana astazi! Nu este nevoie sa schimbati statusul persoanei daca ati sunat aceeasi persoana de mai multe ori in aceeasi zi.\n Puteti schimba statusul de la NuRaspunde(2) la NuRaspunde(3) in urmatorul tell party.");
          ContacteSheet.setDataValidationFor(event.range, ContacteSheet.status.NURASPUNDE2);
          TextUtils.changeColors(event.range, ColorPallet.WHITE, ColorPallet.LIGHTGREEN);
          return;
        }
    
        ContacteSheet.setDataValidationFor(event.range, ContacteSheet.status.NURASPUNDE3);
        TextUtils.changeColors(event.range, ColorPallet.WHITE, ColorPallet.GREY);
        PropertiesHandlerDocument.increment(PropertiesHandlerDocument.key.TELEFOANESUNATE);
        ContacteSheet.updateInteractionDate(event.row);
      }
    
      // static revin_(event) {
      //   // .createReminderForSelectedPerson();
      // }
    
      // static revineElEa_(event) {
      //   let contacte = Contact.getContactFrom(event.row);
      //   let isChangedThisWeek = contact.isLastInteractionThisWeek();
    
      //   if (isChangedThisWeek == false) {
      //     PropertiesHandlerDocument.incrementFromList([PropertiesHandlerDocument.key.TELEFOANESUNATE, PropertiesHandlerDocument.key.TELEFOANERASPUNSE]);
      //   } else {
      //     PropertiesHandlerDocument.increment(PropertiesHandlerDocument.key.TELEFOANERASPUNSE);
      //   }
      //   ContacteSheet.setDataValidationFor(event.range, REVINEELEA);
      //   TextUtils.changeColors(event.range, color.WHITE, color.LIGHTGREEN);
      //   this.updateInteractionDate();
    
      //   let response = UIUtils.question("Doriti sa setati un reminder?");
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
      //       PropertiesHandlerDocument.increment(PropertiesHandlerDocument.key.TELEFOANERASPUNSE);
      //     } else {
      //       PropertiesHandlerDocument.incrementFromList([PropertiesHandlerDocument.key.TELEFOANESUNATE, PropertiesHandlerDocument.key.TELEFOANERASPUNSE]);
      //     }
      //   }
      //   ContacteSheet.setDataValidationFor(event.range, REFUZTELEFON);
      //   TextUtils.changeColors(event.range, color.WHITE, color.GREY);
      //   this.updateInteractionDate();
      // }
    
      // static nrInvalid_(event) {
      //   ContacteSheet.setDataValidationFor(event.range, NRINVALID);
      //   TextUtils.changeColors(event.range, color.WHITE, color.GREY);
      //   this.updateInteractionDate();
      // }
    
      // static nrNecunoscut_(event) {
      //   let isChangedThisWeek = this.isLastInteractionThisWeek()
    
      //   if (isChangedThisWeek == false) {
      //     PropertiesHandlerDocument.incrementFromList([PropertiesHandlerDocument.key.TELEFOANESUNATE, PropertiesHandlerDocument.key.TELEFOANERASPUNSE]);
      //   } else {
      //     PropertiesHandlerDocument.increment(PropertiesHandlerDocument.key.TELEFOANERASPUNSE);
      //   }
    
      //   ContacteSheet.setDataValidationFor(event.range, NRNECUNOSCUT);
      //   TextUtils.changeColors(event.range, color.WHITE, color.GREY);
      //   this.updateInteractionDate();
      // }
    
      // static dejaClient_(event) {
      //   let isChangedThisWeek = this.isLastInteractionThisWeek()
    
      //   if (isChangedThisWeek == false) {
      //     PropertiesHandlerDocument.incrementFromList([PropertiesHandlerDocument.key.TELEFOANESUNATE, PropertiesHandlerDocument.key.TELEFOANERASPUNSE]);
      //   } else {
      //     PropertiesHandlerDocument.increment(PropertiesHandlerDocument.key.TELEFOANERASPUNSE);
      //   }
    
      //   ContacteSheet.setDataValidationFor(event.range, DEJACLIENT);
      //   TextUtils.changeColors(event.range, color.WHITE, color.GREY);
      //   PropertiesHandlerDocument.incrementFromList([PropertiesHandlerDocument.key.TELEFOANESUNATE, PropertiesHandlerDocument.key.TELEFOANERASPUNSE]);
      //   this.updateInteractionDate();
      // }
    
      // static analiza_(event) {
      //   // let isChangedThisWeek = this.isLastInteractionThisWeek()
    
      //   // if (isChangedThisWeek == false) {// TODO Check if good
      //   //   PropertiesHandlerDocument.incrementFromList([PropertiesHandlerDocument.key.TELEFOANESUNATE, PropertiesHandlerDocument.key.TELEFOANERASPUNSE]);
      //   // } else {
      //   //   PropertiesHandlerDocument.increment(PropertiesHandlerDocument.key.TELEFOANERASPUNSE);
      //   // }
      //   MeetingCreator.createMeeting();
      //   //TODO 
      //   // ContacteSheet.setDataValidationFor(event.range, ANALIZA);
      //   // TextUtils.changeColors(event.range, color.WHITE, color.BLUE);
      //   // PropertiesHandlerDocument.incrementFromList([PropertiesHandlerDocument.key.TELEFOANESUNATE, PropertiesHandlerDocument.key.TELEFOANERASPUNSE]);
      //   // this.updateInteractionDate();
      // }
    
      // static consultanta_(event) {
      //   //TODO
      //   ContacteSheet.setDataValidationFor(event.range, ANALIZA);
      //   TextUtils.changeColors(event.range, color.WHITE, color.BLUE);;
      //   this.updateInteractionDate();
      // }
    
      // static contract_(event) {
      //   //TODO
      //   ContacteSheet.setDataValidationFor(event.range, ANALIZA);
      //   TextUtils.changeColors(event.range, color.WHITE, color.BLUE);
      //   this.updateInteractionDate();
      // }
    
      // static nuMaiRaspunde_(event) {
      //   let isThisWeek = this.isLastInteractionThisWeek();
    
      //   if (isThisWeek == false && (lastValueGlobal == REVINEELEA || lastValueGlobal == REVINPESTE)) {
      //     PropertiesHandlerDocument.increment(PropertiesHandlerDocument.key.TELEFOANESUNATE);
      //   }
    
      //   ContacteSheet.setDataValidationFor(event.range, NUMAIRASPUNDE);
      //   TextUtils.changeColors(event.range, color.WHITE, color.GREY);
      //   this.updateInteractionDate(event);
      // }
    
      // static absentIntalnire_(event) {
      //   ContacteSheet.setDataValidationFor(event.range, ABSENTINTALNIRE);
      //   TextUtils.changeColors(event.range, color.WHITE, color.GREY);
      //   this.updateInteractionDate(event);
      // }
    
    
      // static refuzOferta_(event) {
      //   ContacteSheet.setDataValidationFor(event.range, REFUZOFERTA);
      //   TextUtils.changeColors(event.range, color.WHITE, color.GREY);
      //   this.updateInteractionDate();
      // }
    
      // static deReprogramatIntalnire_(event) {
      //   //TODO
      //   ContacteSheet.setDataValidationFor(event.range, DEREPROGRAMATINTALNIRE);
      //   TextUtils.changeColors(event.range, color.WHITE, color.LIGHTBLUE);
      //   this.updateInteractionDate();
      // }
    
      // static revinCuOfertaPana_(event) {
      //   //TODO
      //   ContacteSheet.setDataValidationFor(event.range, REVINCUOFERTAPANA);
      //   TextUtils.changeColors(event.range, color.WHITE, color.LIGHTPURPLE);
      //   this.updateInteractionDate();
      // }
    
      // static client_(event) {
      //   // TODO 
      //   ContacteSheet.setDataValidationFor(event.range, CLIENT);
      //   TextUtils.changeColors(event.range, color.WHITE, color.PUROKE);
      //   this.updateInteractionDate();
      // }
    
      // static service_(event) {
      //   // TODO 
      //   ContacteSheet.setDataValidationFor(event.range, SERVICE);
      //   TextUtils.changeColors(event.range, color.WHITE, color.BLUE);
      //   this.updateInteractionDate();
      // }
    
      // static clientPierdut_(event) {
      //   // TODO
      //   ContacteSheet.setDataValidationFor(event.range, CLIENTPIERDUT);
      //   TextUtils.changeColors(event.range, color.WHITE, color.GREY);
      //   this.updateInteractionDate();
      // }
    
      // static potentialClient_(event) {
    
      //   ContacteSheet.setDataValidationFor(event.range, POTENTIALCLIENT);
      //   TextUtils.changeColors(event.range, color.WHITE, color.PURPLE);
      //   this.updateInteractionDate();
    
      //   let response = UIUtils.question("Doriti sa setati un reminder pentru cand ati reveni?");
      //   if (response == true) {
      //     // TODO: Set Reminder
      //   }
      // }
    
      // static potentialColaborator_(event) {
      //   // TODO: 
      //   ContacteSheet.setDataValidationFor(event.range, POTENTIALCOLABORATOR);
      //   TextUtils.changeColors(event.range, color.WHITE, color.PURPLE);
      //   this.updateInteractionDate();
    
      //   let response = UIUtils.question("Doriti sa setati un reminder pentru cand ati vrea sa recrutati?");
      //   if (response == true) {
      //     // TODO: Set Reminder
      //   }
      // }
    
      // static potentialRecomandator_(event) {
      //   ContacteSheet.setDataValidationFor(event.range, POTENTIALRECOMANDATOR);
      //   TextUtils.changeColors(event.range, color.WHITE, color.PURPLE);
      //   this.updateInteractionDate();
      // }
    
      // static abandonez_(event) {
      //   // TODO: NeSunat case + to see others
      //   if (lastValueGlobal == NESUNAT) {
      //     let response = UIUtils.question("Sunteti sigur ca doriti sa abandonati un contact pe care nu l-ati sunat?");
      //     if (response == false) {
      //       ContacteSheet.setDataValidationFor(event.range, NESUNAT);
      //      TextUtils.changeColors(event.range, color.WHITE, color.GREEN);
      //      this.updateInteractionDate();
      //      return;
      //     }
      //   }
      //   ContacteSheet.setDataValidationFor(event.range, ABANDONEZ);
      //   TextUtils.changeColors(event.range, color.WHITE, color.GREY);
      //   this.updateInteractionDate();
      // }
    
      // static resetezStatusul_(event) {
      //   // TODO
      // }

}