
class ContacteSheet extends AbstractSheetService {

  
  static initialize() {
    if (DataUtils.isEmpty(ContacteSheet.sheet)) {
      this.sheet = SpreadSheetService.getSheetByName(SheetNames.CONTACTE);
    }
  }

  static updateInteractionDate(row = this.getCurrentCell()) {
    this.setValue(DateTime.toDay(), row,  ContacteHeaders.ULTIMA_INTERACTIUNE);
  }

  static setStatusDataValidation(range, statusValue) {
    const statusDataValidation = contateStatusValidationSupplier(statusValue);
    this.setDataValidation(range, statusValue, statusDataValidation);
  }

  static setAndGetNrContacte() {
    // TODO: Not implemented yet but not sure if i should
  }


  static addContacts() {
    // TODO: Implement this
  }


}

