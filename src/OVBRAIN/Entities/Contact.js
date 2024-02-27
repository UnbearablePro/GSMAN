// class Contact {
//   constructor(
//     numePrenume,
//     telefon,
//     recomandator,
//     status,
//     data,
//     detalii,
//     profesie,
//     documente,
//     ultimaInteractiune
//   ) {
//     this.numePrenume = numePrenume;
//     this.telefon = telefon;
//     this.recomandator = recomandator;
//     this.status = status;
//     this.data = data;
//     this.detalii = detalii;
//     this.profesie = profesie;
//     this.documente = documente;
//     this.ultimaInteractiune = ultimaInteractiune;

//     Logger.log("Person created successfully");
//     Logger.log(`
//       NumePrenume : ${this.numePrenume}
//       Telefon : ${this.telefon}
//       Recomandator : ${this.recomandator}
//       Status : ${this.status}
//       Data : ${this.data}
//       Detalii : ${this.detalii}
//       Profesie : ${this.profesie}
//       Document : ${this.documente}
//       UltimaInteractiune : ${this.ultimaInteractiune}
//     `)
//   }

//   isLastInteractionToday() {
//     if (DataUtils.isEmpty(this.ultimaInteractiune)) {
//       return false;
//     }
//     return DateUtils.isToday(this.ultimaInteractiune).valueOf();
//   }

//   isLastInteractionThisWeek() {
//     if (DataUtils.isEmpty(this.ultimaInteractiune)) {
//       return false;
//     }

//     return DateUtils.isThisWeek(this.ultimaInteractiune);
//   }

//   static getContactFrom(row = SpreadsheetApp.getCurrentCell().getRowIndex()) {

//     let rowData = AbstractSheetService.getRowData(ContacteSheet.getSheet(), row);

//     if (this.isContactValid_(rowData)) {
//       return new this(
//         rowData[0][ContacteSheet.headers.NumePrenume - 1],
//         rowData[0][ContacteSheet.headers.Telefon - 1],
//         rowData[0][ContacteSheet.headers.Recomandator - 1],
//         rowData[0][ContacteSheet.headers.Status - 1],
//         rowData[0][ContacteSheet.headers.Data - 1],
//         rowData[0][ContacteSheet.headers.Detalii - 1],
//         rowData[0][ContacteSheet.headers.Profesie - 1],
//         rowData[0][ContacteSheet.headers.Document - 1],
//         rowData[0][ContacteSheet.headers.UltimaInteractiune - 1]);
//     } else {
//       UIUtils.warning("Nu ati selectat o persoana din tabel.\n Selectati cu cursorul astfel incat celula sa fie marcata ca si selectata.");
//       return undefined;
//     }
//   }

//   static isContactValid_(rowData) {
//     if (DataUtils.isEmpty(rowData[0][ContacteSheet.headers.NumePrenume]) ||
//       DataUtils.isEmpty(rowData[0][ContacteSheet.headers.Telefon]) ||
//       DataUtils.isEmpty(rowData[0][ContacteSheet.headers.Recomandator]) ||
//       rowData[0][ContacteSheet.headers.NumePrenume] == "NUME PRENUME") {
//       return false
//     } else {
//       return true;
//     }
//   }

// }
