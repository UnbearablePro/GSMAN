// /**
//  * CentralizareSaptamanala is a static provides functionality for manilupating CentralizareSaptamanala sheet.
//  * @throws : Throws error when creating a constructor.
// */
// class CentralizareSaptamana {

//   /** @private */
//   constructor() {
//     throw new Error("CentralizareSaptamanala object cannot be created because it has only static fields.");
//   }

//   /** @private */
//   static initialize_() {
//     if (this.controller == null) {
//       this.controller = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(Contacte.name);
//       console.log("The Sheet CentralizareSaptamanala has been initialized.");
//     }
//   }
//   /** Returns the instance of the Sheet Contacte */
//   static getController() {
//     this.initialize_();
//     return this.controller;
//   }

//   /** Checks if the current sheet opened is centralziare saptamanala */
//   static isActive() {
//     return ApplicationControl.isSheetOpened(Contacte.name);
//   }

//   static isCursorInDataRange() {
//     if (this.isActive()) {
//       let rowIndex = SheetsController.getActiveCellRowIndex();
//       this.initialize_();
      
//       if (rowIndex > this.index.StartingDataRow && rowIndex < this.controller.getLastRow()) {
//         return true;
//       } else {
//         UIUtils.warning("Nu ati selectat o persoana din tabel.\n Selectati cu mouse-ul astfel incat celula sa fie marcata ca si selectata.");
//         return false;
//       }
//     }
//     UIUtils.warning("Trebuie sa fiti pe foaia Contacte si sa selectati o persoana!");
//     return false;
//   }

//   /** Sets validation */
//   static setDataValidationFor(range, refferenceValueToSetValidators) {
//     SheetsController.setDataValidation(range, refferenceValueToSetValidators, ContacteStatusHandler.getContacteValidationRuleFunction_);
//     if (lastValueGlobal == refferenceValueToSetValidators) {
//       range.setValue(lastValueGlobal);
//     }
//   }

//   static setValue(row, col, value) {
//     this.initialize_();
//     CentralizareSaptamanala.controller.getRange(row, col).setValue(value);
//     Logger.log(`Changed value on: Contacte[${row},${col}] = ${value}`);
//   }
// }

// /** SpreadSheet {Contacte}. */
// CentralizareSaptamanala.controller = null;
// CentralizareSaptamanala.name = "CONTACTE";
// CentralizareSaptamanala.index = {
//   Q: 1,
//   DataInceput: 2,
//   DataSfarsit: 3,
//   Prezenta: 4,
//   NrContacte: 5,
//   NrContacteShortList: 6,
//   NrRecomandari: 7,
//   TelefoaneSunate: 8,
//   TelefoaneRaspunse: 9,
//   AnalizeTel: 10,
//   AnalizeStabilite: 11,
//   AnalizeTinute: 12,
//   ConsultanteTel: 13,
//   ConsultanteStabilite: 14,
//   ConsultanteTinute: 15,
//   ContracteTel: 16,
//   ContracteStabilite: 17,
//   ContracteTinute: 18,
//   ServiceTel: 19,
//   ServiceStabilite: 20,
//   ServiceTinute: 21
// };