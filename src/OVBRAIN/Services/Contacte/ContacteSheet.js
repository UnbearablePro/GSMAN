
class ContacteSheet extends AbstractSheetService {


  static initialize() {
    if (DataUtils.isEmpty(ContacteSheet.sheet)) {
      this.sheet = SpreadSheetService.getSheetByName(SheetNames.CONTACTE);
    }
  }

  static updateInteractionDate(row = this.getCurrentCell()) {
    this.setValue(DateTime.toDay(), row, ContacteHeaders.ULTIMA_INTERACTIUNE);
  }

  static setStatusDataValidation(range, statusValue) {
    Lug.build(`Setting Status Data Validation for ${statusValue} on row ${range.getRow()}`);
    const statusDataValidation = ContateStatusValidationSupplier(statusValue);
    this.setDataValidation(range, statusDataValidation);

    const [fontColor, bgColor] = ContacteStatusFormat(statusValue);
    CellService.setDataValidationBackground(range, fontColor, bgColor);
  }

  static setAndGetNrContacte() {
    // TODO: Not implemented yet but not sure if i should
  }

  static addContacts(contacts) {
    contacts.forEach(contact => this.addContact(contact));
  }

  static addContact(contact) {
    this.appendRow([contact.numePrenume, contact.telefon, contact.recomandator, contact.status, contact.data, contact.detalii, contact.profesie, contact.documente, contact.ultimaInteractiune]);
    const range = this.sheet.getRange(this.getLastRowIndex(), ContacteHeaders.STATUS);
    this.setStatusDataValidation(range, contact.status);
  }

  static updateTelefoaneSunate(newValue) {
    const [row, col] = ContacteIndex.TELEFOANE_SUNATE;
    this.setValue(newValue, row, col);
  }

  static updateTelefoaneRaspunse(newValue) {
    const [row, col] = ContacteIndex.TELEFOANE_RASPUNSE;
    this.setValue(newValue, row, col);
  }

  static updateTeluri(telAnalize, telConsultante, telContracte, telService) {
    if (DataUtils.isNotEmpty(telAnalize)) {
      const [row, col] = ContacteIndex.TEL_ANALIZE;
      this.setValue(telAnalize, row, col);
    }
    if (DataUtils.isNotEmpty(telConsultante)) {
      const [row, col] = ContacteIndex.TEL_CONSULTANTE;
      this.setValue(telConsultante, row, col);
    }
    if (DataUtils.isNotEmpty(telContracte)) {
      const [row, col] = ContacteIndex.TEL_CONTRACTE;
      this.setValue(telContracte, row, col);
    }
    if (DataUtils.isNotEmpty(telService)) {
      const [row, col] = ContacteIndex.TEL_SERVICE;
      this.setValue(telService, row, col);
    }
  }

  static setFilterContacteByStatus(filterName) {
    ContacteSheet.removeFilter();
    const filterValues = ContacteStatusFilterRouter.route(filterName);
    if (filterValues != null) {
      const criteria = FilteringOVBService.buildCriteria(filterValues);
      ContacteSheet.setColumnFilterCriteria(ContacteHeaders.STATUS, criteria);
    }
  }

}

