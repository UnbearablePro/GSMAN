
class ContacteSheet extends AbstractSheetService {

  
  static initialize() {
    if (DataUtils.isEmpty(ContacteSheet.sheet)) {
      this.sheet = SpreadSheetService.getSheetByName(SheetNames.CONTACTE);
    }
  }

  //TODO: Not implemented yet and not good
  static updateInteractionDate(row = this.getCurrentCell()) {
    this.setValue(this.sheet, DateUtils.toDay(), row,  this.headers.Status);
  }

  static setAndGetNrContacte() {
    // TODO: Not implemented yet but not sure if i should
  }


  static addContacts() {
    // TODO: Implement this
  }


}

