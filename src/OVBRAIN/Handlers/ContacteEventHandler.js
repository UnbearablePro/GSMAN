class ContacteEventHandler {

  static handleEvent(event) {
    if (DataUtils.isEmpty(event)) {
      throw new Error("Cannot handle empty event from Contacte");
    } else {
      this.checkForStatusEvent(event);
    }
  }

  /** 
   * @param {UserEvent} event 
  */
  static checkForStatusEvent(event) {
    if (event.row == ContacteIndex.STARTING_ROW && event.col == ContacteHeaders.STATUS) {
      ContacteStatusController.handleStatusEvent(event);
    }
  }

}

// // FIXME: flag is not good
// function freezeHeader() {
//   if (flag_autoComplete) { 
//     ui.alert("Nu este permisa modificarea header-ului.");
//     eventGlobal.range.setValue(eventGlobal.oldValue);
//   }

// }

// // FIXME: flag
// function freezeDateAndHour(eventGlobal) {
//   if (eventGlobal.oldValue != "") {
//     ui.alert("Nu este permisa modificarea manuala a programarilor/reminderilor.\n \n Daca doriti modificarea orei sau a datei, apasati butonul {Reseateaza} din bara de sus a tabelului.");
//   } else {
//     ui.alert("Nu este permisa introducerea manuala a programarilor/reminderilor.Daca doriti sa programati o intalnire sau un reminder trebuie sa modificati campul status prima data");
//   }
//   eventGlobal.range.setValue(eventGlobal.oldValue);
// }

// // FIXME: 
// function automateAdder(row) {
//   let rowValues = sheet.Contacte.getRange(row - 1, 1, 2, sheet.Contacte.getLastColumn()).getValues();
//   if (rowValues[1][0] != "" || rowValues[1][1] != "") {
//     if (rowValues[1][2] == "") { //TODO: Verifica timpul de la ultima modificare linii precedente sa fie sub 10s , a.i. sa completam si 
//       contacteSheet.getRange(row, indexC_Recomandator).setValue(rowValues[0][2]);
//     }
//     if (rowValues[1][3] == "") {
//       contacteSheet.getRange(row, indexC_Status).setValue("Nesunat");
//     }
//   }

