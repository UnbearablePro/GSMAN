/**
 * See if works
 */

class Installer {

  static installOVBRAIN() {
    this.installDefaultUserProperties();
  }

  // static installWeekProperties() {
  //   let tellPartyProperties = {};
  //   for (let propertyKey in propKey) {
  //     tellPartyProperties[propertyKey] = "0";
  //   }
  //   PropertiesService.getDocumentProperties().setProperties(tellPartyProperties);
  // }

  static installDefaultUserProperties() {
    let userProperties = {
      "admin-password" : "jGl25bVBBBW96Qi9Te4V37Fnqchz/Eu4qB9vKrRIqRg=",
      "admin-mode" : "0"
    };
    PropertiesHandlerUser.setProperties(userProperties);
    SettingsOVB.updateSettings();
  }

  static installMotivationalReminder() {
    TriggersUtils.createEveryMinutesTimeTriggered()
  }
  
}

