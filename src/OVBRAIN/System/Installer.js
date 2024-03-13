class Installer {

  static askForInstall() {
    let response = Displayer.ask(`Bine ai venit in OVBRAIN /n Doriti sa instalati aplicatia?`);
    let responseKey;
    if (response) {
      responseKey = Displayer.inputField(`Bine ai venit in OVBRAIN`,
        `Pentru a putea continua introduceti keya unica
        Daca nu aveti o cheie unica contactati developerul ${Developer.mail}`);
    } else {
      return;
    }

    // CHECK THE RESPONSE FROM THE SERVER
    if (responseKey == "install") {
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
    this.installCentralizare();
    this.installSettings();
    this.installQuota();
    this.installOnEditTrigger();
  }

  static installCentralizare() {
    TriggerOVBService.startCentralizareCycle();
  }

  static installOwner() {
    if (Owner.exist()) {
      const response = Displayer.ask("Doriti sa reinstalati Ownerul?");
      if (response) {
        Owner.buildOwnerData();
      } else {
        Owner.setDefaultValues();
      }
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

  static installQuota() {
    QuoteService.start();
  }

  static installOnEditTrigger() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    ScriptApp.newTrigger('onEditTrigger')
      .forSpreadsheet(sheet)
      .onEdit()
      .create();
  }


  static clear() {
    PropertiesDocumentService.deleteAll();
    PropertiesScriptService.deleteAll();
    PropertiesUserService.deleteAll();
    TriggerService.deleteAll();
  }

}

