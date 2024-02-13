/** @class */
class ErrorHandler {

    /** Handles errors and inform if is the case */
  static handleError(e) {

    // TODO: Disperse this into multiple functions
    Logger.log(`❌ ERROR ${e.message}`); 
    Logger.log(`${e.stack}`);

    var message = e.message + "\n" + e.stack + this.contactErrorMessage;
  
    var ui = SpreadsheetApp.getUi();
    
    // if (SpreadSheetController.isUserOn()) {
    //   var response = ui.alert("❌ ERROR", message, ui.ButtonSet.YES_NO);

    //   if (response == ui.Button.YES) {
    //     response = UIUtils.inputField("Mesaj catre developer", "Descrie eroare si problema ta in putine cuvinte:");
    //     if (response != undefined) {
    //       MailUtils.sendErrorMail("Error ocurred: " + e.message, "❌ ERROR " + e.stack + "\n\n Mesaj utilizator: " + response);
    //       return;
    //     } else {
    //       if (SettingsOVB.checkflagSendMailWhenErrorOccurs()) {
    //         MailUtils.sendErrorMail("Error ocurred: " + e.message, "❌ ERROR " + e.stack);
    //       }
    //     }
    //   } else {
    //     if (SettingsOVB.checkflagSendMailWhenErrorOccurs()) {
    //       MailUtils.sendErrorMail("Error ocurred: " + e.message, "❌ ERROR " + e.stack);
    //     }
    //   }
    // } else {
    //   if (SettingsOVB.checkflagSendMailWhenErrorOccurs()) {
    //     MailUtils.sendErrorMail("Error ocurred: " + e.message, "❌ ERROR " + e.stack);
    //   }
    // }
  }

}

