class ErrorHandler {

  static handleError(e) {
    this.log(e);
    var ui = SpreadsheetApp.getUi();

    let errorMessage = e.message + "\n" + e.stack;
    const activeHandlingFlag = this.checkActiveHandling(errorMessage);

    if (activeHandlingFlag) {
      const response = this.askIfWannaContactDev(errorMessage);
      if (response == true) {
        Logger.log(`User ${User.name} want to send a message to developer.`);
        const userMessage = ui.prompt("Message developer", "Describe error", ui.ButtonSet.YES_NO);
        this.sendMessageToDeveloper(e, userMessage);
      }
    } else {
      if (Settings.isSentMailAutomaticalyToDeveloperWhenErrorOccursOn) {
        this.sendMessageToDeveloper(e);
      }
    }
  }

  static log(e) {
    Logger.log(`❌ ERROR ${e.message}`);
    Logger.log(`${e.stack}`);
  }

  static checkActiveHandling(message) {
    return SpreadsheetApp.getActiveSpreadsheet() != null && 
    this.contactErrorMessage != undefined && 
    Settings.isSentMailAutomaticalyToDeveloperWhenErrorOccursOn;
  }

  static askIfWannaContactDev(message) {
    return SpreadsheetApp.getUi().alert("❌ ERROR", message + this.contactErrorMessage, ui.ButtonSet.YES_NO) == ui.Button.YES;
  }

  static sendMessageToDeveloper(error, userMessage) {
    MailService.sendErrorMail(error.message, error.stack, userMessage);
  };
}

