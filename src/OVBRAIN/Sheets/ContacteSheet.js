/**
 * Contacte is a static provides functionality for manilupating Contacte sheet.
 * @throws : Throws error when creating a constructor.
*/
class ContacteSheet {

  /** @private */
  static initialize_() {
    if (DataUtils.isEmpty(ContacteSheet.sheet)) {
      this.sheet = AbstractSheetService.getSheetByName(ContacteSheet.name);
    }
  }

  /** Returns the instance of the Sheet Contacte */
  static getSheet() {
    this.initialize_();
    return this.sheet;
  }
  // TODO: Rebuild me
  static isActive() {
    return ApplicationControl.isSheetOpened(this.name);
  }

  //TODO: Not implemented yet
  static updateInteractionDate(row = AbstractSheetService.getCurrentCell()) {
    AbstractSheetService.setValue(this.sheet, DateUtils.toDay(), row,  this.headers.Status);
  }
  
  //TODO: Refactor
  static isCursorInDataRange(startRow = this.indexes.StartingDataRow, endRow) {
    // if (this.isActive()) {
    //   let rowIndex = SheetController.getCurrentCell().getRowIndex();
    //   this.initialize_();
    //   if (DataUtils.isNotEmpty(endRow)) {
    //     endRow = this.getLastRow();
    //   }
      
    //   if (rowIndex.getRowIndex() > startRow && rowIndex < endRow) {
    //     return true;
    //   } else {
    //     UIUtils.warning("Nu ati selectat o persoana din tabel.\n Selectati cu mouse-ul astfel incat celula sa fie marcata ca si selectata.");
    //     return false;
    //   }
    // }
    // UIUtils.warning("Trebuie sa fiti pe foaia Contacte si sa selectati o persoana!");
    // return false;
  }

  /** Sets validation */
  static setDataValidationFor(range, referenceValueToSetValidators) {
    AbstractSheetService.setDataValidation(range, referenceValueToSetValidators, ContacteStatusHandler.getContacteValidationRuleFunction);
  }

  static setValue(row, col, value) {
    this.initialize_();
    AbstractSheetService.setValue(ContacteSheet.sheet, value, row, col);
  }

  /** @private */
  constructor() {
    throw new Error("ContacteSheets object cannot be created because it has only static fields.");
  }
}

