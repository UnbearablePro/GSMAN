
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


}

