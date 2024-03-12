class Installer {

  static askForInstall() {
    let response = Displayer.inputField(`Bine ai venit in OVBRAIN`,
      'Doriti sa instalati aplicatia?');
    if (response == "Da") {
      response = Displayer.inputField(`Bine ai venit in OVBRAIN`,
        `Pentru a putea continua introduceti keya unica
        Daca nu aveti o cheie unica contactati developerul ${Developer.mail}`);
    } else {
      Owner.setDefaultValues();
    }


    // CHECK THE RESPONSE FROM THE SERVER
    if (response == "install") {
      this.install();
    } else {
      throw new Error("Key for installing OVBRAIN is not correct");
    }

  }

  static install() {
    this.clear();
    this.installOwner();
    this.installAdmin();
    this.installTellPartyProperties();
    this.installSettings();
    this.startSystems();
  }

  static installOwner() {
    if (Owner.exist()) {
      const response = Displayer.ask("Doriti sa reinstalati Ownerul?");
      if (response) {
        Owner.create();
      } else {
        Owner.setDefaultValues();
      }
    } else {
      Owner.create();
    }
  }

  static installTellPartyProperties() {
    TellPartyService.setDefaultTellPartyValues();
  }

  static installSettings() {
    SettingsOVB.updateSettings();
  }

  static installAdmin() {
    PropertiesUserService.setByList({
      "admin-password": "jGl25bVBBBW96Qi9Te4V37Fnqchz/Eu4qB9vKrRIqRg=",
      "admin-mode": "0"
    });
  }

  static startSystems() {
    if (SettingsOVB.isQuoteServiceOn) {
      QuoteService.start();
    }


  }

  static clear() {
    PropertiesDocumentService.deleteAll();
    PropertiesScriptService.deleteAll();
    PropertiesUserService.deleteAll();
  }

}

